import React from 'react';
import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  Image,
  Pane,
} from './styles/jumbotron.js';

function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

export default Jumbotron;

// ! This syntax super confused me at first for compound components, and I am still understanding what props may be passed as well;  Children will surely be the content;   The styling from styled component is being passed in from jumbotron styled components;
//Here is an explanation of the pattern however; This pattern is called Compounded Components. To use the pattern with functional components, just add the sub-component (Item) as a property of a the main component (Menu).
// You can find more information in Kent C. Dodds article - React Hooks: Compound Components https://kentcdodds.com/blog/compound-components-with-react-hooks.

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}> {children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return (
    <Pane {...restProps}> {children}</Pane>
  ); /* It's children will be the titles, subtitles, and Image.  Used to 50/50 width split the jumbotron */
};
Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
// example call of image in Jumbotron container
//see the props being passed which are to be spread in
// @# <Jumbotron.Image src = {item.image} alt = {item.alt} /> */

//@? Note: how does the dot notation work?
//@@ In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions);  These properties can be one way to persist data pertinent to a function across function calls;
// Jumbotron.variable = 'works';
// console.dir(Jumbotron);

// Create and initialize the "static" variable.
// Function declarations are processed before code is executed, so
// we really can do this assignment before the function declaration.
// @# uniqueInteger.counter = 0;
// Here's the function. It returns a different value each time
// it is called and uses a "static" property of itself to keep track
// of the last value it returned.
//@#function uniqueInteger( ) { // Increment and return our "static" variable return uniqueInteger.counter++; }
