import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';

const ProductsList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {Products.map((Product) => (
          <li key={Product.id}>
            <Link to={`/products/${Product.id}`}>
              {Product.name} - {Product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
