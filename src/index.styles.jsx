import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: rgb(245, 245, 245);
  --black: #1c1b1f;
  --gray: rgb(204, 203, 203);
  --lightgray: #d8d8d8;
  --grayline: #ccc;
  --red: #e02b57;
}

body,
input,
textarea,
button {
  font: 500 1rem Arial;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.3rem;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
