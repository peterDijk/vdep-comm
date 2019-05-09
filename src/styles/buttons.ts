import styled from "./styled-components";
import { COLOR } from "./constants";

export const Button = styled.div`
  margin-right: 1rem;
  width: 16rem;
  min-width: 4rem;
  height: 4.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background-color: ${COLOR.VDEP_BLUE};
  color: ${COLOR.WHITE}
  font-family: 'Roboto Slab', 'sans-serif';
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;

  cursor: pointer;

  &:hover {
    background-color: ${COLOR.WHITE_0};
    border: 1px solid ${COLOR.VDEP_BLUE};
  }
`;

export const SecButton = styled(Button)`
  background-color: ${COLOR.VDEP_TERTIARY_BLUE};
`;
