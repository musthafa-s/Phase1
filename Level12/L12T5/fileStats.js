export const getFileStats = (filename) => {
    const content = localStorage.getItem(filename);
    if (content === null) {
      throw new Error(`File "${filename}" not found.`);
    }
  
    const stats = {
      size: content.length,
      creationTime: new Date().toISOString(),
      lastModifiedTime: new Date().toISOString(),
    };
    return stats;
  };
  