import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import React from 'react'
import Cookie from "js-cookie";
import { checkAuthStatus } from '../libs/auth'
import axios from '../pages/api/axiosConfiguration';
import Router from 'next/router';
function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(async () => {

    setToken(Cookie.get("token"));
    if (token) {
      /**
       * Δέχεται ένα token και ελέγχει την κατάσταση του στον server.
       * Σε περίπτωση που το token δεν ειναι valid ο χρήστης επιστρέφεται στο Login
       * @param {string} token
       */
       let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("thee");
      axios.get("/users/me",config).then(
        (response) => {
          if(response.status != 200) {
            Cookie.remove("token");
            setUser([]);
            Router.push('/login')
            return null;
          }
          const user = response.userprovider;
          this.setUser(user);
        }
      );
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
