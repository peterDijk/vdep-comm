import styled from "./styled-components";
import { COLOR } from "./constants";

export const Checkbox = styled.label`
  font-weight: normal;
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  cursor: pointer;
  user-select: none;
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  > span {
    color: ${COLOR.RICHBLACK};
    font-size: 14px;
    position: relative;
    display: flex;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    height: 14px;
    width: 14px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px ${COLOR.RICHBLACK_20},
      0 1px 2px -1px ${COLOR.RICHBLACK_15};
  }
  &:hover input ~ span {
    background-color: ${COLOR.RICHBLACK_03};
  }
  > input:checked ~ span {
    background-color: ${COLOR.VDEP_SECONDARY_BLUE};
  }
  > input:disabled ~ span {
    background-color: ${COLOR.WHITE};
    cursor: default;
    box-shadow: inset 0 0 0 1px ${COLOR.RICHBLACK_10};
  }
  > span:after {
    content: "";
    position: absolute;
    display: none;
  }
  > input:checked ~ span:after {
    display: block;
    transform: rotate(45deg);
  }
  > input:disabled:checked ~ span:after {
    border-color: ${COLOR.RICHBLACK_50};
  }
  span:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
