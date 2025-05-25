import React from "react";
import { FixedSizeList as List } from "react-window";

const App9 = () => {
  
  const items = Array.from({ length: 10000 }, (_, index) => `Item #${index + 1}`);

  
  const Row = ({ index, style }) => (
    <div style={{ ...style, ...listItemStyle, ...(index % 2 === 0 ? evenRowStyle : {}) }}>
      {items[index]}
    </div>
  );

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Virtual Scrolling with react-window</h2>

      <List
        height={500} 
        itemCount={items.length} 
        itemSize={35} 
        width={"100%"} 
      >
        {Row}
      </List>
    </div>
  );
};


const containerStyle = {
  maxWidth: "600px",
  margin: "30px auto",
  padding: "20px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "1.5rem",
  color: "#333",
};

const listItemStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
  backgroundColor: "#fafafa",
  transition: "background-color 0.3s ease", 
};

const evenRowStyle = {
  backgroundColor: "#f0f0f0", 
};

export default App9;