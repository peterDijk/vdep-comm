import styled, { css } from "./styled-components";
import { COLOR } from "./constants";

export const Dropdown = styled.div`
  position: relative;
  margin-left: 0;
`;

type DropdownPosition = "left" | "right" | "center";

const getDropdownPositionStyling = (position: DropdownPosition = "left") => {
  switch (position) {
    case "right":
      return css`
        top: 110%;
        left: auto;
        right: 0;
      `;
    case "center":
      return css`
        top: 140%;
        left: 3rem;
      `;
    case "left":
    default:
      return css`
        top: 140%;
        right: 1rem;
      `;
  }
};

export const DropdownContainer = styled.div`
  top: 100%;
  left: 0;
  border-radius: 5px;
  background-color: ${COLOR.VDEP_BLUE};
  box-shadow: 0 1px 6px 0 ${COLOR.RICHBLACK_10};
  border: 1px solid ${COLOR.RICHBLACK_10};
  min-width: 218px;
  overflow: hidden;
  background-clip: padding-box;
`;

export const DropdownContent = styled.div<{ position?: DropdownPosition }>`
  position: absolute;
  min-width: 170px;
  overflow: hidden;
  // background-color: ${COLOR.WHITE};
  box-shadow: 0 1px 8px 0 ${COLOR.RICHBLACK_10};
  border-radius: 5px;
  background-clip: padding-box;
  ${props => getDropdownPositionStyling(props.position)}
`;

export const DropdownContentLarge = styled(DropdownContent)`
  min-width: 232px;
`;

export const DropdownListItem = styled.li<{
  enabled?: boolean;
  indent?: boolean;
}>`
  padding: 0 16px;
  margin: 0;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  color: ${COLOR.WHITE};
  font-size: 14px;
  &:hover {
    // background-color: ${COLOR.RICHBLACK_03};
    cursor: pointer;
    color: ${COLOR.RICHBLACK_80};
  }
  list-style: none;
  ${props => props.indent && `margin-left: 1rem;`}
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;
`;
