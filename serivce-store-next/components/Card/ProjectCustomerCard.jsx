import styles from "./card.module.scss";

const ProjectCustomerCard = (props) => {
  const { request, onCardSelect } = props;
  // const date = new Date(request.created);
  const date = new Date(request.createdAt);
  // function onCardSelect() {
  //   console.log("hi");
  // }
  return (
    <div
      className={[styles.projectCustomerCard, "m-2"].join(" ")}
      onClick={() => onCardSelect(request)}
      style={{ cursor: "pointer" }}
    >
      <div className="p-2">
        <div className="row">
          {/* <div className={styles.title}>Titlos project</div> */}
          <h5>{request.name}</h5>
        </div>
        <small className="text-muted">
          Δημιουργήθηκε {date.getUTCDate()}/{date.getUTCMonth() + 1}
        </small>
        <div className={styles.cardFooter}>{request.domain}</div>
      </div>
    </div>
  );
};
export default ProjectCustomerCard;
