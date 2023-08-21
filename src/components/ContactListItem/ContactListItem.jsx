import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(contact.id));
return (
    <li>
      {contact.name} : {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;
