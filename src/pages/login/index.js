import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputHandler = handler => e => {
    handler(e.target.value);
  };

  return (
    <div>
      <section>
        <input
          onChange={inputHandler(setUsername)}
          placeholder='Username'
          value={username}
        />
        <input
          onChange={inputHandler(setPassword)}
          placeholder='password'
          value={password}
        />
      </section>
    </div>
  );
}

export { Login };
