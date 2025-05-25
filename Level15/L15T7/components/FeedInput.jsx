import React, { useState } from "react";
import { fetchFeedByUrl } from "../api/rssApi";

export default function FeedInput({ setFeeds }) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const items = await fetchFeedByUrl(url); // Fetch feed from backend
      setFeeds(items); // Update the state in App7.jsx
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter RSS feed URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Fetch Feed</button>
    </form>
  );
}
