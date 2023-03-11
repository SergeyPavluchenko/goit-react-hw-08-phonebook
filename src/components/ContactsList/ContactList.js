import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { selectContact } from 'redux/selectors';
import { ContactsListStyled } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContact);

  const filtredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  const contactsFiltred = filtredContacts();

  return (
    <ContactsListStyled>
      {contactsFiltred &&
        contactsFiltred.map(({ id, name, number }) => {
          return <ContactItem id={id} key={id} name={name} number={number} />;
        })}
    </ContactsListStyled>
  );
};

export default ContactList;
