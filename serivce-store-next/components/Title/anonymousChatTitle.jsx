import { useState, useEffect } from "react";
import Modal from "react-modal";
import Countdown from "react-countdown";
import OfferForm from "../Forms/offerForm";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { zeroPad } from "react-countdown";

const AnonymousChatTitle = (props) => {
  function handleChange() {
    console.log("hi Change");
  }
  const {
    index,
    description,
    answered,
    created,
    nextQuestion,
    handleOffer,
    handleAnswered,
  } = props;
  const delay = 172800000;
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
    // borderRadius: "26px",
    // box-shadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
    // {border-radius: "6px"}
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const isCompleted = () => {
    console.log("ended");
  };
  const Completionist = () => (
    <button className="btn bg-success m-2" onClick={openModal}>
      Κατάθεση Πρότασης
    </button>
  );

  // Random component
  // const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist htmlFor={index} />;
    } else {
      // Render a countdown
      return (
        <h3>
          Χρόνος που απομένει:{" "}
          <strong>
            {days} μέρες {zeroPad(hours, 2)}:{zeroPad(minutes, 2)}':
            {zeroPad(seconds, 2)}"
          </strong>
        </h3>
      );
    }
  };

  return (
    <>
      {/* <div className="row justify-content-end">
        <button className="btn bg-success m-2">Κατάθεση Πρότασης</button>
      </div> */}
      <div className="row justify-content-between">
        <div className="col-3">
          <h2>Ερώτηση {index + 1}</h2>
        </div>
        {props.userrole === "provider" && (
          <>
            <div className="col align-self-center">
              <Toggle
                id={(index + 1).toString()}
                checked={answered}
                value="yes"
                onChange={handleAnswered}
              />
              <label htmlFor={(index + 1).toString()}>απαντήθηκε</label>
            </div>
            <div className="col-5 align-self-center">
              <Countdown
                date={created + delay}
                onComplete={isCompleted}
                id={index}
                renderer={renderer}
              ></Countdown>
            </div>
          </>
        )}
      </div>
      <div className="row justify-content-between">
        <div className="col align-self-end">
          <p>{description}</p>
        </div>
        <button className="btn btn-small m-2 bg-secondaryGreenColor">
          Προηγούμενη ερώτηση
        </button>
        <button
          className="btn btn-small m-2 bg-primary"
          onClick={() => nextQuestion(index)}
        >
          Επόμενη ερώτηση
        </button>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>Aquila</h5>
              <span>SoftBiz</span>
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="row justify-content-end">Χρόνος που απομένει</div>
          <OfferForm
            openModal={openModal}
            closeModal={closeModal}
            handleOffer={handleOffer}
          />
        </div>
      </Modal>
    </>
  );
};
export default AnonymousChatTitle;
