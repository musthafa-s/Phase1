import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { getContacts } from './api';

const App5 = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error.message);
      alert('Failed to fetch contacts. Please check your network connection or try again later.');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📇 Contact Book</h1>
      <ContactForm refresh={fetchContacts} />
      <ContactList contacts={contacts} refresh={fetchContacts} />
    </div>
  );
};

export default App5;