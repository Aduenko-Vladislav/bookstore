import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 
button {
  font-family: inherit;
  border: 0;
  background: none;
  outline: none;
  cursor: pointer
}
input {
  border: none;
  &:focus {
    outline: none;
  }
}`;

export default GlobalStyles;
