export const renameFile = (oldFilename, newFilename) => {
    const content = localStorage.getItem(oldFilename);
    if (!content) {
      throw new Error(`File "${oldFilename}" does not exist.`);
    }
    localStorage.setItem(newFilename, content);
    localStorage.removeItem(oldFilename);
    return `File renamed from "${oldFilename}" to "${newFilename}".`;
  };
  