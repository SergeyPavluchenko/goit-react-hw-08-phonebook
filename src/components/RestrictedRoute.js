import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  componnent: Component,
  redirectTo = '/',
}) => {
  const { isloggedIn } = useAuth();
  return isloggedIn ? <Navigate to={redirectTo} /> : Component;
};
