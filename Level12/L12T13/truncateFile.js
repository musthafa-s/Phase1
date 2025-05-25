export function truncateFile(filename, length) {
    const stored = localStorage.getItem(filename);
    if (stored) {
      const truncated = stored.substring(0, length);
      localStorage.setItem(filename, truncated);
      console.log(`Truncated ${filename} to ${length} characters.`);
      return truncated;
    } else {
      throw new Error(`File "${filename}" not found`);
    }
  }
  