import React from "react";
import Board from 'react-trello';
import styles from '../Card/card.module.scss'
import axios from 'axios';
import Router from "next/router";
import { useState, useEffect, Children } from "react";


export default function Kanban(props) {
  const [data, setData] = useState([]);

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

  const data2 = {
    lanes: [
      {
        id: 'Requests',
        title: 'To Do',
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
          Router.push({pathname : '/anonymouschat', query: {requestId: cardId}});
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

    // Φόρτωστη των request που έχει πραγματοποιήσει ο χρήσητς ως πελάτης
    const active_user = JSON.parse(window.sessionStorage.getItem("application_user"));
    let endpoint = "cid";
    if (active_user.role == "provider") { endpoint = "id" }
    if (active_user == null) { return; }
    const response = await axios.post('http://islab-thesis.aegean.gr:82/trans/api/requests/cid', { cid: active_user.id });

    // Κατασεκευή των καρτών 
    let cards = [];
    response.data.forEach(request => {
      cards.push({
        'id': request._id,
        'title': request.domain,
        'description': request.service_1,
        'label': request.status,
      });
    });
    setData(cards);

  }, [])



  return (<Board style={{ 'backgroundColor': 'transparent' }} data={data2}></Board>);
}