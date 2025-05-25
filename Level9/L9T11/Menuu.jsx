import React from "react";

const Menuu = () => {
  const menuItems = [
    { id: 1, name: "Margherita Pizza", price: "$12", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Pepperoni Pizza", price: "$15", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Veggie Pizza", price: "$13", img: "https://via.placeholder.com/150" },
    { id: 4, name: "BBQ Chicken Pizza", price: "$16", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Hawaiian Pizza", price: "$14", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🍕 Our Menu</h1>
      <div style={menuGridStyle}>
        {menuItems.map((item) => (
          <div key={item.id} style={menuItemStyle}>
            <img src={item.img} alt={item.name} style={imageStyle} />
            <h3 style={itemNameStyle}>{item.name}</h3>
            <p style={priceStyle}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  margin: "50px auto",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#ff6347", 
  marginBottom: "20px",
};

const menuGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const menuItemStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "10px",
};

const itemNameStyle = {
  fontSize: "1.2rem",
  color: "#333",
  marginBottom: "10px",
};

const priceStyle = {
  fontSize: "1rem",
  color: "black",
  
};

menuItemStyle["&:hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
};

export default Menuu;