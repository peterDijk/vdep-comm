import styled from "./styled-components";
import { COLOR, STYLES } from "./constants";
import { Button } from "./buttons";

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};
  position: relative;
`;

export const NavBar = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  position: fixed;
  background: ${COLOR.WHITE_15};
  border-bottom: 0.1rem solid ${COLOR.VDEP_BLUE};
  z-index: 1000;
  justify-content: space-evenly;
  align-items: center;

  font-family: "Roboto Slab", "sans-serif";
  font-size: 1.5rem;
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
  ${props => props.isActive && "font-weight: 900"}
  cursor: pointer;
`;

export const LogoBox = styled.div`
  margin-left: 3rem;
  width: 30rem;
`;

export const Logo = styled.div`
  width: 4.5rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MenuItem = styled.div`
  font-weight: bold;
  color: ${COLOR.WHITE};
  margin: 0 3rem;
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
  position: relative;
`;

export const SiteTitleContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SitePayoff = styled.div`
  position: relative;
  top: 3rem;
  font-family: "Roboto", "sans-serif";
  color: ${COLOR.WHITE};
  width: 100%;

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: normal;
    margin: 2rem 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  h1 {
    font-family: "Roboto Slab", "sans-serif";
    color: ${COLOR.WHITE};
    font-size: 0.037rem;
    text-align: center;
    position: relative;
    top: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    display: inline-block;
  }
`;

export const CoG = styled.div`
  width: 18rem;
`;

export const LogoTextOne = styled.div`
  text-transform: uppercase;
  font-size: 72em;
  display: block;
`;

export const LogoTextTwo = styled.div`
  font-size: 40em;
  text-transform: lowercase;
  display: inline-block;
  position: absolute;
  top: 1.8em;
  left: 0;
  width: 100%;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 0.28em;
    border-bottom: 0.15em solid ${COLOR.WHITE};
    top: 0.5em;
    left: 0;
    width: 10%;
  }
  &:before {
    margin-left: 6px;
    width: 38%;
    position: absolute;
    top: 0.8rem;
  }
  &:after {
    left: 55%;
    margin-left: 9px;
    width: 36%;
    position: absolute;
    top: 0.8rem;
  }
`;

export const LogoTextThree = styled.div`
  text-transform: uppercase;
  font-size: 96em;
  display: block;
  letter-spacing: 0.2em;
  position: absolute;
  top: 1.1em;
  left: 0.08em;
  font-weight: 900;
`;
