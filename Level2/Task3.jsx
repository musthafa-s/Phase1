import React from 'react'

const container = {
    color: 'Red',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginTop: '20%',
    fontFamily: 'Arial, sans-serif',
    textShadow: '2px 2px 4px #000000'
  }
const Task3 = ({name}) => {
  return (
    <div style={container}> 
    <h1>Hello,{name} !</h1>
    </div>
  )
}

export default Task3