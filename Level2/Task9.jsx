import React from 'react'
import { useState } from 'react';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const input = {
  width: '70%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const para = {
  fontSize: '1.2rem',
  color: 'blue',
};

const Task9 = () => {
  const [text, setText] = useState("")

  return (
    <div style={container}>
      <input
        placeholder='Enter your text'
        style={input} value={text}
        onChange={(e) => setText(e.target.value)}></input>
      <h3 style={para}>{text}</h3>
    </div>
  )
}

export default Task9