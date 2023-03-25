import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #e5e5e5;

  --black: #000000;
  --white: #ffffff;
  --white-smoke: #f6f6f6;

  --gray-40: #eeeeee;
  --gray-50: #e0e0e0;
  --gray-200: #bdbdbd;
  --gray-500: #787878;

  --blue-10: #00c0ff;
  --blue-50: #018aeb;
  --blue-150: #0043d1;
  --blue-200: #003fcf;
  --azul-250: #0044d1;
}

@media (min-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (min-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--black);
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Poppins", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: "Raleway", sans-serif;
}
`;

export default GlobalStyle;