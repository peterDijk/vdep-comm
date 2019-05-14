import { createGlobalStyle } from "./styled-components";
import { COLOR } from "./constants";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:200,400,500,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Roboto:100, 200,400,500,600,700,900');
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

a,
a:visited {
  text-decoration: none;
  color: ${COLOR.VDEP_SECONDARY_BLUE};
}
`;
