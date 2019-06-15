import styled from "./styled-components";
import { COLOR } from "./constants";

export const SimplePageBody = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(${COLOR.VDEP_SECONDARY_BLUE_RGB}, 1),
    ${COLOR.WHITE}
  );
  // background-color: ${COLOR.WHITE};
  position: relative;
  padding: 1rem 0 4rem;
  height: 100%;
`;

export const HtmlText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: ${COLOR.RICHBLACK};
  padding: 10rem;
`;
