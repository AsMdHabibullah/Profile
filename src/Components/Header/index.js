import React, { Component } from "react";
import SideDrower from "./SideDrower";

class Header extends Component {
  state = {
    visible: false
  };

  sideDrawerOpen = () => {
    this.setState(prev => ({ visible: !prev.visible }));
  };

  togglerControle = () => {
    if (this.state.visible === false) {
      return (
        <div className="lines">
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
        </div>
      );
    } else {
      return <span className="toggle-close">X</span>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="toggle-button d-flex justify-content-center align-items-center"
          onClick={this.sideDrawerOpen}
        >
          {this.togglerControle()}
        </div>
        <SideDrower visible={this.state.visible} />
      </React.Fragment>
    );
  }
}

export default Header;
