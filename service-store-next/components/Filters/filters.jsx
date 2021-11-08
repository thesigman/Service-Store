import styles from "./filters.module.scss";
import {
  faSortAlphaDown,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = (props) => {
  const { filterByName, filterByDate } = props;
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
            className="text-secondaryGreenColor"
          ></FontAwesomeIcon>
          Τα πιο πρόσφατα
        </button>

        <button
          type="button"
          className={[styles.btnSmall, "m-1"].join(" ")}
          onClick={filterByName}
        >
          <FontAwesomeIcon
            icon={faSortAlphaDown}
            className="text-secondaryGreenColor"
          ></FontAwesomeIcon>
          Αλφαβητικά
        </button>
      </div>
    </>
  );
};

export default Filter;
