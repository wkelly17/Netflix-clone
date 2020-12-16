import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron.js';
import { FooterContainer } from '../containers/footer.js';
import { FaqsContainer } from '../containers/faqs.js';

function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
