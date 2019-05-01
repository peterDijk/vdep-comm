import styled from "./styled-components";
import { COLOR } from "./constants";

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};
  position: relative;
`;

export const AboveTheFold = styled.div`
  height: 100vh;
`;

export const BrowserWindow = styled.div`
  height: calc(100vh - 6rem);
`;

export const StoryTelling = styled.div`
  height: calc(75% - 6rem);
  background-color: ${COLOR.VDEP_TERTIARY_BLUE};
`;
