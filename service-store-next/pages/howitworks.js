import { useState } from "react";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import create from "../public/create.png";
import match from "../public/match.png";
import choice from "../public/choice.png";
import communication from "../public/communication.png";
import agreement from "../public/agreement.png";

const HowItWorks = (props) => {
  const [width, setWidth] = useState(0);

  const getWidth = (width) => {
    return { width: `${width}%` };
  };

  return (
    <>
      <Navbar page="howitworks" background={"bg-dark"} />

      <div className="container-fluid py-3">
        <div className="row text-center">
          <h1 className="display-4">Client flow</h1>
        </div>
      </div>

      <div className="container py-3">
        <div className="row">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-create"
              role="tabpanel"
              aria-labelledby="pills-create-tab"
            >
              <div className="card border border-light shadow shadow-sm rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center d-none d-lg-block">
                      <Image
                        // loader={myLoader}
                        src={create}
                        alt="Picture of create"
                        responsive="true"
                      />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <h1 className="display-5">Δημιουργία</h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean eleifend a sapien imperdiet placerat. Sed tincidunt
                      at ex non fermentum. Fusce laoreet ornare arcu eget
                      hendrerit. Morbi tempor mi in egestas dapibus. Integer
                      auctor ipsum quam, sit amet pretium velit elementum sed.
                      Sed eget commodo turpis, at eleifend metus. Morbi nisl
                      orci, viverra nec gravida eget, semper non mauris.
                      Praesent imperdiet congue lectus, non ornare dui interdum
                      eu. Aliquam eleifend blandit tortor in rutrum. Sed congue
                      blandit scelerisque. Nam consequat leo bibendum,
                      sollicitudin tortor sed, porttitor lorem. Cras porta nunc
                      pharetra lobortis hendrerit. Fusce interdum augue nibh,
                      quis porta urna maximus eget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-match"
              role="tabpanel"
              aria-labelledby="pills-match-tab"
            >
              <div className="card border border-light shadow shadow-sm rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center d-none d-lg-block">
                      <Image
                        // loader={myLoader}
                        src={match}
                        alt="Picture of create"
                        responsive="true"
                      />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <h1 className="display-5">Αντιστοίχιση</h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean eleifend a sapien imperdiet placerat. Sed tincidunt
                      at ex non fermentum. Fusce laoreet ornare arcu eget
                      hendrerit. Morbi tempor mi in egestas dapibus. Integer
                      auctor ipsum quam, sit amet pretium velit elementum sed.
                      Sed eget commodo turpis, at eleifend metus. Morbi nisl
                      orci, viverra nec gravida eget, semper non mauris.
                      Praesent imperdiet congue lectus, non ornare dui interdum
                      eu. Aliquam eleifend blandit tortor in rutrum. Sed congue
                      blandit scelerisque. Nam consequat leo bibendum,
                      sollicitudin tortor sed, porttitor lorem. Cras porta nunc
                      pharetra lobortis hendrerit. Fusce interdum augue nibh,
                      quis porta urna maximus eget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-choice"
              role="tabpanel"
              aria-labelledby="pills-choice-tab"
            >
              <div className="card border border-light shadow shadow-sm rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center d-none d-lg-block">
                      <Image
                        // loader={myLoader}
                        src={choice}
                        alt="Picture of create"
                        responsive="true"
                      />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <h1 className="display-5">Επιλογή</h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean eleifend a sapien imperdiet placerat. Sed tincidunt
                      at ex non fermentum. Fusce laoreet ornare arcu eget
                      hendrerit. Morbi tempor mi in egestas dapibus. Integer
                      auctor ipsum quam, sit amet pretium velit elementum sed.
                      Sed eget commodo turpis, at eleifend metus. Morbi nisl
                      orci, viverra nec gravida eget, semper non mauris.
                      Praesent imperdiet congue lectus, non ornare dui interdum
                      eu. Aliquam eleifend blandit tortor in rutrum. Sed congue
                      blandit scelerisque. Nam consequat leo bibendum,
                      sollicitudin tortor sed, porttitor lorem. Cras porta nunc
                      pharetra lobortis hendrerit. Fusce interdum augue nibh,
                      quis porta urna maximus eget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-communication"
              role="tabpanel"
              aria-labelledby="pills-communication-tab"
            >
              <div className="card border border-light shadow shadow-sm rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center d-none d-lg-block">
                      <Image
                        // loader={myLoader}
                        src={communication}
                        alt="Picture of create"
                        responsive="true"
                      />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <h1 className="display-5">Επικοινωνία</h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean eleifend a sapien imperdiet placerat. Sed tincidunt
                      at ex non fermentum. Fusce laoreet ornare arcu eget
                      hendrerit. Morbi tempor mi in egestas dapibus. Integer
                      auctor ipsum quam, sit amet pretium velit elementum sed.
                      Sed eget commodo turpis, at eleifend metus. Morbi nisl
                      orci, viverra nec gravida eget, semper non mauris.
                      Praesent imperdiet congue lectus, non ornare dui interdum
                      eu. Aliquam eleifend blandit tortor in rutrum. Sed congue
                      blandit scelerisque. Nam consequat leo bibendum,
                      sollicitudin tortor sed, porttitor lorem. Cras porta nunc
                      pharetra lobortis hendrerit. Fusce interdum augue nibh,
                      quis porta urna maximus eget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-agreement"
              role="tabpanel"
              aria-labelledby="pills-agreement-tab"
            >
              <div className="card border border-light shadow shadow-sm rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center d-none d-lg-block">
                      <Image
                        // loader={myLoader}
                        src={agreement}
                        alt="Picture of create"
                        responsive="true"
                      />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <h1 className="display-5">Συμφωνία</h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean eleifend a sapien imperdiet placerat. Sed tincidunt
                      at ex non fermentum. Fusce laoreet ornare arcu eget
                      hendrerit. Morbi tempor mi in egestas dapibus. Integer
                      auctor ipsum quam, sit amet pretium velit elementum sed.
                      Sed eget commodo turpis, at eleifend metus. Morbi nisl
                      orci, viverra nec gravida eget, semper non mauris.
                      Praesent imperdiet congue lectus, non ornare dui interdum
                      eu. Aliquam eleifend blandit tortor in rutrum. Sed congue
                      blandit scelerisque. Nam consequat leo bibendum,
                      sollicitudin tortor sed, porttitor lorem. Cras porta nunc
                      pharetra lobortis hendrerit. Fusce interdum augue nibh,
                      quis porta urna maximus eget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ul
            className="nav nav-pills my-3 justify-content-evenly"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item py-2" role="presentation">
              <button
                className="active btn-primary btn-small rounded-pill"
                id="pills-create-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-create"
                type="button"
                role="tab"
                aria-controls="pills-create"
                aria-selected="true"
                onClick={() => setWidth(0)}
              >
                Δημιουργία αιτήματος
              </button>
            </li>
            <li className="nav-item py-2" role="presentation">
              <button
                className="btn-primary btn-small rounded-pill"
                id="pills-match-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-match"
                type="button"
                role="tab"
                aria-controls="pills-match"
                aria-selected="false"
                onClick={() => setWidth(25)}
              >
                Αντιστοίχιση
              </button>
            </li>
            <li className="nav-item py-2" role="presentation">
              <button
                className="btn-primary btn-small rounded-pill"
                id="pills-choice-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-choice"
                type="button"
                role="tab"
                aria-controls="pills-choice"
                aria-selected="false"
                onClick={() => setWidth(50)}
              >
                Επιλογή
              </button>
            </li>
            <li className="nav-item py-2" role="presentation">
              <button
                className="btn-primary btn-small rounded-pill"
                id="pills-communication-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-communication"
                type="button"
                role="tab"
                aria-controls="pills-communication"
                aria-selected="false"
                onClick={() => setWidth(75)}
              >
                Επικοινωνία
              </button>
            </li>
            <li className="nav-item py-2" role="presentation">
              <button
                className="btn-primary btn-small rounded-pill"
                id="pills-agreement-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-agreement"
                type="button"
                role="tab"
                aria-controls="pills-agreement"
                aria-selected="false"
                onClick={() => setWidth(100)}
              >
                Συμφωνία
              </button>
            </li>
          </ul>
        </div>
        <div className="row p-2 justify-content-center">
          <div className="col-10">
            <div className="progress" style={{ height: "2px" }}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={getWidth(width)}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HowItWorks;
