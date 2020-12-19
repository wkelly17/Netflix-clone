import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages/index';
import { useAuthListener } from './hooks';
import { isUserRedirect, ProtectedRoute } from './helpers/routes';

import * as ROUTES from './constants/routes.js';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <isUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </isUserRedirect>

        <isUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </isUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <isUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </isUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
