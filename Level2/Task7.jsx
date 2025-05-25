import React from 'react'
import { useState } from 'react';

const container = {
    padding: "2px",
    backgroundColor: "rgb(223, 112, 33)",
    border: "1px solid black",
    borderRadius: "8px",
    width: "300px",
    height: "40vh",
    margin: "520px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color:"Blue"
};
const buttonStyle = {
    height: '48px',
    minWidth: '48px',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: 'aliceblue',
    color: 'mediumblue',
    cursor: 'pointer',
    margin: '0 5px' 
};

const Task7 = () => {
    const [item,setItem] =useState(10) 
    const handleAdd =() => {
        setItem(item+1);
    }
    const handleSub =() => {
        setItem(item-1);
    }
  return (
    <div style={container}>
        <h2>Counter</h2>
        <button style={buttonStyle} onClick={handleAdd}>Add</button>
        <p>Value:{item}</p>
        <button style={buttonStyle} onClick={handleSub}>Sub</button>
    </div>
  )
}

export default Task7