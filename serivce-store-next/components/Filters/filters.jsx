import { Component, Fragment } from "react";
import styles from "./filters.module.scss";
import {
  faSortAlphaDown,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Filter extends Component {
  state = {};
  render() {
    const { filterByName, filterByDate } = this.props;
    return (
      <>
        <span>Ταξινόμηση κατά:</span>
        <div className="row">
          <button
            type="button"
            className={[styles.btnSmall, "m-1"].join(" ")}
            onClick={filterByDate}
          >
            <FontAwesomeIcon
              icon={faStopwatch}
              className="text-secondary"
            ></FontAwesomeIcon>
            Τα πιο πρόσφατα
          </button>

          <button
            type="button"
            className={[styles.btnSmall, "m-1"].join(" ")}
            onClick={filterByName}
          >
            {/* <div className="text-secondary">Αλφαβητικά</div> */}
            <FontAwesomeIcon
              icon={faSortAlphaDown}
              className="text-secondary"
            ></FontAwesomeIcon>
            Αλφαβητικά
          </button>
        </div>
      </>
    );
  }
}

export default Filter;
