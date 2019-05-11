import styled from "./styled-components";
import { COLOR } from "./constants";
import { Button } from "./buttons";

export const NavBar = styled.div<{ switchBg: boolean }>`
  height: 6rem;
  width: 100%;
  display: flex;
  position: fixed;
  background: ${props =>
    props.switchBg ? COLOR.VDEP_SECONDARY_BLUE : COLOR.WHITE_15};
  transition: all 0.2s;
  border-bottom: 0.1rem solid ${COLOR.VDEP_GREEN};
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

export const LangBox = styled.div<{ switchBg: boolean }>`
  color: ${COLOR.WHITE};
  font-weight: normal;
  min-width: 10rem;
  display: flex;
  align-items: center;
`;

export const LangOption = styled.div<{ isActive?: boolean }>`
  ${props => (props.isActive ? "font-weight: 900" : "font-weight: 100")};
  cursor: pointer;
  color: ${COLOR.VDEP_DARK_BLUE};
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
  color: ${COLOR.VDEP_GREEN};
  margin: 0 3rem;
`;
