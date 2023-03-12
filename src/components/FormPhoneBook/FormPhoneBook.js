import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContact } from 'redux/selectors';
import { Notify } from 'notiflix';
import {
  FormStyle,
  LabelStyle,
  InputStyle,
  BtnStyle,
} from './FormPhoneBook.styled';

const FormPhoneBook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const NameInputFormId = nanoid();
  const NumberInputFormId = nanoid();
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      Notify.failure(`${number} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle htmlFor={NameInputFormId}>
        Name
        <InputStyle
          id={NameInputFormId}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          required
        />
      </LabelStyle>
      <LabelStyle htmlFor={NumberInputFormId}>
        Number
        <InputStyle
          id={NumberInputFormId}
          type="tel"
          placeholder="Enter number"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </LabelStyle>

      <BtnStyle type="submit">Add contact</BtnStyle>
    </FormStyle>
  );
};

// FormPhoneBook.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default FormPhoneBook;
