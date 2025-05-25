export const watchFile = async (filename) => {
    try {
      const response = await fetch(`/${filename}`);
      if (!response.ok) {
        throw new Error(`File "${filename}" does not exist.`);
      }
      const content = await response.text();
      console.log("Watching file:", filename);
      console.log("Initial content:", content);
      return content;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  