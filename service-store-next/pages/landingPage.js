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
import logo from "../public/logo.png";
import contact from "../public/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";

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

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark p-2"
        style={{ backgroundColor: "#0e2e46!important;" }}
      >
        <div className="container-fluid">
          {/* <Image
            // loader={myLoader}
            src="/logo.png"
            alt="logo"
            responsive="true"
            // layout="fill"
            width="200%"
            height="30%"
          /> */}
          <Image
            // loader={myLoader}
            src={logo}
            alt="logo"
            responsive="true"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link href="#services" scroll={false}>
                <a
                  style={{
                    textDecoration: "none",
                    alignSelf: "center",
                    color: "white",
                    margin: 5,
                    padding: 5,
                    cursor: "default",
                  }}
                >
                  Υπηρεσίες
                </a>
              </Link>
              <Link href="#howitworks" scroll={false}>
                <a
                  style={{
                    textDecoration: "none",
                    alignSelf: "center",
                    color: "white",
                    margin: 5,
                    padding: 5,
                    cursor: "default",
                  }}
                >
                  Πως λειτουργεί
                </a>
              </Link>
              <Link href="#contact" scroll={false}>
                <a
                  style={{
                    textDecoration: "none",
                    alignSelf: "center",
                    color: "white",
                    margin: 5,
                    padding: 5,
                    cursor: "default",
                  }}
                >
                  Επικοινωνία
                </a>
              </Link>
              <Link href="/aboutus" scroll={false}>
                <a
                  style={{
                    textDecoration: "none",
                    alignSelf: "center",
                    color: "white",
                    margin: 5,
                    padding: 5,
                    cursor: "default",
                  }}
                >
                  Για εμάς
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* style={{
        backgroundColor: "#34ADFF;",
        backgroundImage:
          "-webkit-linear-gradient(45deg, #34ADFF 50%, #fff 50%);",
      }} */}
      <div
        style={{
          //   backgroundColor: "white",
          backgroundImage:
            "-webkit-linear-gradient(45deg, #1C5A8A 50%, #fff 50%)",
        }}
      >
        <div className="container py-3" style={{ minHeigth: "30vh" }}>
          <div className="row align-items-center">
            <div className="col" data-aos="fade-right" data-aos-duration="1000">
              <div className="row justify-content-center py-2 my-2">
                <h1 className="display-5 text-light">
                  <Typewriter
                    options={{
                      strings: [
                        "Φέρνουμε κοντά επιχειρήσεις στο ταξίδι του ψηφιακού μετασχηματισμού",
                        "Βρίσκουμε τους καλύτερους για τον ψηφιακό μετασχηματισμό της επιχείρησής σας",
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
              <div className="row py-2 my-2 justify-content-center align-items-center">
                <div
                  className="col-7"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <input
                    className="form-control"
                    placeholder={"Αναζητήστε υπηρεσία"}
                    style={{ height: "3em" }}
                    list="serviceList"
                  />
                  <datalist id="serviceList">
                    {serviceList.map((service) => (
                      <option key={service.id} value={service.name} />
                    ))}
                  </datalist>
                </div>

                <Link href={"/login"}>
                  <div className="col-5 text-center align-items-center">
                    <button className="btn btn-lg btn-primary">
                      Ξεκινήστε εδώ!
                    </button>
                  </div>
                </Link>
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
                <h5 className="card-title">Υπηρεσία 1</h5>
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
                <h5 className="card-title">Υπηρεσία 2</h5>
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
                <h5 className="card-title">Υπηρεσία 3</h5>
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
        style={{ backgroundColor: "#f6f7fb" }}
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
        style={{ backgroundColor: "white;" }}
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
            <div className="card shadow shadow-ms bd-primary rounded">
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
                    <button type="submit" className="btn bg-primary">
                      Υποβολή
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* style={{
        backgroundColor: "#013A6B;",
        backgroundImage:
          "-webkit-linear-gradient(150deg, #013A6B 35%, #004E95 35%);",
        // minHeight: "200px;",
      }} */}
      <div style={{ backgroundColor: "#0e2e46!important;" }}>
        <div className="container">
          {/* <footer className="pt-3 mt-4 text-muted border-top"> */}
          <footer className="pt-3 mt-4 text-light">
            <div className="row py-4 text-center d-flex flex-column flex-md-row align-items-center">
              <div className="col-4 p-2">
                <h5 className="py-2 text-uppercase">ServiceStore</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Αρχική
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Link
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Link
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-4 p-2">
                <h5 className="py-2 text-uppercase">Σχετικα με</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Κέντρο υποστήριξης
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Συχνές ερωτήσεις
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Link
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-4 p-2">
                <h5 className="py-2 text-uppercase">Οροι</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Όροι χρήσης
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Πολιτική απορρήτου
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-light text-decoration-none">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row text-center py-4">
              <p>&copy; servicestore team 2022</p>
            </div>
          </footer>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Home;
