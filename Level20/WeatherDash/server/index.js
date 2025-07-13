const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();
const cache = new NodeCache({ stdTTL: 600 });
const API_KEY = "e7322461474cda160ca42f8f6e41de42"; 

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/weatherdash", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Favorite = mongoose.model("Favorite", { city: String });

app.use(cors());
app.use(rateLimit({ windowMs: 60000, max: 60 }));

app.get("/api/weather/current", async (req, res) => {
  const { city, unit } = req.query;
  const key = `current-${city}-${unit}`;
  if (cache.has(key)) return res.json(cache.get(key));

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;
    const response = await axios.get(url);
    const data = {
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
    };
    cache.set(key, data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch current weather" });
  }
});

app.get("/api/weather/forecast", async (req, res) => {
  const { city, unit } = req.query;
  const key = `forecast-${city}-${unit}`;
  if (cache.has(key)) return res.json(cache.get(key));

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`;
    const response = await axios.get(url);
    const forecast = response.data.list.filter((_, i) => i % 8 === 0).map((f) => ({
      date: f.dt_txt.split(" ")[0],
      temp: f.main.temp,
      icon: f.weather[0].icon,
    }));
    cache.set(key, forecast);
    res.json(forecast);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch forecast" });
  }
});

app.get("/api/weather/historical", async (req, res) => {
  const { city, unit } = req.query;

  try {
    const geo = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const { lat, lon } = geo.data[0];
    const now = Math.floor(Date.now() / 1000);
    const oneDay = 86400;

    const promises = Array.from({ length: 5 }).map((_, i) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${
          now - i * oneDay
        }&units=${unit}&appid=${API_KEY}`
      )
    );

    app.get("/api/favorites", async (req, res) => {
      const cities = await Favorite.find();
      res.json(cities);
    });
    
    app.post("/api/favorites", express.json(), async (req, res) => {
      const { city } = req.body;
      const exists = await Favorite.findOne({ city });
      if (!exists) {
        const fav = new Favorite({ city });
        await fav.save();
      }
      res.json({ success: true });
    });
    
    const results = await Promise.all(promises);
    const temps = results.map((r, i) => ({
      date: new Date((now - i * oneDay) * 1000).toISOString().split("T")[0],
      temp: r.data.current.temp,
    }));
    res.json(temps.reverse());
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch historical data" });
  }
});

app.listen(5000, () => console.log("🌤️ Weather API server running on port 5000"));
