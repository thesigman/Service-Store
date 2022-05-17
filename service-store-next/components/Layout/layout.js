import {
  faCog,
  faHandsHelping,
  faHome,
  faPaperPlane,
  faProjectDiagram,
  faSignOutAlt,
  faUserCircle,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminInfo from "../AdminBar/adminInfo";
import logo from "../../public/logo.png";

export default function Layout(props) {
  const [role, setRole] = useState();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setRole(JSON.parse(window.sessionStorage.getItem("application_user")).role);
  }, []);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <div>
        <header className="navbar bg-primary navbar-dark sticky-top flex-md-nowrap p-0 shadow ">
          <Link href={"/home"} passHref>
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 m-2">
              <Image src={logo} alt="logo image" responsive="true" />
            </a>
          </Link>
          <button
            className="navbar-toggler d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </header>
        <div className="containter-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              // className="col-md-2 col-lg-2 d-md-block bg-dark sidebar collapse"
              className="col-md-2 col-lg-2 d-md-block sidebar collapse"
              style={{ background: "#0e2e46" }}
            >
              <div className="menu position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <AdminInfo user={props.user}></AdminInfo>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/home">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                          >
                            Αρχική
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faProjectDiagram}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/questionaire">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                          >
                            Projects
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                  {/* {role == "provider" && (
                    <li className="nav-item">
                      <a className="nav-link">
                        <FontAwesomeIcon
                          icon={faProjectDiagram}
                          className="text-white"
                        ></FontAwesomeIcon>
                        <b className="text-white">
                          {" "}
                          <Link href="/questionaire">
                            <span
                              style={{ cursor: "pointer" }}
                              className="text-white"
                            >
                              Projects
                            </span>
                          </Link>
                        </b>
                      </a>
                    </li>
                  )} */}

                  {role == "client" && (
                    <li className="nav-item">
                      <a className="nav-link">
                        <FontAwesomeIcon
                          icon={faHandsHelping}
                          className="text-white"
                        ></FontAwesomeIcon>
                        <b className="text-white">
                          {" "}
                          <Link href="/providers">
                            <span
                              style={{ cursor: "pointer" }}
                              className="text-white"
                            >
                              Προτάσεις
                            </span>
                          </Link>
                        </b>
                      </a>
                    </li>
                  )}
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/chat">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                          >
                            Εισερχόμενα
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <hr className="bg-white b-2 bd-white" />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/Pprofile">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                          >
                            Προφίλ
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faWallet}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/ewallet">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                          >
                            E-πορτοφόλι
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faCog}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/settings">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                          >
                            Ρυθμίσεις
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-white"
                      ></FontAwesomeIcon>
                      <b className="text-white">
                        {" "}
                        <Link href="/Plogin">
                          <span
                            style={{ cursor: "pointer" }}
                            className="text-white"
                            onClick={() => localStorage.removeItem("domain")}
                          >
                            Αποσύνδεση
                          </span>
                        </Link>
                      </b>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 overflow-auto">
              {props.children}
            </main>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
