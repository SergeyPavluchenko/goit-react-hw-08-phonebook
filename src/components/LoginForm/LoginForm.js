import { FormLogin } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormLogin>
      <label>
        Email
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit"> Log In</button>
    </FormLogin>
  );
};
