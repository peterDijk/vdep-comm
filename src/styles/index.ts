import { createGlobalStyle } from "./styled-components";
import WebFont from "webfontloader";

import { COLOR, STYLES } from "./constants";

WebFont.load({
  google: { families: ["Roboto", "Roboto Slab", "sans-serif"] },
});

export const Global = createGlobalStyle`
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
