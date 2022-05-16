// import Navigation from "../components/LandingPage/Navigation/navigation";
// import Landing from "../components/LandingPage/landing";
// import Services from "../components/LandingPage/services/services";
// import WhoAreWe from "../components/LandingPage/whoarewe/whoarewe";
// import Feedback from "../components/LandingPage/feedback/feedback";
// export default function Home() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <Navigation></Navigation>
//       <div id="home" style={{ height: 750 }}>
//         <Landing></Landing>
//       </div>
//       <div id="services" style={{ height: 650 }}>
//         <Services></Services>
//       </div>
//       <div id="whoarewe" style={{ height: 550 }}>
//         <WhoAreWe></WhoAreWe>
//       </div>
//       <div id="feedback" style={{ height: 750 }}>
//         <Feedback></Feedback>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
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
import { devteam2 } from "./api/axiosConfiguration";
import AsyncSelect from "react-select/async";

const Home = () => {
  // const [domain, setDomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(null);

  //auta mporoun na erxontai apo th vash me request
  //prepei na ftiaxtei to api
  // const [domains, setDomains] = useState([
  //   { id: 1, name: "Ψηφιακό Μάρκετινγκ" },
  //   { id: 2, name: "Ψηφιακή διαχείριση πωλήσεων & αγορών" },
  //   { id: 3, name: "Ψηφιακή διαχείριση παραγωγής" },
  //   { id: 4, name: "Έξυπνη εφοδιαστική αλυσίδα" },
  //   { id: 5, name: "Ψηφιακή υπηρεσίες υποστήριξης" },
  //   { id: 6, name: "Οικονομική διαχείριση" },
  //   { id: 7, name: "Διαχείριση ανθρώπινου δυναμικού" },
  //   { id: 8, name: "Ψηφιακή διαχείριση αποθήκης" },
  //   { id: 9, name: "Έξυπνα κτίρια" },
  //   { id: 10, name: "ΙΤ Υποδομές & Ασφάλεια" },
  //   { id: 11, name: "Τηλε-εργασία/διάσκεψη" },
  //   { id: 12, name: "Ψηφιακές δεξιότητες" },
  //   { id: 13, name: "Ανάπτυξη λογισμικού" },
  //   { id: 14, name: "Συμβουλευτικές υπηρεσίες" },
  // ]);

  const domains = [
    { id: 1, name: "Ψηφιακό Μάρκετινγκ" },
    { id: 2, name: "Ψηφιακή διαχείριση πωλήσεων & αγορών" },
    { id: 3, name: "Ψηφιακή διαχείριση παραγωγής" },
    { id: 4, name: "Έξυπνη εφοδιαστική αλυσίδα" },
    { id: 5, name: "Ψηφιακή υπηρεσίες υποστήριξης" },
    { id: 6, name: "Οικονομική διαχείριση" },
    { id: 7, name: "Διαχείριση ανθρώπινου δυναμικού" },
    { id: 8, name: "Ψηφιακή διαχείριση αποθήκης" },
    { id: 9, name: "Έξυπνα κτίρια" },
    { id: 10, name: "ΙΤ Υποδομές & Ασφάλεια" },
    { id: 11, name: "Τηλε-εργασία/διάσκεψη" },
    { id: 12, name: "Ψηφιακές δεξιότητες" },
    { id: 13, name: "Ανάπτυξη λογισμικού" },
    { id: 14, name: "Συμβουλευτικές υπηρεσίες" },
  ];

  //kanoume shuffle ta domains kai pairnoume ta 4 prwta stoixeia
  //kai ta vazoume sto shuffledDomains
  const [shuffledDomains, setShuffledDomains] = useState(
    domains.sort(() => 0.5 - Math.random()).slice(0, 2)
  );

  useEffect(() => {
    AOS.init({ once: true });
    localStorage.removeItem("domain");
  }, []);

  // const getInputValue = (event) => {
  //   // show the user input value to console
  //   const userValue = event.target.value;
  //   setDomain(userValue);
  //   // console.log(userValue);
  // };

  const searchDomain = async (inputValue) => {
    console.log("input domain value: ", inputValue);

    // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
    // dioti apo th vash 8a ferei ola ta apotelesmata
    const regex = new RegExp("^\\s+|^[0-9]|^\\.");

    // elegxoume ean tairiazei tote kanoume return
    if (regex.test(inputValue)) {
      return;
    } else {
      const response = await devteam2.post("/services/domain", { inputValue });
      console.log("before", response.data);
      const services = response.data.map((service) => ({
        label: service.slice(2),
        value: service,
      }));

      console.log(services);
      return services;
    }
  };

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
        <div className="container py-3" style={{ minHeigth: "30vh" }}>
          <div className="row align-items-center">
            <div
              className="col"
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ height: "70vh!important" }}
            >
              {/* <div
                // className="card rounded border-light shadow h-100 mb-3 bg-light bg-opacity-10"
                className="h-100 mb-3"
                // style={{ background: "none!important" }}
              > */}
              {/* <div className="card-body p-2"> */}
              <div className="row justify-content-center py-2 my-2">
                <h1 className="display-4 text-light">
                  <Typewriter
                    options={{
                      strings: [
                        `Φέρνουμε κοντά επιχειρήσεις στο ταξίδι του <span style="color:#0e2e46;font-weight: 400;">ψηφιακού μετασχηματισμού</span>`,
                        `Βρίσκουμε τους <span style="color:#0e2e46;font-weight: 400;">καλύτερους</span> για τον ψηφιακό μετασχηματισμό της επιχείρησής σου`,
                        `Δημιουργούμε νέες <span style="color:#0e2e46;font-weight: 400;">ευκαιρίες</span> στην ψηφιακή οικονομία`,
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 3,
                    }}
                  />
                </h1>
              </div>

              <div className="fixed-bottom">
                <div className="card rounded border-light shadow bg-light bg-opacity-10 m-2">
                  <div className="card-body">
                    <div className="row py-2 mb-2 justify-content-center align-items-center">
                      <div
                        className="col-7"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <AsyncSelect
                          value={selectedDomain}
                          instanceId="domain"
                          loadOptions={searchDomain}
                          placeholder="Αναζητήστε"
                          onChange={setSelectedDomain}
                          loadingMessage={() => "Φόρτωση..."}
                          noOptionsMessage={() => "Κανένα αποτέλεσμα"}
                        />
                      </div>

                      <div className="col-5 text-center align-items-center">
                        <Link href={"/Plogin"} passHref>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              selectedDomain &&
                                localStorage.setItem(
                                  "domain",
                                  selectedDomain.value
                                );
                            }}
                          >
                            Ξεκινήστε εδώ!
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* <h4
                      className="display-6 text-light text-center py-2 my-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    > */}
                    <p
                      className="fs-4  text-light text-center py-2 my-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Συχνές υπηρεσίες
                    </p>
                    <div className="row">
                      <div
                        className="col-auto me-auto py-2"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                      >
                        <p className="fs-6 text-light">
                          {shuffledDomains[0].name}
                        </p>
                      </div>
                      <div
                        className="col-auto me-auto py-2"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                      >
                        <p className="fs-6 text-light">
                          {shuffledDomains[1].name}
                        </p>
                      </div>
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
                src={pic}
                alt="hero image"
                responsive="true"
                //priority
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
        className="container-fluid py-2 text-light"
        id="howitworks"
        // style={{ backgroundColor: "#f6f7fb" }}
        style={{ backgroundColor: "#1c5a8a" }}
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
                <FontAwesomeIcon
                  // className="text-light"
                  icon={faPlus}
                />{" "}
                Δημιουργία αιτήματος
              </h1>
              <h1
                className="display-6 align-self-lg-end"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <FontAwesomeIcon
                  // className="text-light"
                  icon={faCogs}
                />{" "}
                Αντιστοίχιση
              </h1>
              <h1
                className="display-6 align-self-lg-start"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <FontAwesomeIcon className="text-light" icon={faFileAlt} />{" "}
                Δημιουργία Προσφοράς
              </h1>
              <h1
                className="display-6 align-self-lg-end"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <FontAwesomeIcon
                  // className="text-light"
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
              <button className="btn-small btn-primary rounded-pill">
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
                    <button
                      type="submit"
                      className="btn-small btn-primary rounded-pill"
                    >
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
