import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { ContactItemLi, ContactItemBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemLi>
      <p>
        {name}: <span>{number}</span>
      </p>

      <ContactItemBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ContactItemBtn>
    </ContactItemLi>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
