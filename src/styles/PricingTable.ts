import styled from "./styled-components";
import { COLOR } from "./constants";
import Check from "@material-ui/icons/Check";

export const CenteredParagraph = styled.div`
  margin: auto;
  text-align: justify;
  max-width: 60rem;
  p {
    text-align: justify;
    color: ${COLOR.VDEP_DARK_BLUE};
    font-family: "Roboto", "sans-serif";
    font-size: 1.4rem;
    font-weight: 400;
    margin: 1.5rem auto;

    strong {
      font-weight: 700;
    }
  }
`;

export const Benefits = styled.div`
  position: relative;
  background-color: ${COLOR.VDEP_TERTIARY_BLUE};
  z-index: 2;
  text-align: center;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
`;

export const BenefitsOptions = styled.div`
  position: relative;
  margin-top: 4rem;
`;

export const TableContainer = styled.div`
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  max-width: 90rem;
`;

export const ItemEmpty = styled.div`
  height: 7rem;
  padding-left: 5rem;
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
`;

export const ColumnTitle = styled.div`
  padding: 2.6rem;
  height: 7rem;
  text-align: center;
  font-family: "Roboto Slab", "sans-serif";
  letter-spacing: 0.04em;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  transition: all 0.2s;
`;

export const LegendItem = styled.div`
  min-height: 7rem;
  padding-left: 5rem;
  text-align: left;
  font-family: "Roboto Slab", "sans-serif";
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  position: relative;

  p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ColumnItem = styled.div`
  min-height: 7rem;
  padding-left: 3rem;
  padding-right: 2rem;
  text-align: left;
  font-family: "Roboto", "sans-serif";
  font-size: 1rem;
  margin-bottom: 0.2rem;
  transition: all 0.2s;
  position: relative;

  p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 80%;
  }
`;

export const CheckItem = styled(ColumnItem)`
  padding: 0;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ColumnContainer = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${ColumnItem}, ${ColumnTitle}, ${LegendItem} {
    ${props =>
      props.selected
        ? `background-color: ${COLOR.VDEP_SECONDARY_BLUE};
       color: ${COLOR.VDEP_QUARTIARY_BLUE};`
        : `background-color: ${COLOR.VDEP_TERTIARY_BLUE_DARK};
       color: ${COLOR.VDEP_SECONDARY_BLUE};`}
  }
`;
