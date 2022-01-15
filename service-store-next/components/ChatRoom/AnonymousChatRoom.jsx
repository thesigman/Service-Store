import { useState } from "react";
import MessageCard from "../Card/messageCard.jsx";
import styles from "./chatroom.module.scss";

const AnonymousChatRoom = (props) => {
  const [message, setMessage] = useState();
  const { messages } = props;
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.handleMessage(message);
      event.target.value = "";
      console.log("enter");
    }
  };
  const twoDaysdelay = 172800000; //2 meres gia ton provider
  const threeDaysdelay = 259200000; // 2+1=3 meres gia ton client

  return (
    <div className={[styles.container, " overflow-auto"].join(" ")}>
      {messages.map((message) => (
        <MessageCard
          key={messages.indexOf(message)}
          message={message}
          index={messages.indexOf(message)}
        ></MessageCard>
      ))}

      <div className="row m-2 p-2">
        <input
          className={[styles.faIcon, styles.search].join(" ")}
          type="text"
          placeholder="&#xf1d8; Πληκτρολογείστε το μήνυμά σας εδώ..."
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
          disabled={
            (props.userrole == "provider" &&
              Date.now() > props.created + twoDaysdelay) ||
            (props.userrole == "client" &&
              Date.now() > props.created + threeDaysdelay)
          }
        ></input>
      </div>
    </div>
  );
};

export default AnonymousChatRoom;
