import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-nextjs-toast";
import Selector from "../components/Selector/selector";
import { loginUser } from "../libs/auth";
import { doys } from "../libs/doy";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { instance } from "../pages/api/axiosConfiguration";
import styles from "./login.module.scss";
import logo_dark from "../public/logo_dark.png";

export default function register(props) {
  const [typosEtaireias, setTyposEtaireias] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [policiesSatatisfied, setPoliciesSatisfied] = useState(false);
  const [termsAggreed, setTermsAggreed] = useState(false);
  const [doy, setDoy] = useState();
  const [activity, setActivity] = useState();
  const [vat, setVat] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [nameOfCompany, setNameOfCompany] = useState();
  const [messageText, setMessageText] = useState();
  const [TypeOfRequestedJobs, setTypeOfRequestedJobs] = useState();
  const [type, setType] = useState();
  const [service2, setService2] = useState([]);

  useEffect(() => {
    instance.get("/services").then(
      (response) => {
        const res = response.data;
        let tempService2 = [];
        res.forEach((value) => {
          tempService2 = [
            ...tempService2,
            { question: value.service_1, answer: value.service_2 },
          ];
        });
        setService2([...new Set(tempService2.values())]);
        if (service2.length > 0) {
          setService2(service2.map((a) => a.answer));
        }
      },
      (error) => {
        console.log("test");
      }
    );
  }, [service2.length]);

  useEffect(() => {
    if (policiesSatatisfied && termsAggreed) {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
  }, [policiesSatatisfied, termsAggreed]);

  const updateRequestedJob = (placeholder, value, label) => {
    setTypeOfRequestedJobs(value);
  };

  const setSelectedDoy = (placeholder, value, label) => {
    setDoy(label);
  };

  const registerUser = () => {
    let path = "/clients";
    const newUser = {
      Emploeeys: 4,
      AFM: vat,
      TypeOfCompany: typosEtaireias,
      DOY: doy,
      Phone: phone,
      Activity: activity,
      YearsOperation: 5,
      NameOfCompany: nameOfCompany,
      Password: "pwd",
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      update_at: new Date().toISOString(),
    };
    if (type == "Πάροχος") {
      newUser["Rating"] = 0;
      newUser["TypeOfRequestedJobs"] = TypeOfRequestedJobs;
      path = "/providers";
    }

    instance
      .post(path, newUser)
      .then(function (response) {
        if (response.status == 200) {
          let finalUser = {
            confirmed: true,
            blocked: false,
            username: username,
            email: email,
            password: password,
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

          if (type == "Πάροχος") {
            finalUser["userprovider"] = { _id: response.data._id };
          } else {
            finalUser["client"] = { _id: response.data._id };
          }

          instance
            .post("/users", finalUser)
            .then((response) => {
              if (response.status == 201) {
                toast.notify(
                  "Η εγγραφή στην πλατφόρμα ήταν επιτυχής θα συνδεθείτε αυτόματα",
                  { duration: 5, type: "success", title: "Service Store" }
                );
                loginUser(username, password, props);
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

  const setCompany = (s1, s2, s3) => {
    setTyposEtaireias(s2);
  };

  const setUserType = (s1, s2, s3) => {
    setType(s2);
  };

  // Αποθηκευέι τον κωδικό στο State και παράλληλα περνάει τους κωδικούς απο ένα
  // σύνολο passwordPolicies που θέλουμε πριν
  const handlePasswordManager = (currentPassword, mode) => {
    // Αποθήκευση των κωδικών στο state
    if (mode == "main") {
      if (!checkPolicies(currentPassword)) {
        setPassword(currentPassword);
        console.log(password);
      }
    } else {
      /**
       * Ελέγχουμε εαν
       * 1ον Υπάρχει κωδικός στο πεδίο του βασικού κωδικού
       * 2ον Έχει περάσει τα password Policies
       * 3ον Είναι ίδιος με τον βασικό κωδικό
       *
       * Εαν ισχύουν οι παραπάνω συνθήκες τότε τον θέτουμε στο πεδίο επιβεβαίωση και θέτουμε ότι
       * μπορεί ο χρήστης να συνεχίσει στην εγγραφή
       */
      if (
        typeof password != "undefined" &&
        !checkPolicies(password) &&
        currentPassword == password
      ) {
        setPasswordConfirm(currentPassword);
        setPoliciesSatisfied(true);
      } else {
        setPoliciesSatisfied(false);
      }
    }
  };

  // Περνάει τον κωδικό απο τους απαραίτητουε ελέγχους
  const checkPolicies = (currentPassword) => {
    let hasViolation = false;
    // Εφαρμογή των Password Policies
    if (currentPassword.length < 6) {
      console.log("Passowrd < 6 characters");
      hasViolation = true;
    }

    if (!currentPassword.match(/[A-Z]/)) {
      console.log("Not Containing Uppercase");
      hasViolation = true;
    }

    if (!currentPassword.match(/[a-z]/)) {
      console.log("Not Containing LowerCase");
      hasViolation = true;
    }

    return hasViolation;
  };

  return (
    <div className={["pagecenter"].join(" ")}>
      <ToastContainer align={"left"} position={"bottom"} />
      <div>
        <div>
          <div className={[styles.register].join(" ")}>
            <div className="container-fluid">
              <div
                className={[styles.formcontentwrapper, "bg-white", "col"].join(
                  " "
                )}
              >
                <Link href={"/"} passHref>
                  <a>
                    <Image
                      src={logo_dark}
                      alt="logo dark image"
                      responsive="true"
                    />
                  </a>
                </Link>
                <div className={[styles.formcontent].join(" ")}>
                  <div className="row">
                    <div className="col mr-2">
                      <b>Στοιχεία Λογαριασμού</b>
                      <div>
                        <label>Όνομα Χρήστη</label>
                        <input
                          onChange={(event) => setUsername(event.target.value)}
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div>
                        <label>Κωδικός Πρόσβασης</label>
                        <input
                          onChange={(event) =>
                            handlePasswordManager(event.target.value, "main")
                          }
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <label>Επιβεβαίωση Κωδικού</label>
                        <input
                          onChange={(event) =>
                            handlePasswordManager(event.target.value, "confirm")
                          }
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <label>Τύπος Λογαριασμού</label>
                        <Selector
                          onChange={setUserType}
                          values={["Πάροχος", "Πελάτης"]}
                        />
                      </div>
                    </div>
                    <div className="col mr-2">
                      <b>Επαγγελματικά</b>
                      <div>
                        <label>Όνομα Εταιρείας</label>
                        <input
                          onChange={(event) =>
                            setNameOfCompany(event.target.value)
                          }
                          placeholder="Όνομα Εταιρείας"
                        />
                      </div>
                      <div>
                        <Selector
                          placeholder="Τύπος Εταιρείας"
                          onChange={setCompany}
                          values={[
                            "Ανώνυμη Εταιρεία Α.Ε",
                            "Εταιρεία Περιορισμένης Ευθύνσης Ε.Π.Ε",
                            "Ομόρρυθμες Εταιρείες Ο.Ε",
                            "Ετερόρρυθμες Εταιρείες Ε.Ε ",
                            "Ιδιωτικές Κεφαλαιουχικές Εταιρείες Ι.Κ.Ε",
                          ]}
                        />
                      </div>
                      <div>
                        <label>Α.Φ.Μ Υπόχρεου</label>
                        <input
                          onChange={(event) => setVat(event.target.value)}
                          placeholder="v.a.t number"
                        />
                      </div>
                      <div>
                        <Selector
                          select2ready={true}
                          placeholder="ΔΟΥ"
                          id="doy"
                          onChange={setSelectedDoy}
                          values={doys}
                        ></Selector>
                      </div>

                      <div>
                        <Selector
                          placeholder="Δραστηριότητα Εταιρείας"
                          id="service_2"
                          onChange={updateRequestedJob}
                          multiple={true}
                          values={[...new Set(service2)]}
                        ></Selector>
                      </div>
                    </div>
                    <div className="col">
                      <b>Στοιχεία Επικοινωνίας</b>
                      <div>
                        <label>Τηλέφωνο</label>
                        <input
                          onChange={(event) => setPhone(event.target.value)}
                          type=""
                          placeholder="Τηλέφωνο"
                        />
                      </div>
                      <div>
                        <label>E-mail</label>
                        <input
                          onChange={(event) => setEmail(event.target.value)}
                          type="text"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button
                        onClick={() => registerUser()}
                        className="btn btn-small bg-primary btn-100"
                        disabled={buttonStatus}
                      >
                        Εγγραφή
                      </button>
                    </div>
                    <div className="col">
                      <Link href="/login">
                        <a
                          className={[
                            styles.contentmiddle,
                            "text-primary",
                            "mt-2",
                          ].join(" ")}
                        >
                          Σύνδεση στην πλατφόρμα
                        </a>
                      </Link>
                    </div>
                    <div className="col">
                      <div className="row">
                        <small>
                          Συμφωνώ στους όρους και τις άδειες χρήσης του
                          ServiceStore
                        </small>
                        <input
                          type="checkbox"
                          onChange={(event) =>
                            setTermsAggreed(event.target.value)
                          }
                        ></input>
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
  );
}
