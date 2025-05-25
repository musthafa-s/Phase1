export const createDirectory = (dirName) => {
    if (localStorage.getItem(dirName)) {
      throw new Error(`Directory ${dirName} already exists.`);
    }
    
    localStorage.setItem(dirName, JSON.stringify({ created: new Date() }));
    return `Directory ${dirName} created successfully.`;
  };
  