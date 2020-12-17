import React, { useState } from 'react';
import { Form } from '../Components';
import { HeaderContainer } from '../containers/header.js'; /* I may refactor later to modify headerContainer by just using the components here sign I don't want the sign in page; */
import { FooterContainer } from '../containers/footer.js';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '' || firstName === '';

  const handleSignup = (event) => {
    event.preventDefault();
    //call in here to firebase to auth the user;
    //if error, populate the error state
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="text"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?{' '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
