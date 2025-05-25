export function clearFile(fileName) {
    const file = localStorage.getItem(fileName);
    if (!file) throw new Error(`File "${fileName}" not found`);
    localStorage.setItem(fileName, "");
    return `${fileName} content cleared.`;
  }