import styled from "./styled-components";
import { COLOR } from "./constants";

export const UpcomingEventsContainer = styled.div`
  width: 100%;
  padding: 3rem 4rem;

  h2 {
    color: ${COLOR.VDEP_DARK_BLUE};
    font-size: 2rem;
    font-family: "Roboto Slab", "sans-serif";
    font-weight: bold;
    margin: 0 0 2rem;
  }
`;

export const EventTile = styled.div`
  position: relative;
  text-align: center;
  // width: calc(100% / 3);
  width: 100%;
  margin-right: 3rem;

  &:last-child {
    margin-right: 0;
  }

  h2 {
    color: ${COLOR.VDEP_TERTIARY_BLUE};
    font-size: 1.5rem;
    text-transform: uppercase;
    position: absolute;
    top: 1.6rem;
    left: 2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin: 0;
  }
`;

export const LocationDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 3rem;

  h3 {
    font-family: "Roboto Slab", "sans-serif";
    color: ${COLOR.VDEP_SECONDARY_BLUE};
    letter-spacing: 0.15rem;
    font-weight: bold;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  h4 {
    font-family: "Roboto Slab", "sans-serif";
    color: ${COLOR.VDEP_SECONDARY_BLUE};
    letter-spacing: 0.15rem;
    font-weight: normal;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;

export const EventImage = styled.div<{ imgUrl: string }>`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: top;
  border-radius: 0.5rem;
  width: 100%;
  height: 13rem;
`;
