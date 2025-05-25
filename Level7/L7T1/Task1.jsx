import React from 'react';
import useToggle from './useToggle';

const containerStyle = {
  textAlign: 'center',
  marginTop: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f0f8ff', // Light blue background
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#ff5722', // Vibrant orange button
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#e64a19', // Darker orange on hover
  transform: 'scale(1.05)', // Slight zoom effect on hover
};

const contentStyle = {
  marginTop: '15px',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#e3f2fd', // Light blue content background
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  color: '#333',
  fontSize: '1rem',
  lineHeight: '1.6',
};

const Task1 = () => {
  const [show, toggle] = useToggle();

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.target.style.transform = buttonHoverStyle.transform;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.transform = 'scale(1)';
        }}
        onClick={toggle}
      >
        {show ? 'Hide Content' : 'Show Content'}
      </button>

      {show && (
        <div style={contentStyle}>
          🎉{' '}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati voluptatum deleniti voluptate quam
            excepturi saepe unde sequi laborum nostrum.
          </p>
        </div>
      )}
    </div>
  );
};

export default Task1;