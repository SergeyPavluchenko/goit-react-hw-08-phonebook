import { AuthNavBlok } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavBlok to="/register">Register</AuthNavBlok>
      <AuthNavBlok to="/logIn">Log In</AuthNavBlok>
    </div>
  );
};
