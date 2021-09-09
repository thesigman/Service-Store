import { Component, Fragment } from "react";
import Head from "next/head";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "../components/Cards/providercards";
import ProvidersCard from "../components/Card/providersCard";
import Layout from "../components/Layout/layout";
import Box from "../components/LeftBar/box";
import Filter from "../components/Filters/filters";
import Title from "../components/Title/title";
import ProjectCustomerCard from "../components/Card/ProjectCustomerCard";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../components/Cards/cards.module.scss";

class Providers extends Component {
  state = {
    providers: [],
    requests: [],
    titles: [],
    offers: [],
    currenrequestid: "",
  };
  constructor(props) {
    super(props);

    // this.handleRequest = this.handleRequest.bind(this);
  }
  componentDidMount() {
    // axios.get("http://localhost:5550/api/matches").then(
    //   (response) => {
    //     console.log("MATCHES");
    //     console.log(response.data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    axios
      .post("http://localhost:5550/api/requests/cid/", {
        cid: "61017675b47117629c1a8b67",
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          // this.setState({ providers: response.data });
          this.setState({ requests: response.data });
          this.setState({ currenrequestid: response.data[0]._id });
          this.setState({ titles: response.data[0].name });
          console.log(this.state.currenrequestid);

          axios
            .post("http://localhost:5550/api/offers/id/", {
              // id: "611a7981fd554e07fc12fc4a",
              id: this.state.requests[0]._id,
            })
            .then(
              (response) => {
                // console.log(response);
                console.log(response.data);

                // response[1].data.forEach((element) => {
                //   console.log();
                // });
                this.setState({ offers: response.data[0] });
                this.setState({ providers: response.data[1] });
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState:", prevState);
    // console.log("prevState matched:", prevState.matchedProviders);
    // console.log("prevProps:", prevProps);
    if (prevState.offers !== this.state.offers) {
      console.log("prevprops", prevProps);
      console.log("hi");
      console.log("this state offers", this.state.offers);
      console.log("prev offers", prevState.offers);
      console.log("end");
    }
  }

  handleRequest = (request) => {
    console.log("eimai sto provider", request);
    this.setState({ titles: request.name });
    this.setState({ currenrequestid: request._id }, () => {
      console.log(this.state.currenrequestid);
    });
    // console.log(this.state.currenrequestid);
    axios
      .post("http://localhost:5550/api/offers/id/", {
        // id: "611a7981fd554e07fc12fc4a",
        id: request._id,
      })
      .then(
        (response) => {
          console.log("HANDLE REQUEST");
          console.log("data0", response.data[0]);
          console.log("data1", response.data[1]);

          // response.data.forEach((element) => {
          //   console.log();
          // });
          // const prevOffers = [...this.state.offers];
          let newOffers = response.data[0];
          let newProviders = response.data[1];
          this.setState({ offers: newOffers });
          this.setState({ providers: newProviders });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  acceptOffer = (offer) => {
    // console.log("hi");
    // console.log(offer.Summary);

    axios
      .post("http://localhost:5550/api/offers/accept/", {
        offerid: offer._id,
        requestid: offer.requestid,
      })
      .then(
        (response) => {
          // const newOffers = [...this.state.offers];
          // let foundIndex = newOffers.findIndex(
          //   (offer) => offer._id === response.data._id
          // );
          // newOffers[foundIndex] = response.data;
          // this.setState({ offers: newOffers });
          this.setState({ offers: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  rejectOffer = (offer) => {
    console.log("reject");
    console.log(offer.Summary);

    axios
      .post("http://localhost:5550/api/offers/reject/", {
        offerid: offer._id,
      })
      .then(
        (response) => {
          const newOffers = [...this.state.offers];
          let foundIndex = newOffers.findIndex(
            (offer) => offer._id === response.data._id
          );
          newOffers[foundIndex] = response.data;
          this.setState({ offers: newOffers });
          // this.setState({ offers: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  filterByName = () => {
    console.log("filterbyname");
    // let result = this.state.requests.filter((request) => request.name);
    // console.log(result);
    // this.setState({ requests: result });
  };

  filterByDate = () => {
    console.log("filterbydate");
    // let result = this.state.requests.filter((request) => request.name);
    // console.log(result);
    // this.setState({ requests: result });
  };
  render() {
    return (
      <Layout user={this.props}>
      {/* //<Fragment> */}
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Αρχική</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Προβολή Προτάσεων
              </li>
            </ol>
          </nav>
        </div>
        <Head>
          <title>Προβολή Προτάσεων</title>
        </Head>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Filter
                filterByName={this.filterByName}
                filterByDate={this.filterByDate}
              />
            </div>
            <div className="col-sm-9">
              <Title title={this.state.titles} />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* <Box
              requests={this.state.requests}
              handleRequest={this.handleRequest}
            /> */}
            <div className="col-sm-3 bg-primary">
              {this.state.requests.map((request) => (
                <ProjectCustomerCard
                  onCardSelect={this.handleRequest}
                  key={request._id}
                  request={request}
                ></ProjectCustomerCard>
              ))}
            </div>
            <div className="col-sm-9">
              {/* <Cards providers={this.state.providers} /> */}
              <div className={styles.container}>
                <div className="row">
                  {this.state.providers.length === 0 ? (
                    <h2> No offers yet :( </h2>
                  ) : (
                    this.state.providers.map((provider) => (
                      <ProvidersCard
                        key={provider._id}
                        provider={provider}
                        offer={this.state.offers.find(
                          (offer) => offer.provider === provider._id
                          // &&
                          // offer.requestid === this.state.currenrequestid
                        )}
                        acceptOffer={this.acceptOffer}
                        rejectOffer={this.rejectOffer}
                        index={this.state.providers.indexOf(provider)}
                      ></ProvidersCard>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </Fragment> */}
      </Layout>
    );
  }
}

export default Providers;
