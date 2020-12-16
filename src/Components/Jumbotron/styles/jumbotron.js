// For using Babel extension for styled components;
//https://styled-components.com/docs/tooling#babel-plugin
// https://sheelahb.com/blog/styled-components-with-create-react-app/

import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

// Sections allows for a sort of re-using of H's recently within semantic html
export const Container = styled.section`
  background-color: black;

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px; /* creates breathing room for longer subtitles that wrap towards the image */
    }
  }
`;

//thus we can us an h1 for whatever jumbotron title comes up
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  } ;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
