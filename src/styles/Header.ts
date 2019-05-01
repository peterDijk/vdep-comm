import styled from "./styled-components";
import { COLOR } from "./constants";

export const Header = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
`;

type HeroProps = {
  heroImgUrl: string;
};

export const Hero = styled.div<HeroProps>`
  background-image: url(${props => props.heroImgUrl});
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