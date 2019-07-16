import { COLOR } from './constants';
import styled from './styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};
  position: relative;
  overflow: none;
`;

export const AboveTheFold = styled.div`
  position: relative;
  box-shadow: 0 0.8rem 1rem 0 rgba(${COLOR.RICHBLACK_RBG}, 0.15);
  z-index: 10;
`;

export const BrowserWindow = styled.div`
  position: relative;
  z-index: 8;
`;

export const StoryTelling = styled.div`
  position: relative;
  background-color: ${COLOR.VDEP_TERTIARY_BLUE};
  z-index: 2;
  text-align: center;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${COLOR.VDEP_SECONDARY_BLUE};

  h2 {
    font-family: "Roboto Slab", "sans-serif";
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0 0 3rem 0;
  }
  p {
    font-family: "Roboto Slab", "sans-serif";
    font-size: 1.8rem;
    margin: 2rem auto;
    max-width: 70rem;
    margin-bottom: 0.2rem;
  }
`;

export const OrganisationCTA = styled.div<{ imgUrl: string }>`
  position: relative;
  // height: 13rem;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem;

  h3 {
    font-family: "Roboto", "sans-serif";
    color: ${COLOR.VDEP_BLUE};
    font-size: 2rem;
  }
  h2 {
    font-family: "Roboto Slab", "sans-serif";
    color: ${COLOR.VDEP_TERTIARY_BLUE};
    font-size: 2.2rem;
  }
`;

export const Expertise = styled.div`
  position: relative;
  background-color: ${COLOR.WHITE};
  z-index: 2;
  text-align: center;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    margin: auto;
    text-align: justify;
    max-width: 60rem;
  }

  h2 {
    text-align: center;
    color: ${COLOR.VDEP_SECONDARY_BLUE};
    font-family: "Roboto Slab", "sans-serif";
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0 0 3rem 0;
  }
  p {
    text-align: justify;
    color: ${COLOR.RICHBLACK};
    font-family: "Roboto", "sans-serif";
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 500;
    margin: 1.5rem auto;

    strong {
      font-weight: 700;
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  z-index: 100;
  text-align: center;

  a {
    text-decoration: underline;
  }
`;
