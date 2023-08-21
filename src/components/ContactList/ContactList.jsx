import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';
export const ContactList = () => {
  const filteredContactsByName = useSelector(selectVisibleContacts)

  return (
    <ul className={css.contactsList}>
      {filteredContactsByName.map(contact => (
        <ContactListItem key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
};

export default ContactList;
