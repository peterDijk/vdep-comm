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
