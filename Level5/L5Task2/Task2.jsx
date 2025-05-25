import React from 'react';

function Task2({ product, onAddToCart }) {
  return (
    <div style={styles.product}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h2 style={styles.name}>{product.name}</h2>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
      >
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  product: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '200px', 
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.5em',
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1em',
    color: '#666',
    marginBottom: '15px',
  },
  price: {
    fontSize: '1.2em',
    color: '#000',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

export default Task2;
