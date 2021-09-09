import { Component } from "react";

class Title extends Component {
  // state = { };

  render() {
    const { title } = this.props;

    return (
      <div className="row">
        <h2>{title}</h2>
        <p>Διαθέσιμες προτάσεις</p>
      </div>
    );
  }
}

export default Title;
