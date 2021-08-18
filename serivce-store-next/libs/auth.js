import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "../pages/api/axiosConfiguration";

/**
 * Υπεύθνο για την σύνδεση του χρήστη στην εφαρμογή.
 *
 * Αποστέλει τα credentials στο api και για κάθε επιτυχημένο Login
 *  => Αποθηκεύεται το  cookie
 *  => Αποθηκεύονται στο Context οι κοινές πληροφορίες μεταξύ των χρηστών.
 *  => Γίνεται Redirect στην αντίστοιχη σελίδα που έχουμε ορίσει.
 *
 * @param {string} username
 * @param {string} password
 */
export const loginUser = (username, password, props) => {
  const credentials = {
    identifier: username,
    password: password,
  };
  axios
    .post("/auth/local", credentials)
    .then(function (response) {
      if (response.status == 200) {
        // Set the authentication token as cookie on browser
        Cookie.set("token", response.data.jwt);
        Router.push("/home");
        const user = response.data.user;
        props.setUser(user)
        props.setIsAuthenticated(true);
      }
    })
    .catch(function (error) {
      return "Invalid Username or Password";
    })
    .then(function () {
      // always executed
    });
};
