import styles from "./card.module.scss";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const TransactionsCard = (props) => {
  moment.locale("el");
  return (
    <div className={[styles.card, "m-2"].join(" ")}>
      <div className="p-2">
        <div className="row">
          <h5>Συναλλαγές</h5>
          <small>
            Αναλυτικό ιστορικό συναλλαγών από και προς τον λογαριασμό σας
          </small>
        </div>

        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Ποσό/Τύπος</th>
                    <th scope="col">Παραλήπτης/Αποστολέας</th>
                    <th scope="col">Ημερομηνία</th>
                    <th scope="col">Εκτύπωση Απόδειξης</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>150,00 Euro</td>
                    <td>0.006437</td>
                    <td>
                      {moment().format("l")} {moment().format("LT")}
                    </td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>300,00 Euro</td>
                    <td>0.006437</td>
                    <td>
                      {moment().format("l")} {moment().format("LT")}
                    </td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>870,00 Euro</td>
                    <td>0.006437</td>
                    <td>
                      {moment().format("l")} {moment().format("LT")}
                    </td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>780,00 Euro</td>
                    <td>0.006437</td>
                    <td>
                      {moment().format("l")} {moment().format("LT")}
                    </td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2500,00</td>
                    <td>0.006437</td>
                    <td>
                      {moment().format("l")} {moment().format("LT")}
                    </td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-end m-2">
          <button className="btn bg-primary">Εκτύπωση όλων</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsCard;
