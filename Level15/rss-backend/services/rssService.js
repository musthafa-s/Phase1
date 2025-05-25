// services/rssService.js
const Parser = require("rss-parser");
const Article = require("../models/Article");

const parser = new Parser();

const fetchFeed = async (feedUrl) => {
  try {
    const feed = await parser.parseURL(feedUrl);
    
    const articles = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      contentSnippet: item.contentSnippet,
      pubDate: new Date(item.pubDate),
      source: feed.link,
    }));

    // Save articles to MongoDB
    await Article.insertMany(articles);
    return articles;
  } catch (error) {
    throw new Error("Failed to fetch RSS feed: " + error.message);
  }
};

module.exports = { fetchFeed };
