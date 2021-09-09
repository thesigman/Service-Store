import styles from "./card.module.scss";

const MessageSideCard = (props) => {
  const { offer, onCardSelect } = props;
  console.log("messagesidecard", offer);

  return (
    <div
      className={[styles.card, "m-2"].join(" ")}
      onClick={() => onCardSelect(offer[0])}
      style={{ cursor: "pointer" }}
    >
      <div className="p-2">
        <div className="row">
          <h5>{offer[0].provider}</h5>
        </div>
        <span>hiii</span>
      </div>
    </div>
  );
};

export default MessageSideCard;
