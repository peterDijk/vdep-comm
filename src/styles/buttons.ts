import styled from "./styled-components";
import { COLOR } from "./constants";

export const Button = styled.div`
  margin-right: 1rem;
  width: 22rem;
  min-width: 4rem;
  height: 6rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background-color: ${COLOR.VDEP_BLUE};
  color: ${COLOR.WHITE}
  font-family: 'Roboto Slab', 'sans-serif';
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;

  cursor: pointer;
`;
