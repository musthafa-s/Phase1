import React from "react";
import useGeolocation from "./useGeoLocation";

const containerStyle = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "50px auto",
  background: "linear-gradient(to bottom,rgb(30, 179, 237),rgb(52, 236, 89), #FFFFFF)", 
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "20px",
};

const errorStyle = {
  color: "red",
  fontSize: "1.2rem",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "10px",
};

const App10 = () => {
  const { location, error } = useGeolocation();

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Geolocation </h1>
      {error && <p style={errorStyle}>Error: {error}</p>}
      {location ? (
        <div>
          <p style={paragraphStyle}>Latitude: {location.latitude}</p>
          <p style={paragraphStyle}>Longitude: {location.longitude}</p>
        </div>
      ) : !error ? (
        <p style={paragraphStyle}>Getting your location...</p>
      ) : null}
    </div>
  );
};

export default App10;