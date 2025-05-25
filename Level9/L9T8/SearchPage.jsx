import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { items } from "./Data";
const categories = ["electronics", "fashion", "kitchen"];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("min") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max") || "");

  useEffect(() => {
    const params = {};
    if (searchTerm) params.q = searchTerm;
    if (category) params.category = category;
    if (minPrice) params.min = minPrice;
    if (maxPrice) params.max = maxPrice;
    setSearchParams(params);
  }, [searchTerm, category, minPrice, maxPrice, setSearchParams]);

  const filteredItems = items.filter((item) => {
    return (
      (!searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!category || item.category === category) &&
      (!minPrice || item.price >= parseInt(minPrice)) &&
      (!maxPrice || item.price <= parseInt(maxPrice))
    );
  });

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "700px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "20px",
      textAlign: "center",
      color: "#333",
    },
    form: {
      display: "flex",
      gap: "10px",
      marginBottom: "30px",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      flex: "1 1 45%",
    },
    select: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      flex: "1 1 45%",
    },
    itemList: {
      listStyle: "none",
      padding: 0,
    },
    item: {
      backgroundColor: "#f5f5f5",
      padding: "12px 16px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "18px",
    },
    noResults: {
      textAlign: "center",
      color: "#999",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛍️ Product Search</h2>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={styles.input}
        />
      </div>

      <ul style={styles.itemList}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} style={styles.item}>
              {item.name} — <strong>${item.price}</strong>
            </li>
          ))
        ) : (
          <p style={styles.noResults}>No items found 😕</p>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;