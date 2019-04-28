import * as styledComponents from "styled-components";

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  // @ts-ignore
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents;

export { css, keyframes, ThemeProvider, createGlobalStyle };
export default styled;
