export function changePermissions(fileName, permission) {
    const file = localStorage.getItem(fileName);
    if (!file) {
      throw new Error(`File "${fileName}" not found`);
    }
    localStorage.setItem(`${fileName}.permission`, permission);
    return `Permissions for ${fileName} set to ${permission}`;
  }