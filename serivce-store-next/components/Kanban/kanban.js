import React from "react";
import Board from 'react-trello';
import styles from '../Card/card.module.scss'
import { useState, useEffect, Children } from "react";


export default function Kanban(props) {
  const [data, setData] = useState({
    lanes: [
      {
        id: 'todo',
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
        cardStyle: cardStyle,
        style: {
          'border-radius': '6px',
          'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          'backgroundColor': '#FFE66D',
          'color': '#666666',
          'font-size': '28px',
          'width': '25%',
        },
        title: 'Completed',
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
        title: 'Done',
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
        title: 'Messages',
        label: '0/0',
        cards: []
      },
    ]
  })
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

  useEffect(() => {
    if (props.view == "Καρτέλες ως πελάτης") {
      setData({
        lanes: [
          {
            id: 'todo',
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
            cardStyle: cardStyle,
            style: {
              'border-radius': '6px',
              'box-shadow': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
              'backgroundColor': '#FFE66D',
              'color': '#666666',
              'font-size': '28px',
              'width': '25%',
            },
            title: 'Completed',
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
            title: 'Done',
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
            title: 'Messages',
            label: '0/0',
            cards: []
          },
        ]
      })
    } else {
      setData({
        lanes: [
          {
            id: 'todo',
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

            cards: [
              { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true },
              { id: 'Card6', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
            ]
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
      })
    }



  }, [props.view])



  return (<Board editable={true} style={{ 'backgroundColor': 'transparent' }} data={data}></Board>);
}