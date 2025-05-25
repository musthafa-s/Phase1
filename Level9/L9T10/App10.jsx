import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

const Home = () => <h2>Welcome to the Home Page</h2>;
const About = lazy(() => import("./About")); // Ensure About.jsx exists
const Users = lazy(() => import("./Users")); // Ensure Users.jsx exists

const App10 = () => {
  return (
    <>
      <style>
        {`
          nav a {
            margin: 0 10px;
            text-decoration: none;
            font-weight: bold;
          }
          nav {
            margin-bottom: 20px;
          }
        `}
      </style>

      <Router>
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/about">About</Link>
        </nav>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App10;