import styles from "./card.module.scss";

export default function Card(props) {
  function getBadgeClass() {
    let classes = "";
    classes +=
      props.badge2 == "Open"
        ? "badge badge-success m-2"
        : props.badge2 == "Rejected"
        ? "badge badge-danger m-2"
        : "badge badge-primary m-2";
    return classes;
  }
  return (
    <div className={[styles.card, "m-2"].join(" ")}>
      <div className="p-2">
        <div className="row">
          <h5>{props.name}</h5>
        </div>
        <div>
          <span>{props.description}</span>
        </div>
        <div className="p-2">
          <span className="badge badge-primary m-2">{props.badge1}</span>
          <span className={getBadgeClass()}>{props.badge2}</span>
        </div>
      </div>
    </div>
  );
}
