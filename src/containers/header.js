import React from 'react';

import { Header } from '../Components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/Netflix-logo.svg"
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
