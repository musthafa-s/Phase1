
import React, { useState } from "react";
import { markAsRead } from '../api/rssApi';

const FeedItem = ({ feed, setFeeds }) => {
  const [read, setRead] = useState(feed.read);

  const handleMarkRead = async () => {
    await markAsRead(feed._id);
    setRead(true); 
  };

  return (
    <div style={{ backgroundColor: read ? "#f0f0f0" : "#fff", padding: "10px", marginBottom: "10px" }}>
      <h3>{feed.title}</h3>
      <p>{feed.contentSnippet}</p>
      <a href={feed.link} target="_blank" rel="noopener noreferrer">Read full article</a>
      <button onClick={handleMarkRead} disabled={read}>Mark as Read</button>
    </div>
  );
};

export default FeedItem;
