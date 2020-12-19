import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function isUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        /* CMD click the location to see source documentations of how these are the destructured props passed through route components;  Extract below; */
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

// export interface RouteComponentProps<
// Params extends { [K in keyof Params]?: string } = {},
// C extends StaticContext = StaticContext,
// S = H.LocationState
// > {
// history: H.History<S>;
// location: H.Location<S>;
// match: match<Params>;
// staticContext?: C;
