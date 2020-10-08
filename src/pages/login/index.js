import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { ROUTES } from '../../utils/routes';

import styles from './login.module.scss';

function Login() {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputHandler = handler => e => {
    handler(e.target.value);
  };

  const handleLogin = e => {
    e.preventDefault();

    setUser({
      username,
      password,
    });

    history.push(ROUTES.LIST);
  };

  return (
    <div className={`${styles.login} fullscreen`}>
      <form className={styles.user} onSubmit={handleLogin}>
        <input
          onChange={inputHandler(setUsername)}
          placeholder='Username'
          required
          value={username}
        />
        <input
          onChange={inputHandler(setPassword)}
          placeholder='Password'
          required
          type='password'
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export { Login };
