import { FormRegister, FormLabel, FormButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <FormRegister>
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
