import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-dark"]}; */
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
`
