import styles from "./card.module.scss";
import moment from "moment";
const MessageSideCard = (props) => {
  console.log("props", props);
  // const { offer, messages, provider, request, onCardSelect } = props;
  console.log("messagesidecard", props.offer);
  console.log(props.provider);
  // console.log(request);
  // console.log(messages);
  moment.locale("el");
  return (
    <div
      className={[styles.card, "m-2"].join(" ")}
      onClick={() => props.onCardSelect(props.offer)}
      style={{ cursor: "pointer" }}
    >
      <div className="p-2">
        <div className="row">
          <div className="col-7">{props.provider.NameOfCompany}</div>
          <div className="col-5">
            <small className="text-muted">
              {moment(
                props.messages[props.messages.length - 1]?.created,
                "YYYYMMDD"
              ).fromNow()}
            </small>
          </div>
        </div>
        <div className="row">
          <h5>{props.request.name}</h5>
        </div>
        <div className="row">
          <div className="col">
            {props.messages[props.messages.length - 1]?.message.substr(0, 40)}
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSideCard;
