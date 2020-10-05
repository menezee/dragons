import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login } from './pages/login';
import { AuthContextProvider } from './contexts/auth';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Redirect to='/login' />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
