// D:\React JS\my-react-app\src\Task5.jsx

import React, { useState } from 'react';

const buttonStyle = {
  fontSize: '1.5rem',
  padding: '20px',
  border: 'none',
  backgroundColor: '#e0e0e0',
  cursor: 'pointer',
  borderRadius: '5px',
};

const calcStyle = {
  display: 'inline-block',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

function Task5() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState('');
  const [firstOperand, setFirstOperand] = useState('');

  const handleClick = (value) => setInput(input + value);
  const handleOperator = (op) => {
    setFirstOperand(input);
    setOperator(op);
    setInput('');
  };
  const handleClear = () => {
    setInput('');
    setResult(null);
    setOperator('');
    setFirstOperand('');
  };
  const handleEquals = () => {
    if (firstOperand && operator && input) {
      let calculation;
      switch (operator) {
        case '+': calculation = parseFloat(firstOperand) + parseFloat(input); break;
        case '-': calculation = parseFloat(firstOperand) - parseFloat(input); break;
        case '*': calculation = parseFloat(firstOperand) * parseFloat(input); break;
        case '/': calculation = parseFloat(firstOperand) / parseFloat(input); break;
        default: break;
      }
      setResult(calculation);
      setInput('');
      setFirstOperand('');
      setOperator('');
    }
  };

  return (
    <div style={calcStyle}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>{input || '0'}</div>
        <div style={{ fontSize: '1.5rem', color: '#888' }}>{result !== null ? result : ''}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px' }}>
        {[1,2,3,4,5,6,7,8,9,0].map(num => (
          <button key={num} style={buttonStyle} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
        {['+', '-', '*', '/'].map(op => (
          <button key={op} style={buttonStyle} onClick={() => handleOperator(op)}>{op}</button>
        ))}
        <button style={buttonStyle} onClick={handleClear}>C</button>
        <button style={buttonStyle} onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default Task5;
