import React, { useState } from 'react';

const Task12 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [info, setInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // used for stopping auto page refresh while submitting the button
    const newInfo = [
      ...info, {
        name: name,
        age: age,
        gender: gender
      }
    ];
    setInfo(newInfo);
    console.log(newInfo);
  };

  // Inline styles in JS
  const formContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    margin: '50px auto',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px'
  };
  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  return (
    <div style={formContainerStyle}>
      <h1 style={headingStyle}>Login Form</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          style={inputStyle}
          placeholder='Enter your Name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        
        <input
          style={inputStyle}
          placeholder='Enter your Age'
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)} />
        
        <select
          style={inputStyle}
          value={gender}
          onChange={(e) => setGender(e.target.value)}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        
        <button type="submit" style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Task12;
