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
`;

export default GlobalStyle;
