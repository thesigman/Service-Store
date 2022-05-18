import { Component, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import ProjectCustomerCard from "../components/Card/ProjectCustomerCard.jsx";
import ProvidersCard from "../components/Card/providersCard.jsx";
import styles from "../components/Cards/cards.module.scss";
import Filter from "../components/Filters/filters";
import Layout from "../components/Layout/layout";
import style from "../components/LeftBar/box.module.scss";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import PMultiStepForm from "../components/MultiStepForm/PMultiStepForm";
import Title from "../components/Title/title";
import { devteam2 } from "./api/axiosConfiguration";
import Modal from "react-modal";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "80%",
    height: "65vh",
  },
};
class Providers extends Component {
  // user = JSON.parse(window.sessionStorage.getItem("application_user"));
  state = {
    modalIsOpen: false,
    providers: [],
    requests: [],
    titles: [],
    offers: [],
    currenrequestid: "",
    user: {},
  };
  constructor(props) {
    super(props);
    // this.state = { user: props.user };
    // console.log(JSON.parse(window.sessionStorage.getItem("application_user")));
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    localStorage.removeItem("domain");
  };
  componentDidMount() {
    console.log(JSON.parse(window.sessionStorage.getItem("application_user")));
    // this.setState({ user: this.props.user });
    this.setState({
      user: JSON.parse(window.sessionStorage.getItem("application_user")),
    });
    devteam2
      .post("/requests/cid/", {
        //cid: "61017675b47117629c1a8b67",
        cid: JSON.parse(window.sessionStorage.getItem("application_user")).id,
      })
      .then(
        (response) => {
          if (response.data.length > 0) {
            this.setState({ requests: response.data });
            this.setState({ currenrequestid: response.data[0]._id });
            this.setState({ titles: response.data[0].name });
            console.log(this.state.requests[0]._id);
            devteam2
              .post("/offers/id/", {
                cid: this.state.requests[0]._id,
              })
              .then(
                (response) => {
                  console.log(response);
                  this.setState({ offers: response.data[0] });
                  this.setState({ providers: response.data[1] });
                },
                (error) => {
                  console.log(error);
                }
              );
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  componentDidUpdate(prevProps, prevState) {
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
    devteam2
      .post("/offers/id/", {
        // id: "611a7981fd554e07fc12fc4a",
        id: request._id,
      })
      .then(
        (response) => {
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
    devteam2
      .post("/offers/accept/", {
        offerid: offer._id,
        requestid: offer.requestid,
      })
      .then(
        (response) => {
          this.setState({ offers: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  rejectOffer = (offer) => {
    devteam2
      .post("/offers/reject/", {
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
        },
        (error) => {
          console.log(error);
        }
      );
  };

  filterByName = () => {
    console.log("filterbyname");

    let NewArray = this.state.requests.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    // let result = this.state.requests.filter((request) => request.name);
    // console.log("afterfilter", result);
    this.setState({ requests: NewArray });
  };

  setModalStatus = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  filterByDate = () => {
    console.log("filterbydate");

    let NewArray = this.state.requests.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });

    // let result = this.state.requests.filter((request) => request.name);
    // console.log(result);
    this.setState({ requests: NewArray });
  };
  render() {
    return (
      <Layout user={this.props}>
        <Head>
          <title>Service Store - Προβολή Προτάσεων</title>
          <meta name="description" content="Greek DX services platform" />
        </Head>
        {(!this.props.isAuthenticated && <p>You have to login First</p>) || (
          <Fragment>
            {/* {this.state.user.id}
            {this.state.user.role} */}
            <div className="row m-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Αρχική</a> */}
                    <Link href="/home">
                      <a>Αρχική</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Προβολή Προτάσεων
                  </li>
                </ol>
              </nav>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3 order-2 order-sm-1">
                  <Filter
                    filterByName={this.filterByName}
                    filterByDate={this.filterByDate}
                  />
                </div>
                <div className="col-sm-9 order-1 order-sm-2">
                  <Title title={this.state.titles} />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className={[style.box, "col-lg-3 bg-primary"].join(" ")}>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-lg m-2 bg-light text-dark"
                      onClick={this.setModalStatus}
                    >
                      + Δημιουργία project
                    </button>
                  </div>
                  <div style={{ overflow: "auto", height: "70vh" }}>
                    {this.state.requests.map((request) => (
                      <ProjectCustomerCard
                        onCardSelect={this.handleRequest}
                        key={request._id}
                        request={request}
                      ></ProjectCustomerCard>
                    ))}
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className={styles.container}>
                    <div className="row">
                      {this.state.providers.length === 0 ? (
                        <h2>Δεν υπάρχουν διαθέσιμες προτάσεις</h2>
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
                            projectTitle={this.state.titles}
                          ></ProvidersCard>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
        <Modal
          isOpen={this.state.modalIsOpen}
          style={modalStyle}
          ariaHideApp={false}
          size="sm"
        >
          <PMultiStepForm closeModal={this.closeModal} />
        </Modal>
        {/* {this.state.modalIsOpen && (
          <PMultiStepForm
          // modalstatus={this.state.modalIsOpen}
          />
        )} */}
      </Layout>
    );
  }
}

export default Providers;
