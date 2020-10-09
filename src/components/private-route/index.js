import React from 'react';
import { Redirect, Route } from 'react-router-dom'

import { ROUTES } from '../../utils/routes';
import { useAuth } from '../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;

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
