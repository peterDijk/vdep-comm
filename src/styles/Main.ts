import styled from "./styled-components";
import { COLOR, STYLES } from "./constants";
import { Button } from "./buttons";

interface Props {
  headerHeight: number;
}

export const StyledContainer = styled.div`
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
  justify-content: space-between;
  align-items: center;

  font-family: "Roboto Slab", "sans-serif";
  font-size: 2rem;
`;

export const NavBarRight = styled.div`
  margin-left: 4rem;
  ${Button} {
    margin-right: 3rem;
  }
  display: flex;
`;

export const LangBox = styled.div`
  color: ${COLOR.VDEP_SECONDARY_BLUE}
  font-weight: normal;
  min-width: 10rem;
  display: flex;
  align-items: center;
`;

export const LangOption = styled.div<{ isActive?: boolean }>`
  ${props => props.isActive && "font-weight: bold"}
  cursor: pointer;
`;

export const LogoBox = styled.div`
  margin-left: 3rem;
  width: 30rem;
`;

export const Logo = styled.div`
  width: 6rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MenuItem = styled.div`
  font-weight: bold;
  color: ${COLOR.WHITE};
  margin: 0 2rem;
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
