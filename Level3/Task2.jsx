import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f8ff",
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

const errorStyle = {
  color: "red",
  fontSize: "0.875rem",
  marginTop: "-5px",
  marginBottom: "10px",
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

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Only alphabets are allowed")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  age: Yup.number()
    .positive("Age must be positive")
    .integer("Age must be a number")
    .required("Age is required"),
});

const Task3 = () => {
  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Validated Form</h1>
      <Formik
        initialValues={{ name: "", email: "", age: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Data:", values);
        }}
      >
        {({ handleSubmit, values }) => {
          if (values.name && !/^[A-Za-z ]*$/.test(values.name)) {
            console.log("Invalid Characters in Name:", values.name);
          }

          return (
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
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={errorStyle}
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
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={errorStyle}
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
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  style={errorStyle}
                />
              </div>

              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Task3;