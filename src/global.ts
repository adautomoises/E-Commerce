import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #e5e5e5;

  --button-border: #EBF0FF;

  --text-color: #9098B1;
  --title-color: #223263;

  --black: #000000;
  --white: #ffffff;
  --dark-white: #f6f6f6;

  --gray-40: #eeeeee;
  --gray-50: #e0e0e0;
  --gray-200: #bdbdbd;
  --gray-500: #787878;

  --blue: #40BFFF;
  --dark-blue: #018aeb;

  --red: #FF4858;
  --dark-red: #CF3240;
  
  --blue-10: #00c0ff;
  --blue-50: #018aeb;
  --blue-150: #0043d1;
  --blue-200: #003fcf;
  --azul-250: #0044d1;
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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}


@keyframes expand-container {
  from {
    width: 100px;
    height: 100px;
    border-radius: 1rem;
  }
  
  to {
    width: 300px;
    height: 600px;
    border-radius: 1rem;
  }
}
@keyframes container-blue {
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
    top: 10%;
  }
}
@keyframes container-white {
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
    top: 10%;
  }
}
@keyframes container-form {
  25% {
    opacity: 0;
    transform: translateZ(0);

  }
  
  100% {
    opacity: 1;
    transform: translateZ(0);

  }
}
`;

export default GlobalStyle;
