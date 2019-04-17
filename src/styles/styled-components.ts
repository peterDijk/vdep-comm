import * as styledComponents from "styled-components";

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  // @ts-ignore
  // injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents;

export { css, keyframes, ThemeProvider };
export default styled;
