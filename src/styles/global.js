import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font: 14px "Roboto", sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    transition: 0.3s ease;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: 0;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 10px;
    transition: 0.3s ease;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.greyDark};
    transition: 0.3s ease;
  }
`}`;
