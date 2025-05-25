import React, { createContext, useContext, useState } from 'react';

// Create a context for loading state
const LoadingContext = createContext();

// Provider component to manage loading state
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false); // State to track loading status

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};