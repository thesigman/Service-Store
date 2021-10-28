import { Component } from "react";
import Search from "../Search/search";
import styles from "./box.module.scss";
import cardStyle from "../Card/card.module.scss";
import ProjectCustomerCard from "../Card/ProjectCustomerCard";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "../Filters/filters";
import ProjectCards from "../Cards/projectcards";
import Title from "../Title/title";

class Box extends Component {
  // state = {  }
  render() {
    const { requests } = this.props;
    return (
      <>
        <div className={[styles.box, "col-sm-3 bg-primary"].join(" ")}>
          {/* <Search /> */}
          {/* <input
            type="text"
            className={[styles.faIcon, styles.search].join(" ")}
            placeholder="&#xf002; Αναζήτηση Project"
          /> */}

          <div className="row justify-content-center">
            <ProjectCards
              requests={requests}
              handleRequest={this.props.handleRequest}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Box;
