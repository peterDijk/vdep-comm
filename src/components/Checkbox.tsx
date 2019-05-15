import * as React from "react";

import { Checkbox as StyledCheckbox } from "../styles/Checkbox";

type Props = {
  checked: boolean;
  callbackFn: (checked: boolean) => void;
};

type State = {
  checked: boolean;
};

export class Checkbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }
  componentDidUpdate() {
    if (this.state.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }

  changeHandler = () => {
    const checked = !this.state.checked;
    this.setState(
      {
        checked,
      },
      () => this.props.callbackFn(checked)
    );
  };

  render() {
    return (
      <StyledCheckbox>
        <input
          type="checkbox"
          name="checkbox"
          onChange={this.changeHandler}
          checked={this.state.checked}
        />
        <span />
      </StyledCheckbox>
    );
  }
}
