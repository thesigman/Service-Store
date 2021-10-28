import React, { Component } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OfferForm = (props) => {
  const { openModal, closeModal, handleOffer } = props;
  const [startDate, setStartDate] = useState(new Date());

  const summary = React.createRef();
  const description = React.createRef();
  const cost = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let offer = {
      Summary: summary.current.value,
      Description: description.current.value,
      DateOfDelivery: startDate,
      Cost: cost.current.value,
      Status: "open",
      Created: new Date(),
    };
    summary.current.value = "";
    description.current.value = "";
    cost.current.value = "";
    // let sum = summary.current.value;
    // let desc = description.current.value;
    // let date = startDate;
    // let c = cost.current.value;

    handleOffer(offer);

    // console.log("submitted", offer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="summary"
          aria-describedby="summaryHelp"
          placeholder="summary"
          id="summary"
          ref={summary}
          autoFocus
          required
        />
        <label htmlFor="summary" className="form-label">
          Σύνοψη πρότασης
        </label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Offer"
          id="offer"
          style={{ height: "20vh" }}
          ref={description}
          required
        ></textarea>
        <label htmlFor="offer">Αναλυτική Περιγραφή Πρότασης</label>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-floating">
            {/* <input
                type="text"
                className="form-control"
                id="endDate"
                className="form-control"
                placeholder="15/12/2021"
                required
              /> */}
            {/* <div className="col">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-primary"
              ></FontAwesomeIcon>
            </div> */}
            <div className="align-self-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className=""
              />
            </div>

            {/* <label className="form-check-label" htmlFor="endDate">
                Ημερομηνία παράδοσης
              </label> */}
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="cost"
              placeholder="1500"
              ref={cost}
              required
            />
            <label htmlFor="cost">Κόστος</label>
          </div>
        </div>
      </div>

      <div className="row m-2 justify-content-between">
        <button className="btn bg-warning" onClick={closeModal}>
          Ακύρωση
        </button>
        <button className="btn bg-success" type="submit">
          Κατάθεση Πρότασης
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
