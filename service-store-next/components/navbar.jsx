import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/public/logo.png";

const Navbar = ({ page, background }) => {
  return page == "landingpage" ? (
    <nav
      className="navbar navbar-expand-lg nav-fill bg-dark p-2"
      style={{ backgroundColor: "#0e2e46!important" }}
    >
      <div className="container-fluid">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" responsive="true" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon
            className="navbar-toggler-icon text-light"
            icon={faBars}
          />
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
                Πώς λειτουργεί
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
            <Link href="/login" scroll={false}>
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
                Σύνδεση
              </a>
            </Link>
            <Link href="/register" scroll={false}>
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
                Εγγραφή
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav
      // className="navbar navbar-expand-lg navbar-dark bg-dark p-2"
      className={`navbar navbar-expand-lg ${background} nav-fill`}
      // style={{ backgroundColor: "#0e2e46!important" }}
    >
      <div className="container-fluid">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" responsive="true" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span
                className="navbar-toggler-icon border border-dark"
                style={{ zIndex: 3 }}
              > */}
          <FontAwesomeIcon
            className="navbar-toggler-icon text-light"
            icon={faBars}
          />
          {/* </span> */}
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link href="/login" scroll={false}>
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
                Σύνδεση
              </a>
            </Link>
            <Link href="/register" scroll={false}>
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
                Εγγραφή
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
