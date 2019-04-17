import styled from "./styled-components";

import { COLOR, STYLES } from "./constants";

interface Props {
  headerHeight: number;
}

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${COLOR.WHITE};
`;
