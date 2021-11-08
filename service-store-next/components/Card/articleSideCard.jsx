import styles from "./card.module.scss";

const ArticleSideCard = (props) => {
  const { article, onCardSelect } = props;

  function getBadge() {
    if (article.clientAccept === true && article.providerAccept === true) {
      return <span className="badge badge-success">Αποδεκτός</span>;
    } else {
      return;
    }
  }
  return (
    <div
      className={[styles.card, "m-2"].join(" ")}
      onClick={() => onCardSelect(article.number)}
      style={{ cursor: "pointer" }}
    >
      <div className="p-2">
        <div className="row">
          <h5>{article.name}</h5>
        </div>
        <span>{article.title}</span>
      </div>
      <div className="row">
        <div className="col-2 m-2">{getBadge()}</div>
      </div>
    </div>
  );
};

export default ArticleSideCard;
