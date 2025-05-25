//Container
import React,{useState} from 'react'
import Users from './Users'


const fontStyle={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
}
const Task7 = ({theme}) => {
  return (
    <div style={fontStyle}>
        <h1>Container</h1>
        <Users />
    </div>
  )
}

export default Task7