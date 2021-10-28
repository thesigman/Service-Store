import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import {instance} from "../pages/api/axiosConfiguration";

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

  instance
    .post("/auth/local", credentials)
    .then(function (response) {
      if (response.status == 200) {
        // Set the authentication token as cookie on browser
        Cookie.set("token", response.data.jwt);
        try {

          // Parse των πληροφοριών του χρήστη σε μια απλούστερη μορφή ώστε να αποθηκευτούν τα στοιχεία που θέλουμε 
          const application_user = {
            "id" : (typeof response.data.user.userprovider == "undefined") ? response.data.user.client.id :  response.data.user.userprovider.id,
            "email" : response.data.user.email,
            "username" : response.data.user.username,
            "role" : (typeof response.data.user.userprovider == "undefined") ? "client" : "provider"
          }
  
          // Αποθήκευση των πληροφοριών του χρήστη στο κεντρικό state της εφαρμογής
          props.setUser(application_user)
          props.setRawUser(response.data.user);

          // Αποθήκευση των πληροφοριών του χρήστη στο Session Storage
          window.sessionStorage.setItem('user', JSON.stringify(response.data.user));
          window.sessionStorage.setItem('application_user', JSON.stringify(application_user));

        } catch (error) {
          console.log(error)
        }
        props.setIsAuthenticated(true);
        Router.push("/home");
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
