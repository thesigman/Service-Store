// import Navigation from '../components/LandingPage/Navigation/navigation'
// import Landing from '../components/LandingPage/landing'
// import Services from '../components/LandingPage/services/services'
// import WhoAreWe from '../components/LandingPage/whoarewe/whoarewe'
// import Feedback from '../components/LandingPage/feedback/feedback'
// export default function Home() {

//   return (
//     <div style={{ textAlign: "center" }}>
//       <Navigation></Navigation>
//       <div id="home" style={{height: 750}}>
//         <Landing></Landing>
//       </div>
//       <div id="services" style={{height: 650}}>
//         <Services></Services>
//       </div>
//       <div id="whoarewe" style={{height: 550}}>
//         <WhoAreWe></WhoAreWe>
//       </div>
//       <div id="feedback" style={{height: 750}}>
//         <Feedback></Feedback>
//       </div>

//     </div>

//   )
// }

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileAlt,
  faCogs,
  faFileSignature,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import pic from "../public/heroImg.png";
import contact from "../public/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = (props) => {
  useEffect(() => {
    AOS.init({ once: true });
  });

  let serviceList = [
    { id: 1, name: "Ψηφιακό Μάρκετινγκ" },
    { id: 2, name: "Ψηφιακή διαχείριση πωλήσεων & αγορών" },
    { id: 3, name: "Ψηφιακή διαχείριση παραγωγής" },
    { id: 4, name: "Έξυπνη εφοδιαστική αλυσίδα" },
    { id: 5, name: "Ψηφιακή διαχείριση παραγωγής" },
    { id: 6, name: "Οικονομική διαχείριση" },
    { id: 7, name: "Διαχείριση ανθρώπινου δυναμικού" },
  ];

  return (
    <>
      <Head>
        <title>Service Store</title>
        <meta name="description" content="Greek DX services platform" />
      </Head>

      <Navbar page="landingpage" />

      {/* style={{
        backgroundColor: "#34ADFF;",
        backgroundImage:
          "-webkit-linear-gradient(45deg, #34ADFF 50%, #fff 50%);",
      }} */}
      <div
        style={{
          backgroundColor: "#34ADFF",
          backgroundImage:
            "-webkit-linear-gradient(45deg, #1C5A8A 50%, #ebe2d0 50%)",
        }}
        // style={{
        //   backgroundColor: "#34ADFF",
        //   backgroundImage:
        //     "-webkit-linear-gradient(45deg, #1C5A8A 50%, #fff 50%)",
        // }}
      >
        <div className="container py-3">
          <div className="row d-flex align-items-center">
            <div
              className="col"
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ height: "60vh!important" }}
            >
              <div
                className="card rounded border-light shadow h-100 mb-3 bg-light bg-opacity-10"
                // style={{ background: "none!important" }}
              >
                <div className="card-body p-2">
                  <div className="card-title justify-content-center py-2 my-2">
                    <h1 className="display-5 text-light">
                      <Typewriter
                        options={{
                          strings: [
                            "Φέρνουμε κοντά επιχειρήσεις στο ταξίδι του ψηφιακού μετασχηματισμού",
                            "Βρίσκουμε τους καλύτερους για τον ψηφιακό μετασχηματισμό της επιχείρησής σου",
                            "Δημιουργούμε νέες ευκαιρίες στην ψηφιακή οικονομία",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 3,
                        }}
                      />
                    </h1>
                  </div>

                  <div className="row p-2 m-2 justify-content-center align-items-center fixed-bottom">
                    <div
                      className="col-7 pt-2"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <input
                        className="form-control"
                        placeholder={"Αναζητήστε υπηρεσία"}
                        style={{ height: "3em" }}
                        // list="serviceList"
                      />
                      {/* <datalist id="serviceList">
                        {serviceList.map((service) => (
                          <option key={service.id} value={service.name} />
                        ))}
                      </datalist> */}
                    </div>

                    <div className="col-5 text-center align-items-center">
                      <Link href={"/login"}>
                        <button className="btn btn-outline-light rounded-pill">
                          Ξεκινήστε εδώ!
                        </button>
                      </Link>
                    </div>

                    <div
                      className="display-6 text-light text-center py-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Συχνές υπηρεσίες
                    </div>
                    <div
                      className="col-auto me-auto py-2"
                      data-aos="fade-up"
                      data-aos-duration="1100"
                    >
                      <button className="btn btn-danger rounded-pill">
                        Ψηφιακό Μάρκετινγκ
                      </button>
                    </div>
                    <div
                      className="col-auto me-auto py-2 d-none d-lg-block"
                      data-aos="fade-up"
                      data-aos-duration="1100"
                    >
                      <button className="btn btn-primary rounded-pill">
                        Οικονομική Διαχείριση
                      </button>
                    </div>

                    <div className="w-100 d-none d-md-block"></div>
                    <div
                      className="col-auto me-auto py-2 d-none d-lg-block"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <button className="btn btn-warning rounded-pill">
                        Έξυπνα κτίρια
                      </button>
                    </div>
                    <div
                      className="col-auto me-auto py-2"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <button className="btn btn-success rounded-pill">
                        ΙΤ Yποδομές & Ασφάλεια
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col d-flex justify-content-center d-none d-md-block"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                // loader={myLoader}
                src={pic}
                alt="Picture of the author"
                responsive="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-3"
        id="services"
        style={{ backgroundColor: "white" }}
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">Υπηρεσίες</h1>
        </div>
        <div className="row m-2 p-2 justify-content-md-evenly">
          <div className="col-md-3 p-2">
            <div
              className="card shadow shadow-sm rounded"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <h5 className="card-title">Ψηφιακή διαχείριση αποθήκης</h5>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </div>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div
              className="card shadow shadow-sm rounded"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <h5 className="card-title">Έξυπνα κτίρια</h5>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </div>
            </div>
          </div>
          <div
            className="col-md-3 p-2"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">ΙοΤ υποδομές και ασφάλεια</h5>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </div>
            </div>
          </div>
        </div>

        <div className="row m-2 p-2 justify-content-md-evenly">
          <div className="col-md-3 p-2">
            <div
              className="card shadow shadow-sm rounded"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <h5 className="card-title">Τηλεργασία / τηλεδιάσκεψη</h5>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </div>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div
              className="card shadow shadow-sm rounded"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <h5 className="card-title">Ψηφιακές δεξιότητες</h5>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </div>
            </div>
          </div>
          <div
            className="col-md-3 p-2"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">
                  Ανάπτυξη λογισμικού για ειδικές χρήσεις
                </h5>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </div>
            </div>
          </div>
          <div
            className="col-md-3 p-2"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">
                  Συμβουλευτικές υπηρεσίες ψηφιακού μετασχηματισμού
                </h5>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-2"
        id="howitworks"
        // style={{ backgroundColor: "#f6f7fb" }}
        style={{ backgroundColor: "#ebe2d0" }}
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">Πώς λειτουργεί</h1>
        </div>
        <div className="row m-2 p-2 text-center justify-content-center">
          <div className="col-md-7">
            <div className="vstack gap-4 py-2">
              <h1
                className="display-6 align-self-lg-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon className="text-primary" icon={faPlus} />{" "}
                Δημιουργία αιτήματος
              </h1>
              <h1
                className="display-6 align-self-lg-end"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <FontAwesomeIcon className="text-primary" icon={faCogs} />{" "}
                Αντιστοίχιση
              </h1>
              <h1
                className="display-6 align-self-lg-start"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <FontAwesomeIcon className="text-primary" icon={faFileAlt} />{" "}
                Δημιουργία Προσφοράς
              </h1>
              <h1
                className="display-6 align-self-lg-end"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faFileSignature}
                />{" "}
                Επικοινωνία και υπογραφή
              </h1>
            </div>
          </div>
        </div>
        <div className="row p-2 m-2 justify-content-center">
          <div className="col-md-4 d-flex justify-content-center">
            <Link href={"/howitworks"}>
              <button className="btn btn-lg btn-outline-primary rounded">
                Μάθετε περισσότερα για τη διαδικασία{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "white" }}
        id="contact"
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">Επικοινωνία</h1>
        </div>
        <div className="row align-items-center m-2 p-2">
          <div
            className="col-md-6 d-flex justify-content-center d-none d-lg-block"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image
              // loader={myLoader}
              src={contact}
              alt="Picture of contact"
              responsive="true"
            />
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="card shadow shadow-sm border border-light rounded">
              <div className="card-body">
                <div className="card-title my-2 py-2 text-center">
                  <h1 className="display-6">Επικοινωνήστε μαζί μας</h1>
                </div>

                <form className="row g-2">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Γιώργος Παπαδόπουλος"
                        required
                      />
                      <label htmlFor="name" className="form-label">
                        Όνομα
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="παράδειγμα@email.com"
                        required
                      />
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Κάποιο θέμα"
                        required
                      />
                      <label htmlFor="subject" className="form-label">
                        Θέμα
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Μήνυμα"
                        id="floatingTextarea"
                        style={{ minHeight: "100px" }}
                        required
                      />
                      <label htmlFor="floatingTextarea">Μήνυμα</label>
                    </div>
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-primary">
                      Υποβολή
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
