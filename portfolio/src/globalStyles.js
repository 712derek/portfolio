import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    overflow: scroll;
  }

  h3 {
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
`;

export default GlobalStyle;
