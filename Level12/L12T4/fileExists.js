export const fileExists = (filename) => {
    return localStorage.getItem(filename) !== null;
  };
  