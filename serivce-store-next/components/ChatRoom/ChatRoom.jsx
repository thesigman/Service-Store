import { Component, useState, useEffect } from "react";
import MessageCard from "../Card/messageCard";
import styles from "./chatroom.module.scss";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  // useEffect(() => {}, [props.messages]);

  return (
    <div className={[styles.container, " overflow-auto"].join(" ")}>
      {messages.map((message) => (
        <MessageCard
          key={message._id}
          message={message}
          //index={messages.indexOf(message)}
        ></MessageCard>
      ))}
      <div className="row m-2 p-2">
        {/* <button type="button" className={[styles.btnSmall, "m-1"].join(" ")}> */}
        <div className="col-2">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-primary"
          ></FontAwesomeIcon>
        </div>
        {/* Τα πιο πρόσφατα */}
        {/* </button> */}
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

// class ChatRoom extends Component {
//   state = {
//     messages: [],
//   };
//   constructor(props) {
//     super(props);
//     // this.state.providers = this.props.providers;
//   }
//   componentDidMount() {
//     this.setState({ messages: this.props.messages });
//   }
//   render() {
//     const { messages } = this.props;
//     const inputRef = useRef();

//     return (
//       <div className={styles.container}>
//         {messages.map((message) => (
//           <MessageCard key={message._id} message={message}></MessageCard>
//         ))}
//         <div className="row m-2 p-2">
//           {/* <button type="button" className={[styles.btnSmall, "m-1"].join(" ")}> */}
//           <div className="col-2">
//             <FontAwesomeIcon
//               icon={faPaperPlane}
//               className="text-primary"
//             ></FontAwesomeIcon>
//           </div>

//           {/* Τα πιο πρόσφατα */}
//           {/* </button> */}

//           <input
//             className={[styles.faIcon, styles.search].join(" ")}
//             type="text"
//             placeholder="&#xf1d8; Πληκτρολογείστε το μήνυμά σας εδώ..."
//             onKeyDown={this.handleKeyDown}
//             ref={inputRef}
//           ></input>
//         </div>
//       </div>
//     );
//   }
// }
// export default ChatRoom;
