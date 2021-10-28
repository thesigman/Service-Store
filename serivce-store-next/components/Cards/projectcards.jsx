import React, { Component } from "react";
// import Card from "../ProvidersCard/providersCard";
import styles from "./cards.module.scss";
import axios from "axios";
import ProjectCustomerCard from "../Card/ProjectCustomerCard";

class ProjectCards extends Component {
  state = {
    requests: [],
    //   providers: this.props.providers,
    //   // providers: [
    //   //   { id: 1, afm: 12345 },
    //   //   { id: 2, afm: 6789 },
    //   //   { id: 3, afm: 13412 },
    //   //   { id: 4, afm: 34342 },
    //   // ],
  };

  constructor(props) {
    super(props);
    // this.state.providers = this.props.providers;
  }

  componentDidMount() {
    this.setState({ requests: this.props.requests });
  }

  henlo(id) {
    console.log("henloooo");
    console.log(id);
  }

  render() {
    //console.log("Cards props", this.props);
    const { requests } = this.props;

    return (
      <div className="row">
        {requests.map((request) => (
          <ProjectCustomerCard
            key={request._id}
            request={request}
            // onCardSelect={this.henlo}
            onCardSelect={this.props.handleRequest}
          ></ProjectCustomerCard>
        ))}
      </div>
    );
  }
}

export default ProjectCards;
