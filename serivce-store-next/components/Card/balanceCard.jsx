import { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./card.module.scss";
import { faPencilAlt, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceForm from "../Forms/balanceForm";

const BalanceCard = (props) => {
  // let balance = 200;
  const { handleDeposit, balance } = props;
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
      width: "50%",
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

  return (
    <>
      <div className={[styles.card, "m-2"].join(" ")}>
        <div className="p-2">
          <div className="row">
            <h5>Balance {"&"} Accounts</h5>
            <small>
              Το συνολικό υπόλοιπό σας και οι συνδεδεμένοι λογαριασμοί
            </small>
          </div>

          <div className="row">
            <p>
              <strong>Διαθέσιμο υπόλοιπο: </strong> {balance.toFixed(2)} Euro
            </p>
          </div>
          {/* <div className="row">
          <p>
            <strong>Διαθέσιμοι λογαριασμοί</strong>
          </p>
          <hr />
        </div> */}
          <div className="row">
            <div className="col">
              <table className="table caption-top">
                <caption>
                  <strong>Διαθέσιμοι λογαριασμοί</strong>
                  <hr />
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Α/Α</th>
                    <th scope="col">Αναγνωριστικό λογαριασμού</th>
                    <th scope="col">Τύπος</th>
                    <th scope="col">Λεπτομέριες</th>
                    <th scope="col justify-selft-end">Ενέργειες</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Εταιρικό Paypal</td>
                    <td>Paypal</td>
                    <td>companymail@companyname.gr</td>
                    <td className="d-flex justify-content-start">
                      <button className="btn btn-icon m-1">
                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                      </button>
                      <button className="btn btn-icon m-1">
                        <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Κάρτα Εξόδων Εταιρίας προς τρίτους</td>
                    <td>Credit Card</td>
                    <td>**** 8989</td>
                    <td className="d-flex justify-content-start">
                      <button className="btn btn-icon m-1">
                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                      </button>
                      <button className="btn btn-icon m-1">
                        <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-between m-2">
            <button className="btn btn-light text-primary">
              Προσθήκη μεθόδου πληρωμής
            </button>
            <button className="btn bg-primary" onClick={openModal}>
              Επέκταση Υπολοίπου
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="row justify-content-center text-center">
            <h2>Επέκταση υπολοίπου</h2>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-7">
              <p>
                Επιλέξτε έναν από τους διαθέσιμους τρόπους πληρωμής που
                βρίσκονται διαθέσιμοι στον λογαριασμό σας, καθώς και το υπόλοιπο
                που θέλετε να προστεθεί στο υπόλοιπό σας.
              </p>
            </div>
          </div>
          <BalanceForm
            openModal={openModal}
            closeModal={closeModal}
            handleDeposit={handleDeposit}
          />
        </div>
      </Modal>
    </>
  );
};

export default BalanceCard;
