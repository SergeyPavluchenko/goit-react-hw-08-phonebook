import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import { FormRegister, FormLabel, FormButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit}>
      <FormLabel>
        UserName
        <input type="text" name="name" placeholder="UserName" />
      </FormLabel>
      <FormLabel>
        Email
        <input type="email" name="email" placeholder="Email" />
      </FormLabel>
      <FormLabel>
        Password
        <input type="password" name="password" placeholder="Password" />
      </FormLabel>
      <FormButton type="submit"> Register</FormButton>
    </FormRegister>
  );
};
