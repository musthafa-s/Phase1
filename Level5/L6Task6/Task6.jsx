import React, { useState, useEffect } from "react";

const API_KEY = "be432db4"; // Replace with your actual API key
const API_URL = "https://www.omdbapi.com/";

const Task6 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.length < 3) return;
    setLoading(true);
    setError(null);

    fetch(`${API_URL}?s=${searchTerm}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError(data.Error);
        }
      })
      .catch(() => setError("Failed to fetch movies"))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.movieList}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={styles.movieCard}>
            <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  input: {
    padding: "10px",
    width: "80%",
    maxWidth: "400px",
    marginBottom: "10px",
  },
  movieList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  movieCard: {
    margin: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "150px",
    textAlign: "center",
  },
  poster: {
    width: "100px",
    height: "150px",
  },
  error: {
    color: "red",
  },
};

export default Task6;