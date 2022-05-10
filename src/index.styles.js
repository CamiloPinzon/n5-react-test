import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => (props.theme.color.bgColor)};
  }

  a {
    text-decoration: none;
  }
  
  *{
    box-sizing: border-box;
  }
`;


