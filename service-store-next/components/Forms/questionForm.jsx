import { useState } from "react";
import QuestionForm from "../Forms/questionForm";
import Modal from "react-modal";

const Question = (props) => {
  const { sendNewQuestion } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FFFFFF",
      width: "70%",
      height: "auto",
    },

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 1)",
    borderRadius: "26px",
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="btn btn-primary btn-lg m-2 bg-light text-dark"
        onClick={openModal}
      >
        + Δημιουργία νέας ερώτησης
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>Δημιουργία ερωτήσεων για Project Title</h5>
              <span>Customers company name</span>
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <QuestionForm
            openModal={openModal}
            closeModal={closeModal}
            sendNewQuestion={sendNewQuestion}
          />
        </div>
      </Modal>
    </>
  );
};

export default Question;


import React, { Component } from "react";
import { useState } from "react";

const QuestionForm = (props) => {
  const { openModal, closeModal, sendNewQuestion } = props;
  const question = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question.current.value);
    let q = question.current.value;
    question.current.value = "";

    sendNewQuestion(q);

    console.log("submitted", q);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="question"
          aria-describedby="questionHelp"
          placeholder="question"
          id="question"
          ref={question}
          autoFocus
          required
        />
        <label htmlFor="question" className="form-label">
          Πληκτρολογήστε την ερώτησή σας
        </label>
      </div>
      <div className="row m-2 justify-content-between">
        <button className="btn bg-warning" onClick={closeModal}>
          Ακύρωση
        </button>
        <button className="btn bg-primary text-light" type="submit">
          Υποβολή Ερώτησης
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;