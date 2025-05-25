import React from 'react';
import { useFormik } from 'formik';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
};

const labelStyle = {
  fontSize: '1rem',
  color: '#333',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const Task1 = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
    },
    onSubmit: (values) => {
      console.log(values); // Logs the form data
      // You can also send the data to a server here
    },
  });

  return (
    <div style={containerStyle}>
      <form onSubmit={formik.handleSubmit} style={formStyle}>
        <h1>Simple Form Creation</h1>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Age:</label>
        <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Task1;