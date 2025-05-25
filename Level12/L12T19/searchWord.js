export function searchWord(fileName, word) {
    const file = localStorage.getItem(fileName);
    if (!file) throw new Error(`File "${fileName}" not found`);
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    return (file.match(regex) || []).length;
  }