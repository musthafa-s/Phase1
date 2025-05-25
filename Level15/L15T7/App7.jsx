import React, { useState, useEffect } from 'react';
import { fetchFeeds } from './api/rssApi';
import FeedInput from './components/FeedInput';
import FeedList from './components/FeedList';

function App7() {
  const [feeds, setFeeds] = useState([]); // Make sure feeds is initialized as an array

  useEffect(() => {
    fetchFeeds()
      .then(fetchedFeeds => setFeeds(fetchedFeeds))
      .catch(err => console.error('Error loading feeds:', err));
  }, []);

  return (
    <div>
      <h1>RSS Reader</h1>
      <FeedInput setFeeds={setFeeds} />
      <FeedList feeds={feeds} />
    </div>
  );
}

export default App7;
