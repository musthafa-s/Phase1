import React, { useState } from 'react';
import Task2 from './Task2';

const products = [
  {
    id: 1,
    name: 'Mobile 1',
    imageUrl: 'https://th.bing.com/th/id/OIP.0H_GXDBmj8t95s1KzMU5GAHaL5?w=119&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    price: 99.99,
    description: 'Luxury Mobile Phone',
  },
  {
    id: 2,
    name: 'Mobile 2',
    imageUrl: 'https://th.bing.com/th/id/OIP.7_MoJF6CrOB3c9bCxvPLQAHaHP?w=194&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    price: 29.99,
    description: 'Budget friendly Mobile',
  },
  {
    id: 3,
    name: 'Mobile 3',
    imageUrl: 'https://iorbitnews.com/wp-content/uploads/2023/03/SM-A346_Galaxy-A34-5G_Awesome-Violet_Front-scaled.jpg',
    price: 39.99,
    description: 'Average Price Mobile',
  },
];

function App2() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MS AMAZON</h1>
      <div style={styles.cart}>
        <button style={styles.cartButton}>
          Cart ({cart.length})
        </button>
      </div>

      <div style={styles.productList}>
        {products.map((product) => (
          <Task2 key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  cart: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  cartButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  productImage: {
    width: '200px',  
    height: '300px', 
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default App2;