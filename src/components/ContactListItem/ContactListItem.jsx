import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(contact.id));
return (
    <li>
      {contact.name} : {contact.phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;
