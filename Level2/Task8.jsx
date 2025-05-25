import React from 'react'
import { useState } from 'react';

const container = {
    padding: "2px",
    backgroundColor: "rgb(63, 42, 181)",
    border: "1px solid black",
    borderRadius: "8px",
    width: "400px",
    height: "54vh",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color:"black"
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
const outerContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };
  

const Task8 = () => {
    const [text,setText] = useState()
    const handleText = () => {
        setText(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia in illum, eius omnis sunt molestiae ullam temporibus corrupti repellat iste officia, atque deleniti? Quaerat velit, magni ad similique odio adipisci, nesciunt ipsa delectus quis eaque repudiandae magnam laborum? Veritatis?`)
    }
    const hideText = () =>{
        setText("")
    }
  return (
    <div style={outerContainer}>

    <div style={container}>
        <button style={buttonStyle} onClick={handleText}>SHOW</button>
        <h2>{text}</h2>
        <button style={buttonStyle} onClick={hideText}>HIDE</button>
    </div>
    </div>
  )
}

export default Task8