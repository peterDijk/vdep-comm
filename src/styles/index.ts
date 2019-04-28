import { createGlobalStyle } from "./styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
@import url('https://fonts.googleapis.com/css?family=Roboto');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is. 100% is 16px (most of the time).
  font-size: 62.5%; // 10px
  font-family: 'Roboto';
}

body {
  box-sizing: border-box;
}
`;
