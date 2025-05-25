import React from 'react';

const Box1 = {
  color: 'Black',
  fontSize: '2.5rem',
  textAlign: 'center',
  marginTop: '20%',
  fontFamily: 'Arial, sans-serif',
  textShadow: '2px 2px 4px #000000'
};

const Task4 = ({cource,day}) => {
  return (
    <div style={Box1}>
      <p>{day}</p>
      <p>{cource}</p>
    </div>
  );
};

Task4.defaultProps = {
  cource : "Hello World!...",
  day : "tuesday"
};

export default Task4;