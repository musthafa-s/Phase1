import React from 'react';


const container = {
  padding: "2px",
  backgroundColor: "rgb(47, 17, 146)",
  border: "1px solid black",
  borderRadius: "8px",
  width: "300px",
  height: "40vh",
  margin: "10px",
  display: "inline-block",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginTop: "100px",
  color:"white"
};

const Task5 = ({ name, age, city }) => {
  return (
    
    <div style={container}>
      <h1>User List</h1>
      <hr></hr>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
    </div>
  );
};

export default Task5;