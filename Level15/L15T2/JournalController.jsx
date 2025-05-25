const STORAGE_KEY = 'journal_entries';

const getEntriesFromStorage = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};

const saveEntriesToStorage = (entries) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const createEntry = (entry) => {
  const entries = getEntriesFromStorage();
  const newEntry = { id: Date.now().toString(), date: new Date().toISOString(), ...entry };
  entries.push(newEntry);
  saveEntriesToStorage(entries);
};

export const getEntries = (filter = {}) => {
  let entries = getEntriesFromStorage();
  if (filter.title) {
    entries = entries.filter(e => e.title.toLowerCase().includes(filter.title.toLowerCase()));
  }
  if (filter.tags && filter.tags.length) {
    entries = entries.filter(e => e.tags?.some(tag => filter.tags.includes(tag)));
  }
  return entries;
};

export const updateEntry = (id, updates) => {
  const entries = getEntriesFromStorage();
  const updated = entries.map(e => e.id === id ? { ...e, ...updates } : e);
  saveEntriesToStorage(updated);
};

export const deleteEntry = (id) => {
  const entries = getEntriesFromStorage();
  const updated = entries.filter(e => e.id !== id);
  saveEntriesToStorage(updated);
};
