import styled from "./styled-components";
import { COLOR } from "./constants";

export const FaqItem = styled.div`
  padding: 2rem 10rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: ${COLOR.RICHBLACK};
`;

export const Question = styled.div`
  font-weight: bold;
`;
export const Answer = styled.div`
  margin-top: 1rem;
  font-weight: normal;
`;
