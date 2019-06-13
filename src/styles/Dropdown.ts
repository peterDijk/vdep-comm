import styled, { css } from "./styled-components";
import { COLOR } from "./constants";
import { Button } from "./buttons";

export const Dropdown = styled.div`
  position: relative;
  margin-left: 16px;
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
        left: 50%;
        transform: translateX(-50%);
      `;
    case "left":
    default:
      return css`
        top: 110%;
        left: 0;
      `;
  }
};

export const DropdownContainer = styled.div`
  top: 100%;
  left: 0;
  border-radius: 5px;
  background-color: ${COLOR.WHITE};
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
  background-color: ${COLOR.WHITE};
  box-shadow: 0 1px 8px 0 ${COLOR.RICHBLACK_10};
  border-radius: 5px;
  background-clip: padding-box;
  ${props => getDropdownPositionStyling(props.position)}
`;

export const DropdownContentLarge = styled(DropdownContent)`
  min-width: 232px;
`;

export const DropdownListItem = styled.li<{ enabled?: boolean }>`
  padding: 0 16px;
  margin: 0;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  color: ${COLOR.RICHBLACK_50};
  font-size: 14px;
  &:hover {
    background-color: ${COLOR.RICHBLACK_03};
    cursor: pointer;
    color: ${COLOR.RICHBLACK_80};
  }
  list-style: none;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;
`;
