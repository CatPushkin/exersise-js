import axios from 'axios';

const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
const getContacts = async () => {
  const contacts = await fetch(`${BASE_URL}/contacts`);
  return contacts.json();
};
// getContacts().then(console.log);
// GET -> /contacts/:id
const getContactById = async id => {
  const resp = await fetch(`${BASE_URL}/contacts/${id}`);
  return resp.json();
};
// getContactById(1).then(console.log);
// POST -> /contacts
const createContact = async contact => {
  const res = await axios.post(`${BASE_URL}/contacts`, contact);
  return res.data;
};
// createContact({
//   createdAt: '2023-04-10T21:33:00.458Z',
//   name: 'Liubov Pushkina',
//   number: '518-844-4344',
//   avatar:
//     'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg',
//   email: 'pelmeshek@gmail.com',
// }).then(console.log);

// PUT -> /contacts/:id
const updateContact = async newContact => {
  const res = await axios.put(
    `${BASE_URL}/contacts/${newContact.id}`,
    newContact
  );
  return res;
};
// updateContact({
//   createdAt: '2023-04-10T21:33:00.458Z',
//   name: 'Lyuba bc51',
//   number: '518-844-4344',
//   email: 'pelmeshek@gmail.com',
//   id: 50,
// });
// DELETE -> /contacts/:id
const deleteContact = async id => {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
};
// deleteContact(50);
// deleteContact(53);
