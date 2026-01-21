import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #fff;
    color: #212E4C;
  }
`;
