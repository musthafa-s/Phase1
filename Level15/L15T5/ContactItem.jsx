import React from 'react';
import { deleteContact } from './api';

const ContactItem = ({ contact, refresh }) => {
  const handleDelete = async () => {
    await deleteContact(contact._id);
    refresh();
  };

  return (
    <div>
      <p><strong>{contact.name}</strong> - {contact.email} - {contact.phone}</p>
      <p>{contact.address}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactItem;
