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
  const twoDaysdelay = 172800000;

  return (
    <>
      <button
        className="btn btn-primary btn-lg m-2 bg-light text-dark"
        onClick={openModal}
        disabled={Date.now() > props.created + twoDaysdelay}
      >
        + Δημιουργία νέας ερώτησης
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>Δημιουργία ερωτήσεων για {props.projectName}</h5>
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
