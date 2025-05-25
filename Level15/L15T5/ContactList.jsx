import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, refresh }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} refresh={refresh} />
      ))}
    </div>
  );
};

export default ContactList;
