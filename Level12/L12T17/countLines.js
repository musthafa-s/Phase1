export function countLines(fileName) {
    const file = localStorage.getItem(fileName);
    if (!file) throw new Error(`File "${fileName}" not found`);
    return file.split("\n").length;
  }