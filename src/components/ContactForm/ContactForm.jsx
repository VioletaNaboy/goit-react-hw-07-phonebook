import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from './ContactsForm.module.css';
import { getContacts } from '../../redux/selectors'; 
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts); 
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) { 
      alert(`${name} is already in contacts.`);
            } else {
              dispatch(addContact(name, number))
          }
e.target.reset();}
return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm;
