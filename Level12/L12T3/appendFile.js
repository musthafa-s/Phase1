export const appendFile = async (filename, contentToAdd) => {
    try {
      const oldContent = localStorage.getItem(filename) || "";
      const newContent = oldContent + contentToAdd;
      localStorage.setItem(filename, newContent);
      return `Appended to "${filename}".`;
    } catch (err) {
      throw new Error("Append failed: " + err.message);
    }
  };
  