import React from 'react';

function FeedList({ feeds }) {
  // Ensure feeds is always an array
  if (!Array.isArray(feeds)) {
    return <div>No feeds available</div>;
  }

  return (
    <div>
      <h2>Articles</h2>
      {feeds.length > 0 ? (
        <ul>
          {feeds.map((feed, index) => (
            <li key={index}>{feed.title}</li> // Customize according to your feed object structure
          ))}
        </ul>
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default FeedList;
