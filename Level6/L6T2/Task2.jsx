import React from 'react';
import { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f8ff', // Light blue background
  fontFamily: 'Arial, sans-serif',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '1rem',
  backgroundColor: '#4CAF50', // Green button
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#45a049', // Darker green on hover
};

const imageStyle = {
  marginTop: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const textStyle = {
  fontSize: '1.2rem',
  color: '#333',
  marginTop: '20px',
};

const Task2 = () => {
  const [img, setImg] = useState(`I want You to Say Something...`);
  const handleShow = (e) => {
    setImg(
      'https://th.bing.com/th/id/OIP.GHXwY4gWCNLdnoSaj-PCLAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    );
  };
  const handleHide = (e) => {
    window.location.reload();
  };
  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
        onClick={handleShow}
      >
        Show
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
        onClick={handleHide}
      >
        Hide
      </button>
      {img.includes('http') ? (
        <img src={img} alt="Displayed" style={imageStyle} />
      ) : (
        <p style={textStyle}>{img}</p>
      )}
    </div>
  );
};

export default Task2;