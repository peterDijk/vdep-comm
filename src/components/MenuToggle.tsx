import * as React from "react";

interface RenderProps {
  isMenuVisible: boolean;
  hideMenu: () => void;
  showMenu: () => void;
}

interface Props {
  children: (props: RenderProps) => React.ReactNode;
}

interface State {
  isMenuVisible: boolean;
}

export default class MenuToggle extends React.Component<Props, State> {
  state: State = {
    isMenuVisible: false,
  };
  private _mounted: boolean = false;

  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  hideMenu = () => {
    if (this._mounted) {
      this.setState({
        isMenuVisible: false,
      });
    }
  };

  showMenu = () => {
    if (this._mounted) {
      this.setState({
        isMenuVisible: true,
      });
    }
  };

  render() {
    return this.props.children({
      isMenuVisible: this.state.isMenuVisible,
      showMenu: this.showMenu,
      hideMenu: this.hideMenu,
    });
  }
}
