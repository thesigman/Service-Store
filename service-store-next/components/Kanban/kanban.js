import axios from 'axios';
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Board from 'react-trello';

export default function Kanban(props) {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalStatus] = useState(false);
  const [activeRequest, setActiveRequest] = useState({});

  const modalStyle = {
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
  }

  // Κατασκευή του board με βάση τα δεδομένα που θέλουμε να φαίνονται
  let taskCard = {
    'border-radius': '6px',
    'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
  }
  let cardStyle = {
    'background-color': ' #ffff',
    'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    'border-radius': '6px',
  }

  // Φόρτωστη των request που έχει πραγματοποιήσει ο χρήσητς ως πελάτης
  const active_user = JSON.parse(window.sessionStorage.getItem("application_user"));

  const data2 = {
    lanes: [
      {
        id: (active_user.role == "provider") ? 'Provider Requests' : 'Requests',
        title: (active_user.role == "provider") ? 'Πρότάσεις που σας αφορούν' : 'Εκκρεμείς Προτάσεις',
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#607890',
          'color': 'white',
          'font-size': '28px',
          'width': '25%',
        },
        cards: data,
        onCardClick(cardId, metadata, laneId) {
          // Με το click μιας κάρτας ανοίγει ένα modal με μερικές πληορφορίες 
          // για το έργο που πρόκειται να μπεί στο chat

          // Εύρεση του αντικειμένου που αφορά το event και φόρτωση του
          // στο acticeRequest για την εμφάνιση του στο modal
          const selectedRequest = data.filter(obj => {
            return obj.id === cardId;
          });

          // Ενημέρωση του state
          setActiveRequest(selectedRequest[0]);
          setModalStatus(true);
        }
      },
      {
        id: 'inprogress',
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#FFE66D',
          'color': '#666666',
          'font-size': '28px',
          'width': '25%',
        },
        title: 'Σε εκρεμμότητα',
        cards: []
      },
      {
        id: 'done',
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#5FA052',
          'color': 'white',
          'font-size': '28px',
          'width': '25%',
        },
        title: 'Ολοκληρωμένες',
        cards: []
      },
      {
        id: 'messages',
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#666666',
          'color': 'white',
          'font-size': '58px'
        },
        title: 'Μηνύματα',
        label: '0/0',
        cards: [
          { id: 'Card6', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
          { id: 'Card7', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
          { id: 'Card8', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        ]
      },
    ]
  }

  useEffect(async () => {

    if (active_user == null) { return; }
    const response = await axios.post(`http://islab-thesis.aegean.gr:82/trans/api/requests/uid`, { uid: active_user.id, role: active_user.role });

    // Κατασεκευή των καρτών 
    let cards = [];


    response.data.forEach(request => {

      cards.push({
        'id': request._id,
        'title': request.name,
        'description': request.service_1,
        'label': request.created,
      });
    });
    setData(cards);

  }, [])

  /**
   * Κλείνει το ενεργό modal 
   */
  const closeModal = () => {
    setModalStatus(false);
  }

  /**
   * Αποστέλλει το ενεργό request 
   * στο anonymoys chat 
   */
  const navigateToAnonymoysChat = () => {
    Router.push({ pathname: '/anonymouschat', query: { requestId: activeRequest.id, name: activeRequest.title } });
  }

  return (
    <>
      <Board style={{ 'backgroundColor': 'transparent' }} data={data2}></Board>
      <Modal isOpen={modalIsOpen} style={modalStyle} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>{activeRequest.title}</h5>
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-2">
            <strong>Απαραίτητες Υπηρεσίες : </strong>
          </div>
          {activeRequest.description}
        </div>
        <div className="row p-2">
          <div className="col-2">
            <strong> Ημερομηνία Πρότασης : </strong>
          </div>
          {activeRequest.label}
        </div>
        <div className="d-flex float-end">
          <button onClick={navigateToAnonymoysChat} className=" mt-2 btn bg-primary btn-small">Εμφάνιση Ερωτήσεων</button>
        </div>
      </Modal>
    </>
  );
}
