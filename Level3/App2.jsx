import React from "react";
import { Formik, Form, Field } from "formik";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
};

const labelStyle = {
  fontSize: "1rem",
  color: "#333",
  marginBottom: "5px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  marginTop: "10px",
};

const App2 = () => {
  return (
    <div style={containerStyle}>
      <h1>Multi-Field Form</h1>
      <Formik
        initialValues={{ name: "", email: "", age: "" }}
        onSubmit={(values) => {
          console.log("Form Data:", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} style={formStyle}>
            <div>
              <label htmlFor="name" style={labelStyle}>
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                style={inputStyle}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={inputStyle}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="age" style={labelStyle}>
                Age:
              </label>
              <Field
                type="number"
                id="age"
                name="age"
                style={inputStyle}
                placeholder="Enter your age"
              />
            </div>

            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App2;