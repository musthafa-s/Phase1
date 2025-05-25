import React, { useEffect } from "react";

function Task13() {
  useEffect(() => {
    const product = {
      name: "Laptop",
      price: 80000,
      category: "Electronics",
      inStock: true,
    };

    const { name, price, category, inStock } = product;

    const describeProduct = ({ name, price, category, inStock }) => {
      return `${name} is a ${category} item priced at ₹${price}. In stock: ${inStock}`;
    };

    console.log("Destructured:", name, price, category, inStock);
    console.log("Description:", describeProduct(product));
  }, []);

  return <p>Check the console for output.</p>;
}

export default Task13;