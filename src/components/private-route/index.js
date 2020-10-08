import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth';
import { ROUTES } from '../../utils/routes';

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user !== null;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export { PrivateRoute, };
