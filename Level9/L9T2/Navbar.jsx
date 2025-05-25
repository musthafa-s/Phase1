import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: '#333',
      overflow: 'hidden',
    },
    link: {
      float: 'left',
      display: 'block',
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '14px 20px',
      textDecoration: 'none',
    }
  };

  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/products" style={styles.link}>Products</Link>

    </div>
  );
};

export default Navbar;
