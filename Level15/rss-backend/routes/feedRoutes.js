// routes/feedRoutes.js
const express = require("express");
const router = express.Router();
const Feed = require("../models/feedModel"); // assuming you have a Feed model in the models folder

// Example Route for fetching RSS feeds
router.get("/", async (req, res) => {
  try {
    // Fetch feeds from the database or an external API
    const feeds = await Feed.find();
    res.json(feeds);
  } catch (error) {
    console.error("Error fetching feeds:", error);
    res.status(500).json({ error: "Failed to fetch feeds" });
  }
});

// Example Route for adding a new feed URL
router.post("/", async (req, res) => {
  const { url } = req.body;
  try {
    const newFeed = new Feed({ url });
    await newFeed.save();
    res.json(newFeed);
  } catch (error) {
    console.error("Error adding feed:", error);
    res.status(500).json({ error: "Failed to add feed" });
  }
});

// Example Route for previewing an RSS feed
router.post("/preview", async (req, res) => {
  const { url } = req.body;
  try {
    // Simulating preview logic
    const preview = { message: `Preview for feed: ${url}` };
    res.json(preview);
  } catch (error) {
    console.error("Error fetching preview feed:", error);
    res.status(500).json({ error: "Failed to preview feed" });
  }
});

// Mark an item as read (PATCH request)
router.patch("/read/:itemId", async (req, res) => {
  const { itemId } = req.params;
  try {
    const feedItem = await Feed.findById(itemId);
    if (!feedItem) {
      return res.status(404).json({ error: "Feed item not found" });
    }
    feedItem.read = true; // Assuming you have a 'read' field in your Feed model
    await feedItem.save();
    res.json({ message: "Feed item marked as read", item: feedItem });
  } catch (error) {
    console.error("Error marking item as read:", error);
    res.status(500).json({ error: "Failed to mark item as read" });
  }
});

module.exports = router;
