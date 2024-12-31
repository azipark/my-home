import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #212529;
    --gray100: #343A40;
    --gray200: #DEE2E6;
    --gray300: #F2F2F2;
    --white: #FFF;
    --black: #000;
    --green: #02C39A;
    --blue: #007FAA;
    --navy: #242f40;
    --red: #C1121F;
    --yellow: #F5CB5C;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }


  body {
    font-size: 16px;
    line-height: 1.5;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a,
  a:visited {
    cursor: pointer;
    text-decoration: inherit;
    letter-spacing: -0.5px;
  }

  button {
    padding-block: 0;
    padding-inline: 0;
    border-width: 0;
    border: none;
    outline: none;
    letter-spacing: -0.5px;
    background: transparent;
    font-family: 'Noto Sans KR', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    letter-spacing: -0.3px;
  }

  h2 {
    position: relative;
    font-size: 32px;
    font-family: 'Roboto Mono', sans-serif;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  strong {
    font-size: 15px;
  }

  p {
    font-size: 14px;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  em,
  strong {
    font-weight: 700;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .inner {
    position: relative;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default GlobalStyle;