import React, { Component } from "react";
// import Card from "../ProvidersCard/providersCard";
import styles from "./cards.module.scss";
import ProvidersCard from "../Card/providersCard";

class ProviderCards extends Component {
  state = {
    providers: [],
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

  // componentDidMount() {
  //   if (!this.props.providers.length === 0) {
  //     this.setState({ providers: this.props.providers });
  //   }
  // }

  // componentDidUpdate() {
  //   this.setState((state, props) => ({
  //     providers: props.providers,
  //   }));
  // }

  render() {
    //console.log("Cards props", this.props);
    const { providers } = this.props;

    if (providers.length === 0) {
      return (
        <div className={styles.container}>
          <div className="row">No matches yet</div>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <div className="row">
            {providers.map((provider) => (
              <ProvidersCard
                key={provider._id}
                provider={provider}
                // afm={provider.AFM}
                index={providers.indexOf(provider)}
              ></ProvidersCard>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default ProviderCards;
