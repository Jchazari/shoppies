import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    appearance: none;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: none;
  }
`;