import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from './schemasTs5/basicSchema';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'aqua',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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

const errorStyle = {
  color: 'red',
  fontSize: '0.875rem',
  marginTop: '-10px',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  marginTop: '10px',
};

const buttonDisabledStyle = {
  ...buttonStyle,
  opacity: 0.35,
  cursor: 'not-allowed',
};

const Task5Basic = () => {
  const { values, handleBlur, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      cPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" style={formStyle}>
      <label htmlFor="email" style={labelStyle}>Email</label>
      <input
        id="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        type="email"
        placeholder="Enter your email"
        style={inputStyle}
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      {errors.email && touched.email && <div style={errorStyle}>{errors.email}</div>}

      <label htmlFor="age" style={labelStyle}>Age</label>
      <input
        id="age"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
        type="number"
        placeholder="Enter your age"
        style={inputStyle}
        className={errors.age && touched.age ? 'input-error' : ''}
      />
      {errors.age && touched.age && <div style={errorStyle}>{errors.age}</div>}

      <label htmlFor="password" style={labelStyle}>Password</label>
      <input
        id="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="Enter your password"
        style={inputStyle}
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      {errors.password && touched.password && <div style={errorStyle}>{errors.password}</div>}

      <label htmlFor="cPassword" style={labelStyle}>Confirm Password</label>
      <input
        id="cPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.cPassword}
        type="password"
        placeholder="Enter your confirm password"
        style={inputStyle}
        className={errors.cPassword && touched.cPassword ? 'input-error' : ''}
      />
      {errors.cPassword && touched.cPassword && <div style={errorStyle}>{errors.cPassword}</div>}

      <button type="submit" style={Object.keys(errors).length ? buttonDisabledStyle : buttonStyle} disabled={Object.keys(errors).length}>
        Submit
      </button>
    </form>
  );
};

export default Task5Basic;