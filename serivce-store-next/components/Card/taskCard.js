import styles from "./card.module.scss";
import Card from "./card.js";
import MessageCard from "./messageCard";
import { useEffect, useLayoutEffect, useState } from "react";

export default function taskCard(props) {
  const [cards, setItems] = useState([]);
  const [cardInfo, setInfo] = useState([]);

  useEffect(() => {
    let items = [];
    //Αναπαριστά την πληροφορία που θα λαμβάναμε απο το api
    let cardValue = [
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
      {
        name: "Οργάνωση Roadmap",
        description: "Πρέπει να γίνει οργάνωση του RoadMap",
      },
    ];
    for (let index = 0; index < props.counter; index++) {
      items = [
        ...items,
        <Card
          key={index}
          name={cardValue[index]["name"]}
          description={cardValue[index]["description"]}
        ></Card>,
      ];
    }
    setItems(items);
  });

  return (
    <div className={[props.cardBg, "m-2", "p-2", styles.taskCard].join(" ")}>
      <h3 className="text-white">{props.title}</h3>
      <div>{cards}</div>
    </div>
  );
}
