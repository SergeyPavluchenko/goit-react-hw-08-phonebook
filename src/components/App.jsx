import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/authOperations';

const HomePage = lazy(() => import('../routes/Home/Home'));
const RegisterPage = lazy(() => import('../routes/Registration/Registration'));
const LoginPage = lazy(() => import('../routes/LogIn/LogIn'));
const ContactsPage = lazy(() => import('../routes/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              componnent={<RegisterPage />}
            />
          }
        />
        <Route
          path="/logIn"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              componnent={<LoginPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/logIn" componnent={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
