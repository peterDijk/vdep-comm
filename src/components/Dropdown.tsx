import * as React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import MenuToggle from './MenuToggle';

import {
  Dropdown as StyledDropdown,
  DropdownContent,
} from '../styles/Dropdown';

export enum DropdownPosition {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface Props {
  children: React.ReactNode;
  handler: (onToggle: () => void, status: boolean) => React.ReactNode;
  autoClose?: boolean;
  position?: DropdownPosition;
}

const Dropdown = ({ children, handler, autoClose, position }: Props) => (
  <MenuToggle>
    {({ isMenuVisible, showMenu, hideMenu }) => (
      <StyledDropdown>
        <OutsideClickHandler onOutsideClick={hideMenu}>
          <React.Fragment>
            {isMenuVisible ? handler(hideMenu, true) : handler(showMenu, false)}
            {isMenuVisible &&
              (autoClose ? (
                <DropdownContent position={position} onClick={hideMenu}>
                  {children}
                </DropdownContent>
              ) : (
                <DropdownContent onClick={null}>{children}</DropdownContent>
              ))}
          </React.Fragment>
        </OutsideClickHandler>
      </StyledDropdown>
    )}
  </MenuToggle>
);

export default Dropdown;
