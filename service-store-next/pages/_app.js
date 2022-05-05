import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-edit-text/dist/index.css";
import "../styles/globals.scss";
import "moment/locale/el";

function MyApp({ Component, pageProps }) {
  moment.locale("el");
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [raw_user, setRawUser] = useState({});

  // Σε περίπτωση που γίνει hard refresh ελέγχουμμε την κατάσταση που υπάρχει στο session Storage
  // και φορτώνουμε τον ενεργό χρήστη.
  useEffect(() => {
    if (
      isAuthenticated ||
      window.sessionStorage.getItem("application_user") != null
    ) {
      setUser(JSON.parse(window.sessionStorage.getItem("application_user")));
      setRawUser(JSON.parse(window.sessionStorage.getItem("user")));
      setIsAuthenticated(true);
    }
    console.log("rerender");
  }, []);

  return (
    <Component
      user={user}
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
      setRawUser={setRawUser}
      setUser={setUser}
      {...pageProps}
    />
  );
}

export default MyApp;
