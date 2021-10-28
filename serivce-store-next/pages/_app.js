import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import React from 'react'
import "react-edit-text/dist/index.css";
import Cookie from "js-cookie";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [raw_user, setRawUser] = useState({})

  // Σε περίπτωση που γίνει hard refresh ελέγχουμμε την κατάσταση που υπάρχει στο session Storage
  // και φορτώνουμε τον ενεργό χρήστη. 
  useEffect(() => {
    if (isAuthenticated || window.sessionStorage.getItem('application_user') != null) {
      setUser(JSON.parse(window.sessionStorage.getItem('application_user')));
      setRawUser(JSON.parse(window.sessionStorage.getItem('user')))
      setIsAuthenticated(true);
    }

  }, []);

  return <Component user={user} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setRawUser={setRawUser} setUser={setUser} {...pageProps} />
}

export default MyApp;
