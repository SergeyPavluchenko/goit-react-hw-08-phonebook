import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuBlok, WelcomeText, UserMenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBlok>
      <WelcomeText>Welcome, {user.name}</WelcomeText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </UserMenuButton>
    </UserMenuBlok>
  );
};
