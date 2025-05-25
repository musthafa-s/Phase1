import React, { createContext, useState } from 'react'
import Task7 from './Task7'


export const ThemeContext = createContext();

const fontStyle={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
}
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '20px',
  transition: 'background-color 0.3s ease',
  marginLeft:'45%'
};

const App7 = () => {

    const [theme,setTheme] = useState('Light');

    const toggleTheme = (e)=> {
        setTheme((curr) => (curr === 'Light' ? "dark" : "Light"))
    }

  return (
    <ThemeContext.Provider 
    value= {{theme: theme}}>
        <button onClick={toggleTheme} style={buttonStyle}>Toggle Button</button>
        <h1 style={fontStyle}>App Comp</h1>
        <Task7 theme={theme} />
    </ThemeContext.Provider>
  )
}

export default App7