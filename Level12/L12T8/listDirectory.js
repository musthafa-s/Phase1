export const listDirectory = () => {
    const directory = Object.keys(localStorage);
    
    if (directory.length === 0) {
      throw new Error("No files or directories found.");
    }
    
    return directory;
  };
  