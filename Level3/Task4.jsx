import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "20px",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
  width: "100%",
  maxWidth: "400px",
};

const listItemStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "15px",
  padding: "10px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const errorStyle = {
  color: "red",
  fontSize: "0.875rem",
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
  marginTop: "20px",
};

const validationSchema = Yup.object({
  items: Yup.array()
    .of(
      Yup.object({
        id: Yup.string().required("Missing unique key"),
        name: Yup.string().required("Item name is required"),
      })
    )
    .required("At least one item is required"),
});

const Task4 = () => {
  const initialValues = {
    items: [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
      { id: "3", name: "" },
    ],
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>List with Unique Keys & Console Errors</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("✅ Form Data Submitted:", values);
        }}
      >
        {({ values, errors }) => {
          useEffect(() => {
            const ids = values.items.map((item) => item.id);
            const duplicateKeys = ids.filter((id, index) => ids.indexOf(id) !== index);

            if (duplicateKeys.length > 0) {
              console.error("❌ Duplicate Keys Found:", duplicateKeys);
            }

            values.items.forEach((item, index) => {
              if (!item.id) {
                console.error(`❌ Missing Key at Index ${index}`);
              }
              if (!item.name) {
                console.error(`❌ Missing Name at Index ${index}`);
              }
            });

            if (Object.keys(errors).length > 0) {
              console.error("❌ Form Errors:", errors);
            }
          }, [values, errors]);

          return (
            <Form>
              <ul style={listStyle}>
                {values.items.map((item, index) => (
                  <li key={index} style={listItemStyle}>
                    <Field
                      type="text"
                      name={`items[${index}].id`}
                      placeholder="ID"
                      style={inputStyle}
                    />
                    <Field
                      type="text"
                      name={`items[${index}].name`}
                      placeholder="Name"
                      style={inputStyle}
                    />
                    <ErrorMessage
                      name={`items[${index}].id`}
                      component="div"
                      style={errorStyle}
                    />
                    <ErrorMessage
                      name={`items[${index}].name`}
                      component="div"
                      style={errorStyle}
                    />
                  </li>
                ))}
              </ul>
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

export default Task4;