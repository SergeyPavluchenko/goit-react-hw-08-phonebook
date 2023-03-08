import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../routes/Home/Home'));
const RegisterPage = lazy(() => import('../routes/Registration/Registration'));
const LoginPage = lazy(() => import('../routes/LogIn/LogIn'));
const ContactsPage = lazy(() => import('../routes/Contacts/Contacts'));

export const App = () => {
  return (
    <div>
      <RegisterForm />
      <LoginForm />
    </div>
  );
};
