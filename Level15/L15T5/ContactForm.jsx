import React, { useState } from 'react';
import { addContact } from './api';

const ContactForm = ({ refresh }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(contact);
    setContact({ name: '', email: '', phone: '', address: '' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={contact.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={contact.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={contact.phone} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={contact.address} onChange={handleChange} />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
