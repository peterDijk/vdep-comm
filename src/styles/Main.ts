import styled from "./styled-components";
import { COLOR } from "./constants";

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};
  position: relative;
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
  // height: calc(85% - 6rem);
  background-color: ${COLOR.VDEP_TERTIARY_BLUE};
  z-index: 2;
  text-align: center;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${COLOR.VDEP_DARK_BLUE};

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
  }
`;

export const OrganisationCTA = styled.div<{ imgUrl: string }>`
  position: relative;
  height: 13rem;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem;

  h3 {
    font-family: "Roboto", "sans-serif";
    color: ${COLOR.VDEP_SECONDARY_BLUE};
    font-size: 2rem;
  }
  h2 {
    font-family: "Roboto Slab", "sans-serif";
    color: ${COLOR.VDEP_TERTIARY_BLUE};
    font-size: 2.2rem;
  }
`;
