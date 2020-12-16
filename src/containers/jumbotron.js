import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../Components/'; /* Weird, not the full path: Tuesday December 15, 2020 04:26PM.  But also works if specifying full path too; */
// Resolves to index of components folders

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          {' '}
          {/* @# Jumbotro is a set of divs;  Item, holding props, and Inner (a div) with some flex styling */}{' '}
          {/* serving as the container holiding title and subtitle */}
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
