export function duplicateFile(source, destination) {
    const content = localStorage.getItem(source);
    if (!content) throw new Error(`File "${source}" not found`);
    localStorage.setItem(destination, content);
    return `File duplicated to ${destination}`;
  }