import React from "react";
import moment from "moment";

const MessageCard = (props) => {
  const { index, message } = props;
  const date = new Date(message.created);
  return (
    <div className="container-fluid pt-2">
      <div className={getRowClass()}>
        {/* <img src="" className="img-thumbnail" alt="user photo"></img> */}
        {/* <div className={[styles.photo, "m-1"].join(" ")}></div> */}
        <div className={getCardClass()}>
          <div className="card-body">
            {/* {message.message} #{index + 1} */}
            {message.message}
          </div>
        </div>
        <span className="align-self-center">
          <div className="badge text-muted">
            {moment(message.created).format("DD MMM kk:mm")}
          </div>
        </span>
      </div>
    </div>
  );
  function getCardClass() {
    let classes = `card w-auto d-inline-block text-light`;
    classes +=
      message.senderId ==
      JSON.parse(window.sessionStorage.getItem("application_user")).id
        ? " bg-primary140"
        : " text-end bg-secondaryGreenColor";
    return classes;
  }

  function getRowClass() {
    let classes = "d-flex flex-row";
    classes +=
      message.senderId ==
      JSON.parse(window.sessionStorage.getItem("application_user")).id
        ? ""
        : "-reverse";
    return classes;
  }
};
export default MessageCard;
