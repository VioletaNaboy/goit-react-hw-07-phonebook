import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  console.log(filter)
  console.log(contacts)
  const filteredContactsByName = contacts.filter(contact =>
   contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {filteredContactsByName.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          />
      ))}
    </ul>
  );
};

export default ContactList;
