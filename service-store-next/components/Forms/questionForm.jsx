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