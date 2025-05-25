import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/contacts'; 

export const getContacts = () => axios.get(BASE_URL);
export const addContact = (contact) => axios.post(BASE_URL, contact);
export const deleteContact = (email) => axios.delete(`${BASE_URL}/${email}`);
export const updateContact = (email, updated) => axios.put(`${BASE_URL}/${email}`, updated);