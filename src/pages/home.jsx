import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron.js';
import { FooterContainer } from '../containers/footer.js';
import { FaqsContainer } from '../containers/faqs.js';
import { HeaderContainer } from '../containers/header.js';
import { OptForm, Feature } from '../Components';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
