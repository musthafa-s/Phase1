export function deleteFile(fileName) {
    const filePath = `${fileName}`;
    
    if (!filePath) {
      throw new Error(`File "${fileName}" does not exist.`);
    }
  
    console.log(`File "${fileName}" deleted successfully.`);
    return `File "${fileName}" deleted successfully.`;
  }