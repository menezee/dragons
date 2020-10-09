import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const isAuthenticated = user !== null;

  return { user, setUser, isAuthenticated };
}

export { useAuth, };
