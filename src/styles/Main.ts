import styled from "./styled-components";

// import { STYLES } from '../constants/global';
import { COLOR } from "./constants";

interface Props {
  headerHeight: number;
}

export const StyledContainer = styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-top: ${props => props.headerHeight}px;
`;
