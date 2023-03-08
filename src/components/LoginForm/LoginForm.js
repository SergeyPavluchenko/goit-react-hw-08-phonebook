import { FormLogin, LabelForm, ButtonForm } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormLogin>
      <LabelForm>
        Email
        <input type="email" name="email" placeholder="Email" />
      </LabelForm>
      <LabelForm>
        Password
        <input type="password" name="password" placeholder="Password" />
      </LabelForm>
      <ButtonForm type="submit"> Log In</ButtonForm>
    </FormLogin>
  );
};
