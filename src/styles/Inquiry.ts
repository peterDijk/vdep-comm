import { Button } from './buttons';
import { COLOR } from './constants';
import styled from './styled-components';

export const InputClean = styled.input`
  border: .1rem solid transparent;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  &:hover,
  &:focus {
    // border: 1px solid ${COLOR.RICHBLACK_10};
  }
`;

export const InquiryContainer = styled.div`
  width: 100%;
  background: ${COLOR.WHITE};
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 10rem;
  color: ${COLOR.VDEP_GREEN};

  ${InputClean} {
    width: 100%;
    display: inline;
    font-family: "Roboto Slab", sans-serif;
    font-size: 1.4rem;
  }

  ${Button} {
    margin: 0.4rem;
    width: 20rem;
    height: 4rem;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
`;

export const InquirySuccess = styled.div<{ visible: boolean }>`
  transition: all 2s;
  opacity: 0;
  ${props => props.visible && `opacity: 1;`};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.VDEP_GREEN};
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${COLOR.VDEP_BLUE};
  }
`;

export const InquiryFailure = styled.div<{ visible: boolean }>`
  transition: all 2s;
  opacity: 0;
  ${props => props.visible && `opacity: 1;`};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: orange;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${COLOR.VDEP_DARK_BLUE};
  }
  svg {
    position: absolute;
    right: 2rem;
    cursor: pointer;
  }
`;
