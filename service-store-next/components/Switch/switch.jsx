import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    console.log("changed");
    console.log(checked);
    // this.setState({ checked });
    this.setState({ checked });
  }

  render() {
    let { label, answered } = this.props;
    // console.log("switch", answered);
    return (
      <label>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          // checked={answered == false ? this.state.checked : !this.state.checked}
          // checked={}
          // checked={checked === true ? this.state.checked : this.state}
          className="react-switch"
        />
        {label}
      </label>
    );
  }
}
export default SwitchExample;
