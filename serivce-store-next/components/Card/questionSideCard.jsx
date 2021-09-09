import styles from "./card.module.scss";

const QuestionSideCard = (props) => {
  const { question, index, answers, onCardSelect } = props;

  function getBagdeClass() {
    // const { rate } = this.state.highRate;
    // console.log(question.answered);

    //   classes += question.answered ? " badge badge-success" : "";
    if (question.answered)
      return <span className="badge bg-success">Απαντήθηκε</span>;
    else {
      return "";
    }
  }
  return (
    <div
      className={[styles.card, "m-2"].join(" ")}
      onClick={() => onCardSelect(question)}
      style={{ cursor: "pointer" }}
    >
      <div className="p-2">
        <div className="row">
          {/* <div className={styles.title}>Titlos project</div> */}
          <h5 className="col-7">Ερώτηση {index + 1}</h5>
          <div className="col-5">
            <span>{answers} Απαντήσεις</span>
          </div>
        </div>
        <span>{question.question}</span>
      </div>
      <div className="row">
        <div className="col-2 m-2">
          {/* <span className={getBagdeClass()}>Απαντήθηκε</span> */}
          {getBagdeClass()}
        </div>
      </div>
    </div>
  );
};

export default QuestionSideCard;
