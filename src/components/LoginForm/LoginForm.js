import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';
import { FormLogin, LabelForm, ButtonForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <LabelForm>
        Email
        <input type="email" name="email" />
      </LabelForm>
      <LabelForm>
        Password
        <input type="password" name="password" />
      </LabelForm>
      <ButtonForm type="submit">Log In</ButtonForm>
    </FormLogin>
  );
};
