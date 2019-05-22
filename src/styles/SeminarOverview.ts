import styled from "./styled-components";
import { COLOR } from "./constants";

export const Experience = styled.div`
  position: relative;
  background-color: ${COLOR.VDEP_SECONDARY_BLUE};
  z-index: 2;
  text-align: center;
  padding: 6rem 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 0.8rem solid ${COLOR.VDEP_GREEN};

  h2 {
    text-align: center;
    color: ${COLOR.VDEP_GREEN};
    font-family: "Roboto Slab", "sans-serif";
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
  }
  p {
    text-align: justify;
    color: ${COLOR.VDEP_TERTIARY_BLUE};
    font-family: "Roboto", "sans-serif";
    font-weight: 100;
    font-size: 1.4rem;
    margin: 1.5rem auto;

    strong {
      font-weight: 400;
    }
  }
`;

export const ExperienceText = styled.div`
  margin: auto;
  text-align: justify;
  max-width: 60rem;
  padding: 0 2rem 4rem;
`;

export const SeminarDayTile = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5rem;
`;

export const DayImage = styled.div`
  border-top: 0.8rem solid ${COLOR.VDEP_GREEN};
  position: relative;

  background-color: ${COLOR.VDEP_DARK_BLUE};
  // background-size: cover;
  // background-position: center;
  width: 100%;
  height: 25rem;

  svg {
    padding: 1rem;
    margin: 1rem;
    color: ${COLOR.VDEP_GREEN};
    width: 16rem;
    height: 16rem;
  }

  h2 {
    width: 100%;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${COLOR.VDEP_TERTIARY_BLUE};
    font-family: "Roboto Slab", "sans-serif";
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
  }
`;

export const DayText = styled.div`
  background-color: ${COLOR.VDEP_DARK_BLUE};
  padding: 3rem;
  color: ${COLOR.VDEP_TERTIARY_BLUE};
  min-height: 17rem;
  border-radius: 0 0 0.5rem 0.5rem;

  p {
    text-align: justify;
    color: ${COLOR.VDEP_TERTIARY_BLUE};
    font-family: "Roboto", "sans-serif";
    font-weight: 100;
    font-size: 1.4rem;
    margin: 0;

    strong {
      font-weight: 400;
    }
  }
`;
