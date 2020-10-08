import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Login, List } from './pages';
import { AuthContextProvider } from './contexts/auth';
import { ROUTES } from './utils/routes';
import { PrivateRoute, Header } from './components';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path={ROUTES.LOGIN}>
              <Login />
            </Route>
            <PrivateRoute path={ROUTES.LIST}>
              <List />
            </PrivateRoute>
            <Redirect to={ROUTES.LOGIN} />
          </Switch>
        </>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
