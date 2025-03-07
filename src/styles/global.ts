import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: 'Sora', sans-serif;
    font-weight: 400;
  }

  svg {
    cursor: pointer;
  }
`