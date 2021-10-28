import React, { Component } from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BalanceForm = (props) => {
  const { openModal, closeModal, handleDeposit } = props;

  const balance = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(balance.current.value);
    let ammount = balance.current.value;
    handleDeposit(ammount);
    balance.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row p-2">
        <div className="col-lg-6">
          <div className="row">
            <h3>Επιλογή τρόπου πληρωμής</h3>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Εταιρικό Paypal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              placeholder="&#xf1d8;"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Κάρτα Εξόδων Εταιρείας προς τρίτους
            </label>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            <h3>Ποσό</h3>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="balance"
              aria-describedby="balanceHelp"
              placeholder="balance"
              id="balance"
              ref={balance}
              autoFocus
              required
            />
            <label htmlFor="summary" className="form-label">
              Ποσό που θέλετε να προσθέσετε στον λογαριασμό σας
            </label>
          </div>
        </div>
      </div>

      <div className="row m-2 justify-content-between">
        <button className="btn bg-danger" onClick={closeModal}>
          Ακύρωση
        </button>
        <button className="btn bg-success" type="submit">
          Επέκταση
        </button>
      </div>
    </form>
  );
};

export default BalanceForm;
