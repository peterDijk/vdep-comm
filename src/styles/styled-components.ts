import * as styledComponents from "styled-components";
import ThemedStyledComponentsModule = styledComponents.ThemedStyledComponentsModule;

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  // @ts-ignore
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
