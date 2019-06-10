import styled from "./styled-components";
import { COLOR } from "./constants";

import {
  UpcomingEventsContainer,
  EventTile,
  EventImage,
  LocationDateContainer,
} from "../styles/Events";
import { ChoiceItem } from "./PricingTable";
import { InquiryContainer } from "./Inquiry";

export const SeminarHeader = styled.div<{ imgUrl?: string }>`
  background-image: linear-gradient(
      to bottom,
      rgba(${COLOR.VDEP_SECONDARY_BLUE_RGB}, 0.4),
      ${COLOR.VDEP_DARK_BLUE}
    ),
    url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0.8rem 1rem 0 rgba(${COLOR.RICHBLACK_RBG}, 0.15);
  position: relative;
  padding: 1rem 0 0;

  ${UpcomingEventsContainer} {
    h2 {
      color: ${COLOR.WHITE};
    }
  }
  ${LocationDateContainer} h3, h4 {
    color: ${COLOR.VDEP_TERTIARY_BLUE};
  }
`;

export const SeminarTitleBar = styled.div`
  background-color: rgba(${COLOR.VDEP_TERTIARY_BLUE_RGB}, 0.6);
  padding: 4rem;
  position: relative;
  margin-top: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MainQuote = styled.div<{ bgColor?: string }>`
  padding: 7rem 1rem;
  background-color: ${props => props.bgColor || COLOR.VDEP_SECONDARY_BLUE_05};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const QuoteBox = styled.div<{ bgColor?: string }>`
  padding: 3rem;
  max-width: 60rem;
  background-color: ${props => props.bgColor || COLOR.WHITE};
  border: 0.4rem solid ${COLOR.VDEP_BLUE};
  border-radius: 0.5rem;
  position: relative;
  font-family: "Roboto Slab", sans-serif;
  font-size: 1.4rem;
  color: ${props =>
    props.bgColor === COLOR.VDEP_DARK_BLUE
      ? COLOR.WHITE
      : COLOR.VDEP_DARK_BLUE};
`;

export const QuoteProfilePicture = styled.div<{ profileUrl?: string }>`
  position: absolute;
  right: -4rem;
  bottom: -4rem;
  border-radius: 50%;
  ${props => props.profileUrl && `border: 0.4rem solid ${COLOR.VDEP_BLUE};`}
  width: 8rem;
  height: 8rem;
  background-image: url(${props => props.profileUrl});
  background-size: cover;
  background-position: center;
`;

export const ProgrammeContainer = styled.div`
  background-color: ${COLOR.WHITE};
  font-family: "Roboto Slab", sans-serif;
`;

export const DayHeading = styled.div`
  background-color: ${COLOR.RICHBLACK_03};
  color: ${COLOR.VDEP_BLUE};
  padding: 2rem 7rem;
  font-size: 2rem;
`;

export const ProgrammeTabs = styled.div<{ isActive?: boolean }>`
  background-color: ${COLOR.VDEP_DARK_BLUE};
  letter-spacing: 0.2em;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${COLOR.VDEP_GREEN};
  border-right: 0.2rem solid ${COLOR.VDEP_GREEN};
  padding: 2rem;
  cursor: pointer;
  user-select: none;

  text-align: center;

  ${props =>
    props.isActive &&
    `background-color: ${COLOR.RICHBLACK_03};
   color: ${COLOR.VDEP_DARK_BLUE};`}
`;

export const ProgrammeEntries = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 10rem;
`;

export const Entry = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;
  margin: 1rem;
  padding: 4rem;
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

export const EntryTime = styled.div<{ break?: boolean }>`
  color: ${props => (props.break ? COLOR.VDEP_BLUE : COLOR.VDEP_DARK_BLUE)};
  width: 40%;
  position: relative;
  svg {
    position: absolute;
    top: -0.7rem;
    left: -5rem;
    width: 4rem;
    height: 4rem;
  }
`;

export const EntryTitle = styled.div`
  width: 80%;
  color: ${COLOR.VDEP_BLUE};

  text-transform: uppercase;
  p {
    color: ${COLOR.VDEP_DARK_BLUE};
    text-transform: none;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1.5rem 0;
  }
`;

export const InquiryWrapper = styled.div`
  padding: 10rem 5rem;
  background-color: ${COLOR.VDEP_DARK_BLUE};
  h1 {
    color: ${COLOR.WHITE};
    font-family: "Roboto Slab", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    padding: 3rem 1.5rem;
  }

  ${InquiryContainer} {
    margin-bottom: 4rem;
  }

  ${ChoiceItem} {
    padding: 1rem;
  }
`;
