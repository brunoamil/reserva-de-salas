import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    @media only screen and (min-width: 768px) {
      overflow: hidden !important;
    }
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
