import { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import Modal from "react-modal";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import OfferForm from "../Forms/offerForm";

const AnonymousChatTitle = (props) => {
  console.log(props);
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
  const threeDaysdelay = 259200000;
  // const delay = 1000000;
  const twoDaysdelay = 172800000;

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
    //ean exoune perasei oi duo arxikes meres kai den exoun perasei 2 + 1 meres tote emfanise to kata8esh protashs
    if (completed && Date.now() < created + threeDaysdelay + twoDaysdelay) {
      // Render a completed state
      return <Completionist htmlFor={index} />;
    }
    //ean exoun perasei oi treis meres mhn emfaniseis tipota
    else if (Date.now() > created + threeDaysdelay + twoDaysdelay) {
      return "";
    } else {
      //alliws Render a countdown
      return (
        <h3>
          Χρόνος που απομένει:{" "}
          <strong>
            {days} μέρες {zeroPad(hours, 2)}ώρες {zeroPad(minutes, 2)}λεπτά{" "}
            {zeroPad(seconds, 2)}δευτερόλεπτα
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
        {props.user.role === "provider" && (
          <>
            <div className="col align-self-center">
              {props.user.id === props.question?.senderId && (
                <>
                  <Toggle
                    id={(index + 1).toString()}
                    checked={answered}
                    value="yes"
                    onChange={handleAnswered}
                  />
                  <label htmlFor={(index + 1).toString()}>απαντήθηκε</label>
                </>
              )}
            </div>
            <div className="col-5 align-self-center">
              <Countdown
                date={created + threeDaysdelay}
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
              <h5>{props.projectName}</h5>
              {/* <span>SoftBiz</span> */}
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          {/* <div className="row justify-content-end">Χρόνος που απομένει</div> */}
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
