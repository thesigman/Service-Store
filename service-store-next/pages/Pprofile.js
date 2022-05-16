import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/layout";
import { instance } from "./api/axiosConfiguration";
import {
  faGlobe,
  faPhoneAlt,
  faSave,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatingComponent from "react-star-rating-component";
// import Innercontainer from "../container/innerContainer";

const Pprofile = (props) => {
  const [nameOfCompany, setNameOfCOmpany] = useState();
  const [phone, setPhone] = useState();
  const [employees, setEmployess] = useState();
  const [doy, setDoy] = useState();
  const [yearsOfOperation, setYearsOfOperation] = useState();
  const [created, setCreated] = useState();
  const [typeOfRequestedJobs, setTypeOfRequestedJobs] = useState();
  const [activity, setActivity] = useState();
  const [typeOfCompany, setTypeOfComapny] = useState();
  const [rating, setRating] = useState();
  const [username, setUsername] = useState();
  const [afm, setAfm] = useState();
  const [email, setEmail] = useState();
  const [activeUser, setActiveUser] = useState();
  const [type, setType] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();
  const [ekprosvpos, setEkpr] = useState();

  // needs fix
  useEffect(async () => {
    let active_user = JSON.parse(
      window.sessionStorage.getItem("application_user")
    );
    let endpointName = active_user.role == "provider" ? "providers" : "clients";
    if (props.mode == "admin") {
      endpointName = props.activeUser.role;
      active_user = props.activeUser;
    }
    setActiveUser(active_user);
    setType(endpointName);
    setUsername(active_user.username);
    setEmail(active_user.email);
    await instance
      .get(`/${endpointName}/${active_user.id}`)
      .then(function (response) {
        setNameOfCOmpany(response.data.NameOfCompany);
        setActivity(response.data.Activity);
        setRating(response.data.Rating);
        setPhone(response.data.Phone);
        setDoy(response.data.DOY);
        setEmployess(response.data.Emploeeys);
        setYearsOfOperation(response.data.YearsOperation);
        setCreated(response.data.createdAt);
        setTypeOfRequestedJobs(response.data.TypeOfRequestedJobs);
        setTypeOfComapny(response.data.TypeOfCompany);
        setAfm(response.data.AFM);
      })
      .catch(function (error) {
        // Σε περίπτωση που δεν έχει πρόσβαση η υπάρχει error θα προστεθεί εδώ
      });
  }, []);

  const updateProfileInfo = async () => {
    const changedProfile = {
      _id: activeUser.id,
      Emploeeys: employees,
      AFM: afm,
      TypeOfCompany: typeOfCompany,
      DOY: doy,
      Phone: phone,
      YearsOperation: yearsOfOperation,
      NameOfCompany: nameOfCompany,
    };

    const response = await instance.put(
      `/${type}/${activeUser.id}`,
      changedProfile
    );
    if (response.status == 200) {
      toast.notify("Η ενημέρωση του Προφίλ ολοκληρώθηκε με επιτυχία", {
        duration: 5,
        type: "success",
        title: "Service Store",
      });
    }
  };

  return (
    <Layout mode={props.mode} user={props}>
      <div className="vh-100">
        <Head>
          <title>Service Store - Λογαριασμός</title>
          <meta name="description" content="Greek DX services platform" />
        </Head>
        <style jsx global>{`
          a.active {
            background: #0e2e46 !important;
            color: white !important;
          }
        `}</style>

        <div className="row p-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                {/* <a href="#">Αρχική</a> */}
                <Link href="/home">
                  <a>Αρχική</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Λογαριασμός
              </li>
            </ol>
          </nav>
        </div>

        <div className="row p-2">
          <p className="display-5 text-primary">Λογαριασμός</p>
        </div>

        {(!(props.isAuthenticated || props.mode == "admin") && (
          <p>You have to login First</p>
        )) || (
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-lg-3 mb-2">
                <div
                  className="card border-light rounded shadow-sm"
                  style={{ overflowX: "auto" }}
                >
                  {/* gia o8ones megaluteres apo lg 8a einai aristera */}
                  <ul className="nav nav-pills nav-fill flex-column d-none d-lg-block">
                    <li className="nav-item">
                      <a
                        className="nav-link active text-primary"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        Γενικά
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        Αναλυτικά
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        Αξιολογήσεις
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        Ρυθμίσεις
                      </a>
                    </li>
                  </ul>

                  {/* gia o8ones mikroteres apo lg 8a einai panw se seira*/}
                  <ul
                    className="nav nav-pills nav-fill d-lg-none"
                    style={{ minWidth: "100vh", overflowX: "auto" }}
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        Γενικά
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        Αναλυτικά
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        Αξιολογήσεις
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-primary"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        Ρυθμίσεις
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 mb-2">
                <div className="card border-light rounded shadow-sm">
                  <div className="card-body">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                        tabIndex="0"
                      >
                        <div className="container text-primary">
                          <div className="row pt-2">
                            <p className="fs-4">Γενικά</p>
                          </div>
                          <hr />
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Όνομα χρήστη
                            </div>
                            <div className="col-md-6 mb-2">{username}</div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Ηλεκτρονική διεύθυνση
                            </div>
                            <div className="col-md-6 mb-2">{email}</div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Ιστοσελίδα
                            </div>
                            <div className="col-md-6 mb-2">
                              yourawesomesite.com
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Τηλέφωνο
                            </div>
                            <div className="col-md-6 mb-2">{phone}</div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Ημερομηνία εγγραφής
                            </div>
                            <div className="col-md-6 mb-2">
                              {moment(created).format("LL")}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                        tabIndex="0"
                      >
                        <div className="container text-primary">
                          <div className="row pt-2">
                            <p className="fs-4">Αναλυτικά</p>
                          </div>
                          <hr />

                          <div className="container">
                            <div className="row pt-2">
                              <p className="fs-5">Ιδιωτικά</p>
                            </div>
                            <hr />
                            <div className="row p-2">
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="phone"
                                  className="form-label fs-6 text-primary"
                                >
                                  Τηλέφωνο
                                </label>
                                <input
                                  value={phone}
                                  onChange={(event) =>
                                    setPhone(event.target.value)
                                  }
                                  type="text"
                                  className="form-control"
                                  id="phone"
                                  aria-describedby="phoneHelp"
                                  placeholder="το τηλέφωνό σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="username"
                                  className="form-label fs-6 text-primary"
                                >
                                  Διεύθυνση
                                </label>
                                <input
                                  value={props.username}
                                  onChange={(event) =>
                                    setAddress(event.target.value)
                                  }
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  aria-describedby="addressHelp"
                                  placeholder="η διεύθυνσή σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="city"
                                  className="form-label fs-6 text-primary"
                                >
                                  Πόλη
                                </label>
                                <input
                                  onChange={(event) =>
                                    setCity(event.target.value)
                                  }
                                  value={city}
                                  type="text"
                                  className="form-control"
                                  id="city"
                                  aria-describedby="cityHelp"
                                  placeholder="η πόλη σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="postal"
                                  className="form-label fs-6 text-primary"
                                >
                                  Ταχυδρομικός κώδικας
                                </label>
                                <input
                                  value={postal}
                                  onChange={(event) =>
                                    setPostal(event.target.value)
                                  }
                                  type="text"
                                  className="form-control"
                                  id="postal"
                                  aria-describedby="postalHelp"
                                  placeholder="ο ταχυδρομικός κώδικάς σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="ekpr"
                                  className="form-label fs-6 text-primary"
                                >
                                  Όνομα εκπροσώπου
                                </label>
                                <input
                                  onChange={(event) =>
                                    setEkpr(event.target.value)
                                  }
                                  value={ekprosvpos}
                                  type="text"
                                  className="form-control"
                                  id="ekpr"
                                  aria-describedby="ekprHelp"
                                  placeholder="εκπρόσωπος εταιρείας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="container">
                            <div className="row pt-2">
                              <p className="fs-5">Επαγγελματικά</p>
                            </div>
                            <hr />
                            <div className="row p-2">
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="nameOfCompany"
                                  className="form-label fs-6 text-primary"
                                >
                                  Όνομα Εταιρείας
                                </label>
                                <input
                                  onChange={(event) =>
                                    setNameOfCOmpany(event.target.value)
                                  }
                                  value={nameOfCompany}
                                  type="text"
                                  className="form-control"
                                  id="nameOfCompany"
                                  aria-describedby="nameofCompanyHelp"
                                  placeholder="το όνομα της εταιρείας σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="typeOfCompany"
                                  className="form-label fs-6 text-primary"
                                >
                                  Τύπος εταιρείας
                                </label>
                                <input
                                  onChange={(event) =>
                                    setTypeOfComapny(event.target.value)
                                  }
                                  value={typeOfCompany}
                                  type="text"
                                  className="form-control"
                                  id="typeOfCompany"
                                  aria-describedby="typeHelp"
                                  placeholder="τύπος εταιρείας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="nameOfCompany"
                                  className="form-label fs-6 text-primary"
                                >
                                  Αριθμός φορολογικού μητρώου εταιρείας
                                </label>
                                <input
                                  onChange={(event) =>
                                    setAfm(event.target.value)
                                  }
                                  value={afm}
                                  type="text"
                                  className="form-control"
                                  id="afm"
                                  aria-describedby="afmHelp"
                                  placeholder="το Α.Φ.Μ. της εταιρείας σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="doy"
                                  className="form-label fs-6 text-primary"
                                >
                                  Δημόσια οικονομική υπηρεσία
                                </label>
                                <input
                                  onChange={(event) =>
                                    setDoy(event.target.value)
                                  }
                                  value={doy}
                                  type="text"
                                  className="form-control"
                                  id="doy"
                                  aria-describedby="doyHelp"
                                  placeholder="σε ποια Δ.Ο.Υ. υπάγεται η εταιρεία σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="yearsOfOperation"
                                  className="form-label fs-6 text-primary"
                                >
                                  Χρόνια λειτουργίας εταιρείας
                                </label>
                                <input
                                  onChange={(event) =>
                                    setYearsOfOperation(event.target.value)
                                  }
                                  value={yearsOfOperation}
                                  type="text"
                                  className="form-control"
                                  id="yearsOfOperation"
                                  aria-describedby="yearsOfOperationHelp"
                                  placeholder="πόσο καιρό λειτουργεί η εταιρεία σας"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label
                                  htmlFor="employees"
                                  className="form-label fs-6 text-primary"
                                >
                                  Αριθμός υπαλλήλων
                                </label>
                                <input
                                  onChange={(event) =>
                                    setEmployess(event.target.value)
                                  }
                                  value={employees}
                                  type="text"
                                  className="form-control"
                                  id="employees"
                                  aria-describedby="employeesHelp"
                                  placeholder="πόσους υπαλλήλους απασχολείτε"
                                  style={{ minHeight: "3rem !important" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row p-2 justify-content-end">
                            <button
                              className="btn btn-primary btn-small"
                              onClick={updateProfileInfo}
                            >
                              Αποθήκευση
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                        tabIndex="0"
                      >
                        <div className="container text-primary">
                          <div className="row pt-2">
                            <p className="fs-4">Αξιολογήσεις</p>
                          </div>
                          <hr />
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Επικοινωνία με τον πελάτη
                            </div>
                            <div className="col-md-6 mb-2 fw-bold">
                              <StarRatingComponent
                                name="factor3"
                                value={3}
                                starCount={5}
                                emptyStarColor={"#F0F0F0"}
                                renderStarIcon={() => (
                                  <FontAwesomeIcon icon={faStar} />
                                )}
                                starColor={"#FFD579"}
                              />
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Συνέπεια στο έργο
                            </div>
                            <div className="col-md-6 mb-2 fw-bold">
                              <StarRatingComponent
                                name="factor3"
                                value={0}
                                starCount={5}
                                emptyStarColor={"#F0F0F0"}
                                renderStarIcon={() => (
                                  <FontAwesomeIcon icon={faStar} />
                                )}
                                starColor={"#FFD579"}
                              />
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Συνολική εμπειρία
                            </div>
                            <div className="col-md-6 mb-2 fw-bold">
                              <StarRatingComponent
                                name="factor3"
                                value={1}
                                starCount={5}
                                emptyStarColor={"#F0F0F0"}
                                renderStarIcon={() => (
                                  <FontAwesomeIcon icon={faStar} />
                                )}
                                starColor={"#FFD579"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                        tabIndex="0"
                      >
                        <div className="container text-primary">
                          <div className="row pt-2">
                            <p className="fs-4">Ρυθμίσεις</p>
                          </div>
                          <hr />
                          <div className="row p-2">
                            <div className="col-md-6 mb-2 fw-bold">
                              Αλλαγή κωδικου
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pprofile;
