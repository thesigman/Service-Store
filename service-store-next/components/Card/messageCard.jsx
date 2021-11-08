import styles from "./card.module.scss";

const MessageCard = (props) => {
  const { index, message } = props;
  const date = new Date(message.created);
  return (
    <div className="container-fluid pt-2">
      <div className={getRowClass()}>
        {/* <img src="" className="img-thumbnail" alt="user photo"></img> */}
        <div className={[styles.photo, "m-1"].join(" ")}></div>
        <div className={getCardClass()}>
          <div className="card-body">
            {/* {message.message} #{index + 1} */}
            {message.message}
          </div>
        </div>
        <span>
          <div className="badge text-dark">
            {/* {date.getUTCDate()}/{date.getUTCMonth()}  */}
            {date.getUTCHours()}:{date.getUTCMinutes()}
          </div>
        </span>
      </div>
    </div>

    // <div className={[styles.card, "m-2"].join(" ")}>
    //   <div className="p-2">
    //     <div className="row">
    //       <p>{message.client_id}</p>
    //     </div>
    //     <div>
    //       <span>{message.created.toString()}</span>
    //     </div>
    //     {/* <div className={styles.cardFooter}>
    //       <button className="btn btn-primary bg-primary m-2">Procceed</button>
    //       <button className="btn btn-primary bg-secondary">Cancel</button>
    //     </div> */}
    //   </div>
    // </div>
  );
  function getCardClass() {
    let classes = `card w-auto d-inline-block text-light`;
    classes +=
      message.senderId == "provider"
        ? " bg-primary140"
        : " text-end bg-secondaryGreenColor";
    return classes;
  }
  function getTime() {}

  function getRowClass() {
    let classes = "d-flex flex-row";
    classes += message.senderId == "provider" ? "" : "-reverse";
    return classes;
  }
};
export default MessageCard;
