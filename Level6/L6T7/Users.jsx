import React from 'react'
import User from './User'


const fontStyle={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
}
const Users = () => {

  return (
    <div style={fontStyle}>
        <h1>Users</h1>
        <User />
        </div>
  )
}

export default Users