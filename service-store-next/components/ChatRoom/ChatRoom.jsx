import { useState } from "react";
import MessageCard from "../Card/messageCard.jsx";
import styles from "./chatroom.module.scss";

const ChatRoom = (props) => {
  const [message, setMessage] = useState();
  const { messages } = props;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.handleMessage(message);
      event.target.value = "";
      console.log("enter");
    }
  };
  return (
    <div className={[styles.container, " overflow-auto"].join(" ")}>
      {messages ? (
        messages.map((message) => (
          <MessageCard key={message._id} message={message}></MessageCard>
        ))
      ) : (
        <div>Δεν υπάρχουν μηνύματα</div>
      )}
      <div className="row m-2 p-2">
        <input
          className={[styles.faIcon, styles.search].join(" ")}
          type="text"
          placeholder="&#xf1d8; Πληκτρολογείστε το μήνυμά σας εδώ..."
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default ChatRoom;
