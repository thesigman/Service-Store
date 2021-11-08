import { React } from "react";
import { useState, useEffect } from "react";
import styles from "./card.module.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import moment from "moment";

const ProvidersCard = (props) => {
  const { index, provider } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [offer, setOffer] = useState(props.offer);
  moment.locale("el");
  useEffect(() => {
    setOffer(props.offer);
  }, [props.offer]);
  // useEffect(() => {
  //   setOffer(o);
  // });
  console.log("offer", offer);
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
  // const style = {
  //   transform: `rotate(0)`,
  // };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function getCardClass() {
    // const { rate } = this.state.highRate;

    let classes = "";
    classes +=
      provider.rate > 4
        ? " bg-primary140 m-2 text-light border border-3 bd-secondary"
        : " m-2";
    return classes;
  }

  function getPremiumUser() {
    if (provider.rate > 4) {
      return (
        <div className="col-2 m-2">
          <span className="badge badge-success">Premium User</span>
        </div>
      );
    }
  }
  function getAcceptButton() {
    // const { rate } = this.state.highRate;
    // <button
    //   className="btn btn-small bg-success m-2 disabled"
    //   onClick={() => props.acceptOffer(offer)}
    // >
    //   Αποδοχή πρότασης
    // </button>;
    if (offer.Status == "rejected") {
      return (
        <button
          className="btn btn-small bg-success m-2 disabled"
          //onClick={() => props.acceptOffer(offer)}
        >
          Αποδοχή πρότασης
        </button>
      );
    } else if (offer.Status == "accepted") {
      return (
        <button className="btn btn-small bg-primary m-2 disabled">
          Επιλεγμένη πρόταση
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-small bg-success m-2"
          onClick={() => props.acceptOffer(offer)}
        >
          Αποδοχή πρότασης
        </button>
      );
    }
  }
  function getRejectButton() {
    // const { rate } = this.state.highRate;
    <button className="btn bg-danger" onClick={closeModal}>
      Απόρριψη
    </button>;
    if (offer.Status == "rejected") {
      return <button className="btn bg-danger disabled">Απόρριψη</button>;
    } else if (offer.Status == "accepted") {
      return <button className="btn bg-danger disabled">Απόρριψη</button>;
    } else {
      return (
        <button
          className="btn bg-danger"
          onClick={() => (closeModal, props.rejectOffer(offer))}
        >
          Απόρριψη
        </button>
      );
    }
  }
  return (
    <>
      <div className="col-sm-6">
        <div className={[styles.card, getCardClass()].join(" ")}>
          <div className="p-2">
            <div className="row">
              {/* <h5>Provider #{index+1}</h5>*/}
              <h5>Provider</h5>
              <span>{provider.NameOfCompany}</span>
            </div>
            <div className="card-body">
              <div className="row justify-content-start">
                {/* <div className="col-2 m-2"> */}
                {/* <span className="badge badge-success">Premium User</span> */}
                {getPremiumUser()}
                {/* </div> */}
                <div className="col-2 m-2">
                  <span className="badge badge-primary">Web Expert</span>
                </div>
              </div>
              <div className="row justify-content-center">
                <p>
                  {/* Providers info and reply Name of Company:
                  {provider.NameOfCompany}
                  AFM: {provider.AFM}
                  Phone: {provider.Phone}
                  Type of Requested Jobs: {provider.TypeOfRequestedJobs}{" "} */}
                  {offer.Summary}
                  {/* {offer.Status} */}
                </p>
              </div>
            </div>
            <div className="row align-items-center m-2">
              {/* <div className="col-sm-2">
          <button className=" btn btn-icon">
            <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
          </button>
        </div>
        <div className="col-sm-10">
          <button className="btn btn-primary">Έναρξη συζήτησης</button>
        </div> */}
              <button className="btn btn-icon" onClick={openModal}>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </button>
              {getAcceptButton()}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        offer={offer}
      >
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>Project title </h5>
              <span>{provider.NameOfCompany}</span>
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="row justify-content-end">Χρόνος που απομένει</div>
          {/* <OfferForm
   openModal={openModal}
   closeModal={closeModal}
   handleOffer={handleOffer}
 /> */}
          <p>
            <strong>Αναλυτική Περιγραφή: </strong>
            {offer.Description}
          </p>
          {/* <p>
            <strong>Απαραίτητες υπηρεσίες:</strong>
            {offer.domain}
          </p> */}
          <p>
            <strong>Ημερομηνία Παράδοσης: </strong>
            {moment(offer.DateOfDelivery).format("LLLL")}
          </p>
          <p>
            <strong>Προϋπολογισμός: </strong>
            {offer.Cost} €
          </p>

          <div className="row align-self-end justify-content-between m-2">
            {getRejectButton()}

            {/* <p>DATE OF {props.offer.Description}</p> */}
            <button className="btn bg-warning">Επανεξέταση</button>
            {/* <button className="btn bg-success">
              Οριστική αποδοχή πρότασης
            </button> */}
            {getAcceptButton()}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProvidersCard;
