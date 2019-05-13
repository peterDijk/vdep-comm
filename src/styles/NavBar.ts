import styled from "./styled-components";
import { COLOR } from "./constants";
import { Button } from "./buttons";

export const NavBar = styled.div<{ switchBg: boolean }>`
  height: 6rem;
  width: 100%;
  display: flex;
  position: fixed;
  ${props =>
    props.switchBg
      ? `background: ${COLOR.VDEP_DARK_BLUE}; ${MenuItem} {
      color: ${COLOR.WHITE};
    }`
      : `background: ${COLOR.WHITE_15}; ${MenuItem} {
      color: ${COLOR.WHITE};
    }`};
  transition: all 0.4s;
  // border-bottom: 0.1rem solid ${COLOR.VDEP_SECONDARY_BLUE};
  z-index: 1000;
  justify-content: space-evenly;
  align-items: center;

  font-family: "Roboto Slab", "sans-serif";
  font-size: 1.5rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

export const MenuItem = styled.div`
  font-weight: 500;
  margin: 0 3rem;
`;

export const NavBarRight = styled.div`
  margin-left: 4rem;
  ${Button} {
    margin-right: 3rem;
  }
  display: flex;
`;

export const LangBox = styled.div<{ switchBg: boolean }>`
  ${props =>
    props.switchBg
      ? `color: ${COLOR.WHITE}; ${LangOption} {
    color: ${COLOR.WHITE};
  }`
      : `color: ${COLOR.WHITE}; ${LangOption} { color: ${COLOR.WHITE}}`};
  font-weight: normal;
  min-width: 10rem;
  display: flex;
  align-items: center;
`;

export const LangOption = styled.div<{ isActive?: boolean }>`
  font-weight: ${props => (props.isActive ? "900" : "100")};
  cursor: pointer;
`;

export const LogoBox = styled.div`
  margin-left: 3rem;
  width: 20rem;
`;

export const Logo = styled.div`
  width: 4.5rem;
`;
