import styled from "./styled-components";
import { COLOR, STYLES } from "./constants";

interface Props {
  headerHeight: number;
}

export const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};
  position: relative;
`;

export const NavBar = styled.div`
  height: 8.5rem;
  width: 100%;
  display: flex;
  position: fixed;
  background: ${COLOR.WHITE_15};
  border-bottom: 0.1rem solid ${COLOR.VDEP_BLUE};
  z-index: 1000;
`;

export const Header = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
`;

type HeroProps = {
  heroImgUrl: string;
};

export const Hero = styled.div<HeroProps>`
  background-image: url(${props => props.heroImgUrl});
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  background-size: cover;
  background-position: top;
  height: 100%;
`;
