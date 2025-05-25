import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
    </div>
  );
};

export default ProductDetails;
