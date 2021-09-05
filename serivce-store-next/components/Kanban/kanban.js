import React from "react";
import Board from 'react-trello';
import styles from '../Card/card.module.scss'


export default function Kanban(props) {
  // Κατασκευή του board με βάση τα δεδομένα που θέλουμε να φαίνονται
  let taskCard = {
    'border-radius': '6px',
    'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
  }
  const data = {
    lanes: [
      {
        id: 'todo',
        title: 'To Do',
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor' : '#607890',
          'color' : 'white',
          'font-size' : '28px',
          'width' : '25%',
        },
        cards: [
          { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true },
          { id: 'Card3', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
          { id: 'Card4', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
          { id: 'Card5', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
          { id: 'Card6', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        ]
      },
      {
        id: 'inprogress',
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor' : '#FFE66D',
          'color' : '#666666',
          'font-size' : '28px',
          'width' : '25%',
        },
        title: 'Completed',
        cards: []
      },
      {
        id: 'done',
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor' : '#5FA052',
          'color' : 'white',
          'font-size' : '28px',
          'width' : '25%',
        },
        title: 'Done',
        cards: []
      },
      {
        id: 'messages',
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor' : '#666666',
          'color' : 'white',
          'font-size' : '58px'
        },
        title: 'Messages',
        label: '0/0',
        cards: []
      },
    ]
  }


  return (<Board style={{ 'backgroundColor': 'transparent' }} data={data}></Board>);
}