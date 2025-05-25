export const copyFile = (srcFileName, destFileName) => {
    if (!localStorage.getItem(srcFileName)) {
      throw new Error(`Source file "${srcFileName}" does not exist.`);
    }
    
    if (localStorage.getItem(destFileName)) {
      throw new Error(`Destination file "${destFileName}" already exists.`);
    }
  
    const fileContent = localStorage.getItem(srcFileName);
    localStorage.setItem(destFileName, fileContent);
    return `File "${srcFileName}" copied to "${destFileName}".`;
  };
  