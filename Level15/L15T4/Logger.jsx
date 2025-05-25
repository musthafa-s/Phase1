import { connectDB } from '../utils/db';  
import { fetchWeather } from '../services/weatherService'; 

export async function logWeather() {
  const weather = await fetchWeather();
  if (!weather) return;

  const collection = await connectDB();
  await collection.insertOne(weather);
  console.log("✅ Weather data logged:", weather);
}