import React from 'react'
import PropTypes from 'prop-types'

const container = {
    padding: "2px",
    backgroundColor: "rgb(212, 239, 34)",
    border: "1px solid black",
    borderRadius: "8px",
    width: "300px",
    height: "40vh",
    margin: "10px",
    display: "inline-block",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "100px",
    color:"Blue"
  };

const Task6 = ({ name, age, city }) => {
  return (
    <div style={container}>
 <h1>User List</h1>
      <hr></hr>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
    </div>
  )
}
Task6.defaultProps = {
  name: "Default Name",
  age: "25",
  city: "Default City"
};

Task6.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string
  };
  

export default Task6