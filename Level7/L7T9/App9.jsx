import React, { useState } from "react";
import useIntersectionObserver from "./useIO";

const App9 = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }));

  const loadMore = () => {
    setItems((prev) => [...prev, ...Array.from({ length: 10 })]);
  };

  const loaderRef = useIntersectionObserver(loadMore, {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Infinite Scroll</h1>
      {items.map((_, index) => (
        <div
          key={index}
        
        >
          Item #{index + 1}
        </div>
      ))}
      <div ref={loaderRef}>
        Loading more...
      </div>
    </div>
  );
};

export default App9;
