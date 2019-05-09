import styled from "./styled-components";
import { COLOR } from "./constants";
import { Button } from "./buttons";

export const SeminarTile = styled.div<{ imgUrl: string }>`
  position: relative;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-bottom: 110%;
`;

export const SeminarInfoBox = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 55%;
  transform: translate(-50%, -50%);

  h4 {
    color: ${COLOR.RICHBLACK};
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
    font-family: "Roboto Slab", "sans-serif";
    font-weight: normal;
    text-transform: uppercase;
  }
  h2 {
    position: relative;
    top: -0.6rem;
    color: ${COLOR.VDEP_DARK_BLUE};
    font-size: 2rem;
    letter-spacing: 0.15rem;
    font-family: "Roboto Slab", "sans-serif";
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export const ViewProgramButton = styled(Button)`
  background-color: ${COLOR.WHITE_0};
  border: 1px solid ${COLOR.WHITE};
  color: ${COLOR.RICHBLACK};
  width: 100%;
  height: 6rem;
  margin: 0.8rem auto 0 auto;

  color: ${COLOR.RICHBLACK};
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  font-family: "Roboto Slab", "sans-serif";
  font-weight: bold;

  &:hover {
    background-color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.WHITE_0};
  }
`;
