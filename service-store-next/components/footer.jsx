import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#0e2e46!important" }}
    >
      {/* style={{
        backgroundColor: "#013A6B",
        backgroundImage:
          "-webkit-linear-gradient(150deg, #013A6B 35%, #004E95 35%)",
        // minHeight: "200px",
      }} */}
      {/* <footer className="pt-3 mt-4 text-muted border-top"> */}
      <footer className="text-light">
        <div className="row py-4 text-center d-flex flex-column flex-md-row align-items-center">
          <div className="col-4 p-2">
            <h5 className="py-2 text-uppercase border border-warning">
              ServiceStore
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Αρχική
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/aboutus"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Σχετικά με εμάς
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Link
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-4 p-2">
            <h5 className="py-2 text-uppercase">Σχετικα με</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Κέντρο υποστήριξης
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/faq"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Συχνές ερωτήσεις
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Link
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-4 p-2">
            <h5 className="py-2 text-uppercase">Οροι</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Όροι χρήσης
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/policy"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Πολιτική απορρήτου
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  scroll={false}
                  style={{
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Link
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center py-4">
          <p>&copy; ssdev2 team 2022</p>
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Footer;
