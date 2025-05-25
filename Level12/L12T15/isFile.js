export function isFile(filename) {
    const content = localStorage.getItem(filename);
    return content !== null;
  }
  