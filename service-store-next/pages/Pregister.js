import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StepOne from "../components/Register/StepOne";
import StepTwo from "../components/Register/StepTwo";
import StepThree from "../components/Register/StepThree";
import Success from "../components/Register/Success";

import { loginUser } from "../libs/auth";
import { instance, devteam2 } from "./api/axiosConfiguration";

import { toast, ToastContainer } from "react-nextjs-toast";

import logo from "/public/logo.png";

class Pregister extends Component {
  state = {
    step: 1,
    width: 0,
    username: "",
    password: "",
    confirmPassword: "",
    type: "",
    NameOfCompany: "",
    TypeOfCompany: "",
    AFM: "",
    DOY: "",
    Phone: "",
    email: "",
    selectedService2: null,
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  searchService2 = async (inputValue) => {
    console.log("input service2 value: ", inputValue);

    // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
    // dioti apo th vash 8a ferei ola ta apotelesmata
    const regex = new RegExp("^\\s+|^[0-9]|^\\.");

    // elegxoume ean tairiazei tote kanoume return
    if (regex.test(inputValue)) {
      return;
    } else {
      // alliws kanoume kanonika to request
      const response = await devteam2.post("/services/service_2/register", {
        inputValue,
      });

      const services = response.data.map((service) => ({
        label: service.service_2.slice(5),
        value: service.service_2,
      }));

      console.log(services);
      return services;
    }
  };

  renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <StepOne
            username={this.state.username}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            type={this.state.type}
            handleValues={this.handleValues}
            width={this.state.width}
            nextStep={this.nextStep}
            setWidth={this.setWidth}
          />
        );
      case 2:
        return (
          <StepTwo
            handleValues={this.handleValues}
            NameOfCompany={this.state.NameOfCompany}
            TypeOfCompany={this.state.TypeOfCompany}
            AFM={this.state.AFM}
            DOY={this.state.DOY}
            selectedService2={this.state.selectedService2}
            searchService2={this.searchService2}
            setSelectedService2={this.setSelectedService2}
            width={this.state.width}
            nextStep={this.nextStep}
            setWidth={this.setWidth}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <StepThree
            seeState={this.seeState}
            registerUser={this.registerUser}
            handleValues={this.handleValues}
            Phone={this.state.Phone}
            email={this.state.email}
            width={this.state.width}
            nextStep={this.nextStep}
            setWidth={this.setWidth}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success username={this.state.username} />;
    }
  };

  seeState = () => {
    console.log(this.state);
  };

  handleValues = (value, name) => {
    // console.log("sadasd", value, name);
    this.setState({ [name]: value });
  };

  nextStep = () => {
    this.setState((prevState) => {
      return { step: prevState.step + 1 };
    });
  };
  prevStep = () => {
    // this.setState({ step: this.state.step - 1 });
    this.setState((prevState) => {
      return { step: prevState.step - 1 };
    });
  };
  setWidth = (width) => {
    this.setState({ width });
  };
  getWidth = () => {
    return { width: `${this.state.width}%` };
  };

  setSelectedService2 = (inputValue) => {
    this.setState({ selectedService2: inputValue });
  };

  registerUser = () => {
    let path = "/clients";
    const newUser = {
      Emploeeys: 4,
      AFM: this.state.AFM,
      TypeOfCompany: this.state.TypeOfCompany,
      DOY: this.state.DOY,
      Phone: this.state.Phone,
      Activity: this.state.selectedService2[0].value,
      YearsOperation: 5,
      NameOfCompany: this.state.NameOfCompany,
      Password: "pwd",
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      update_at: new Date().toISOString(),
    };

    if (this.state.type == "Πάροχος") {
      newUser["Rating"] = 0;
      newUser["TypeOfRequestedJobs"] = this.state.selectedService2.value;
      path = "/providers";
    }

    instance
      .post(path, newUser)
      .then(async (response) => {
        if (response.status == 200) {
          let finalUser = {
            confirmed: true,
            blocked: false,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            provider: "local",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            role: {
              _id: "60fd79585a9a8e22e48e47b0",
              name: "Authenticated",
              description: "Default role given to authenticated user.",
              type: "authenticated",
              __v: 0,
              id: "60fd79585a9a8e22e48e47b0",
            },
          };

          if (this.state.type == "Πάροχος") {
            finalUser["userprovider"] = { _id: response.data._id };
          } else {
            finalUser["client"] = { _id: response.data._id };
          }

          instance
            .post("/users", finalUser)
            .then((response) => {
              console.log("/users", response);
              if (response.status == 201) {
                toast.notify(
                  "Η εγγραφή στην πλατφόρμα ήταν επιτυχής θα συνδεθείτε αυτόματα",
                  { duration: 5, type: "success", title: "Service Store" }
                );
                loginUser(this.state.username, this.state.password, this.props);
              } else {
                console.log(response);
              }
            })
            .catch((error) => {
              toast.notify(
                "Υπήρξε ένα πρόβλημα με την εγγραφή σας. Ελέγξτε τα στοιχεία ξανά",
                { duration: 5, type: "error", title: "Service Store" }
              );
            });
        }
      })
      .catch(function (error) {
        return "Invalid Username or Password";
      })
      .then(function () {
        // always executed
      });
  };

  render() {
    const { step, width } = this.state;
    return (
      <>
        <Head>
          <title>Service Store - Εγγραφή</title>
          <meta name="description" content="Greek DX services platform" />
        </Head>
        <style jsx global>{`
          body {
            background: linear-gradient(
              to right,
              #0e2e46 20%,
              #fff 20%
            ) !important;
          }
        `}</style>
        {/* #1c5a8a 20%, */}
        <nav className={`navbar navbar-expand-lg nav-fill`}>
          <div className="container-fluid pt-3">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={logo} alt="logo" responsive="true" />
              </a>
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="row p-2 d-none d-lg-block">
            <div className="col-xl-8 offset-xl-4">
              <div className="row p-2">
                <div className="col-4">
                  {this.state.step > 1 ? (
                    <button
                      className="btn btn-sm btn-success"
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm bg-primary"
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      1
                    </button>
                  )}{" "}
                  Στοιχεία λογαριασμού
                </div>
                <div className="col-4">
                  {this.state.step > 2 ? (
                    <button
                      className="btn btn-sm btn-success"
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm bg-primary"
                      disabled={
                        this.state.step == 2 || this.state.step == 3
                          ? false
                          : true
                      }
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      2
                    </button>
                  )}{" "}
                  Επαγγελματικά Στοιχεία
                </div>
                <div className="col-4">
                  {this.state.step == 4 ? (
                    <button
                      className="btn btn-sm btn-success"
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm bg-primary"
                      style={{ width: "2rem", height: "2rem" }}
                      disabled={this.state.step == 3 ? false : true}
                    >
                      3
                    </button>
                  )}{" "}
                  Στοιχεία επικοινωνίας
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2 d-none d-lg-block">
            <div className="col-xl-8 offset-xl-4">
              {step < 4 && (
                <div className="row">
                  <small className="text-muted">Βήμα {step} / 3</small>
                </div>
              )}
            </div>
          </div>
          <div className="row p-2">
            <div className="col-xl-8 offset-xl-4">
              <p className="fs-2 text-primary">Εγγραφή</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-xl-8 offset-xl-4">
              <div className="card shadow-sm">
                {this.renderSwitch(step)}
                {this.state.step < 4 && (
                  <div className="row p-2 text-center text-muted">
                    <small className="p-2">
                      Έχετε ήδη λογαριασμό;{" "}
                      <Link href="/Plogin">Συνδεθείτε τώρα!</Link>
                    </small>
                  </div>
                )}
                <div className="row p-2 m-2 justify-content-center d-block d-lg-none">
                  {step < 4 && (
                    <>
                      <div className="col-xl-10">
                        <div className="progress" style={{ height: "3px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={this.getWidth(width)}
                            // aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                      <div className="row text-center">
                        <small className="text-muted">Βήμα {step} από 3</small>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer align={"left"} position={"bottom"} />
      </>
    );
  }
}

export default Pregister;
