import { createGlobalStyle } from "styled-components";
import { baseTheme } from "./theme";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
  }

  body {
    background-color: ${baseTheme.colors.bg};
  }
`;
