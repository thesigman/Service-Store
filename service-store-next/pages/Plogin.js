import { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

import { toast, ToastContainer } from "react-nextjs-toast";

import { loginUser } from "../libs/auth";
import logo from "/public/logo.png";

const PLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.sessionStorage.clear();
    props.setIsAuthenticated(false);
  }, []);

  // Σύνδεση του χρήστη στην εφαρμογή
  const checkUserLogin = async (username, password) => {
    if (await loginUser(username, password, props)) {
      const active_user = JSON.parse(
        window.sessionStorage.getItem("application_user")
      );
      console.log(active_user);
      if (active_user.hasAdminRole) {
        Router.push("/admin/dashboard");
      } else {
        Router.push("/home");
      }
    } else {
      toast.notify("Λάθος Συνδιασμός Ονόματος / Κωδικού Πρόσβασης", {
        duration: 5,
        type: "error",
        title: "Service Store",
      });
    }
  };
  return (
    <>
      <Head>
        <title>Service Store - Σύνδεση</title>
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
        <div className="row p-2">
          <div className="col-xl-8 offset-xl-4">
            <p className="fs-2 text-primary">Σύνδεση</p>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-xl-6 offset-xl-4">
            <div className="card shadow-sm">
              <div className="container-fluid m-2 p-2">
                <div className="row p-2">
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label
                          htmlFor="username"
                          className="form-label fs-6 text-primary"
                        >
                          Όνομα χρήστη
                        </label>
                        <input
                          value={username}
                          onChange={(inputValue) =>
                            setUsername(inputValue.target.value)
                          }
                          type="text"
                          className="form-control"
                          id="username"
                          aria-describedby="emailHelp"
                          placeholder="απίθανο όνομα χρήστη"
                          style={{ height: "3rem !important" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label
                          htmlFor="password"
                          className="form-label fs-6 text-primary"
                        >
                          Κωδικός πρόσβασης
                        </label>
                        <input
                          value={password}
                          onChange={(inputValue) =>
                            setPassword(inputValue.target.value)
                          }
                          type="password"
                          className="form-control"
                          id="password"
                          aria-describedby="passwordHelp"
                          placeholder="μυστικός κωδικός"
                          style={{ height: "3rem !important" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row p-2 justify-content-end">
                    <button
                      onClick={() => checkUserLogin(username, password)}
                      className="btn bg-primary btn-small m-2"
                    >
                      Σύνδεση
                    </button>
                  </div>

                  <div className="row p-2 text-center text-muted">
                    <small className="p-2">
                      Νέος χρήστης;{" "}
                      <Link href="/Pregister">Εγγραφείτε τώρα!</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer align={"left"} position={"bottom"} />
    </>
  );
};

export default PLogin;
