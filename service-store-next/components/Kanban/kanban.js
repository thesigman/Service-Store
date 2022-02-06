import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from 'react-nextjs-toast';
import StarRatingComponent from 'react-star-rating-component';
import Board from 'react-trello';
import { instance } from '../../pages/api/axiosConfiguration';


export default function Kanban(props) {
  const [data, setData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  const [totalMessagesNum, setTotalMessagesNum] = useState(0)
  const [modalIsOpen, setModalStatus] = useState(false);
  const [rateModalIsOpen, setRateModalIsOpen] = useState(false);
  const [activeRequest, setActiveRequest] = useState({});

  // Για το rating μπορεί να αλλάξουν τα factor
  const [factor1, setfactor1] = useState();
  const [factor2, setfactor2] = useState();
  const [factor3, setfactor3] = useState();
  

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FFFFFF",
      width: "60%",
    },
  }

  // Φόρτωστη των request που έχει πραγματοποιήσει ο χρήσητς ως πελάτης
  const active_user = JSON.parse(window.sessionStorage.getItem("application_user"));

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

  /**
   * Κατασκευή του βασικού σκελετού του canban
   */
  const kanbanData = {
    lanes: [
      {
        id: (active_user.role == "provider") ? 'Provider Requests' : 'Requests',
        title: (active_user.role == "provider") ? 'Αιτήματα που σας αφορούν' : 'Εκκρεμή Αιτήματα',
        label: String(data.length),
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#1c5a8a',
          'color': 'white',
          'font-size': '28px',
          'width': '25%',
          'max-height': '600px'
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

          console.log(selectedRequest[0]);

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
          'max-height': '600px'
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
          'backgroundColor': '#1f6100',
          'color': 'white',
          'font-size': '28px',
          'width': '25%',
          'max-height': '600px'
        },
        title: 'Ολοκληρωμένα',
        cards: [
          {
            'id': 100,
            'title': 'Κατασκευή WebSite',
            'description': 'Υπηρεσια Marketing',
            'label': 'test'
          }
        ],
        onCardClick(cardId, metadata, labeId) {
          // Φόρτωση του modal για το rating 
          setRateModalIsOpen(true);
          setActiveRequest(cardId);
        }
      },

      {
        id: 'messages',
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#343A40',
          'color': 'white',
          'font-size': '58px',
          'max-height': '600px'
        },
        title: 'Μηνύματα',
        label: `${messageData.length} / ${totalMessagesNum}`,
        cards: messageData
      },
    ]
  }

  useEffect(async () => {

    if (active_user == null) { return; }
    const response = await axios.post(`http://islab-thesis.aegean.gr:82/trans/api/requests/uid`, { uid: active_user.id, role: active_user.role });
    const responseMessages = await axios.post(`http://islab-thesis.aegean.gr:82/trans/api/messages`, { id: active_user.id });
    setTotalMessagesNum(responseMessages.data.length);
    // Κατασεκευή των καρτών 
    let cards = [];

    let messageCards = [];

    for (const chat of responseMessages.data) {
      // Απο τα μηνύματα που φορτώνουμε παίρνουμε το τελευταίο μήνυμα
      // εαν το μήνυμα είναι απο διαφορετικό χρήστη απο τον συνδεμένο, τότε το εμφανίζουμε στις κάρτες
      const lastMessage = chat.at(-1);
      if (typeof lastMessage != 'undefined' && lastMessage.senderId != active_user.id) {
        const sender = await instance.get(`/providers/${lastMessage.senderId}`);
        messageCards.push({
          'id': lastMessage._id,
          'title': sender.data.NameOfCompany,
          'description': lastMessage.message,
          'label': moment(lastMessage.created).fromNow()
        })
      }
    }
    setMessageData(messageCards);

    response.data.forEach(request => {
      cards.push({
        'id': request._id,
        'title': request.name.substr(0, 12) + '...',
        'description': request.service_1.substr(request.service_1.indexOf(' ') +1 ),
        'label': (request.created) ? moment(request.created).fromNow() : '',
        'created': request.created,
        'fullName': request.name
      });
    });
    setData(cards);

  }, [])

  /**
   * Κλείνει το ενεργό modal 
   */
  const closeModal = () => {
    setModalStatus(false);
    setRateModalIsOpen(false);
  }

  // Ενημερώνει τα αποτελέσματα των stars
  const onStarClick = (nextValue, prevValue, name) => {
    switch (name) {
      case 'factor1':
        setfactor1(nextValue);
        break;
    
      case 'factor2':
        setfactor2(nextValue);
        break;
    
      case 'factor3':
        setfactor3(nextValue);
        break;
    }
  }

  const rateJob = (id) => {
    const rate = {
      factor1 : factor1,
      factor2 : factor2,
      factor3 : factor3,
      id : id
    }
    
    // Πρέπει να μπεί το endpoint για την αποστολή των δεδομένων
    console.log(rate);

  }

  const newRating = () => {
    rateJob(activeRequest);
    setRateModalIsOpen(false);
    toast.notify('Η αξιολόγηση υποβλήθηκε επιτυχώς', { duration: 5, type: "success", title: "Service Store" });

    
  }

  /**
   * Αποστέλλει το ενεργό request 
   * στο anonymoys chat 
   */
  const navigateToAnonymoysChat = () => {
    Router.push({ pathname: '/anonymouschat', query: { requestId: activeRequest.id, name: activeRequest.fullName, created: activeRequest.created } });
  }

  return (
    <>
      <Board style={{ 'backgroundColor': 'transparent' }} data={kanbanData}></Board>
      <ToastContainer align={"left"} position={"bottom"} />

      <Modal isOpen={rateModalIsOpen} style={modalStyle} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>Αξιολογήστε την εμπειρία σας</h5>
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>
        </div>
        <div className="row p-2">
          <div className="col">
            <label> Η κριτική σας είναι πολύ σημαντική για την εξέλιξη της πλατφόρμας </label>
          </div>
        </div>
        <div className="row p-2 col-md-8 col-12">
          <div className='col-md-4 col-12'>
            <div className='row'>
              <strong>Παράγοντας 1</strong>
            </div>
            <StarRatingComponent
              name="factor1"
              starCount={5}
              emptyStarColor={'#F0F0F0'}
              renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
              starColor={'#FFD579'}
              onStarClick={onStarClick.bind(this)}
            />
          </div>
          <div className='col-md-4 col-12'>
            <div className='row'>
              <strong>Παράγοντας 2</strong>
            </div>
            <StarRatingComponent
              name="factor2"
              starCount={5}
              emptyStarColor={'#F0F0F0'}
              renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
              starColor={'#FFD579'}
              onStarClick={onStarClick.bind(this)}
            />
          </div>
          <div className='col-md-4 col-12'>
            <div className='row'>
              <strong>Παράγοντας 3</strong>
            </div>
            <StarRatingComponent
              name="factor3"
              starCount={5}
              emptyStarColor={'#F0F0F0'}
              renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
              starColor={'#FFD579'}
              onStarClick={onStarClick.bind(this)}
            />
          </div>
        </div>
        <div className='row p-2 col-12'>
          <label>Συναντήσατε κάποια δυσκολια ή έχετε κάποια πρόταση για βελτίωση (προαιρετικό) ?</label>
          <input type='text' className='mt-2' placeholder='Αναλύστε τις προτάσεις σας εδώ'></input>
        </div>
        <div className="d-flex float-end">
          <button onClick={newRating} className=" mt-2 btn bg-success btn-small"> Υποβολή Αξιολόγησης</button>
        </div>
      </Modal>

      <Modal isOpen={modalIsOpen} style={modalStyle} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>{activeRequest.fullName}</h5>
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
            <strong> Ημερομηνία Δημιουργίας : </strong>
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
