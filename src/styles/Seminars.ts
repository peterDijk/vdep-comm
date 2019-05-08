import styled from "./styled-components";
import { COLOR } from "./constants";

export const SeminarTile = styled.div<{ imgUrl: string }>`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 40rem;
`;
