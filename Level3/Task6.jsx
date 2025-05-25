import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "blue",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
  maxWidth: "500px",
  margin: "20px auto",
};

const headingStyle = {
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const selectStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
  width: "100%",
};

const listItemStyle = {
  padding: "10px",
  marginBottom: "5px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "1rem",
  color: "#333",
};

const Task6 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const items = [
    { id: 1, name: "Rohit Sharma", category: "Batsman" },
    { id: 2, name: "Virat Kohli", category: "Batsman" },
    { id: 3, name: "Jasprit Bumrah", category: "Pace Bowler" },
    { id: 4, name: "R.Ashwin", category: "Spin Bowler" },
    { id: 5, name: "MS Dhoni", category: "WK.Batsman" },
    { id: 6, name: "Hardik Pandya", category: "All rounder" },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Search Here...</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={selectStyle}
      >
        <option value="All">All</option>
        <option value="Batsman">Batsman</option>
        <option value="Pace Bowler">Pace Bowler</option>
        <option value="Spin Bowler">Spin Bowler</option>
        <option value="WK.Batsman">WK.Batsman</option>
        <option value="All rounder">All rounder</option>
      </select>

      {/* Display Filtered List */}
      <ul style={listStyle}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} style={listItemStyle}>
              {item.name} ({item.category})
            </li>
          ))
        ) : (
          <li style={listItemStyle}>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Task6;