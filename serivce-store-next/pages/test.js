import { Component, Fragment } from "react";
import Head from "next/head";
import { devteam2 } from "./api/axiosConfiguration";
import "bootstrap/dist/css/bootstrap.css";
import AgreementForm from "../components/Forms/agreementForm";
import styles from "../components/ChatRoom/chatroom.module.scss";
import style from "../components/LeftBar/box.module.scss";
import ArticleSideCard from "../components/Card/articleSideCard";
import AgreementTitle from "../components/Title/agreementTitle";
import { EditText, EditTextarea } from "react-edit-text";
import Layout from "../components/Layout/layout";
import moment from "moment";
class Test extends Component {
  state = {
    requests: [],
    articles: [],
    titles: [],
    description: [],
    article: [],
    splitted: [],
    services: "",
    duration: "",
    dur: "",
    numofservices: "",
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    devteam2
      .post("/articles/offerid", {
        offerid: "6123c934172d021ef07070ee",
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          this.setState({ articles: response.data });
          console.log(this.state.articles[0].title);
          this.state.articles.map((article) => {
            console.log(article.title);
          });

          let parts = this.state.articles[0].text.split(/(\bergolavia+\b)/gi);
          console.log(parts[0]);
          this.setState({ splitted: parts });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  handleSave = (value) => {
    // console.log(value);
    // console.log(value.value);
    // console.log(value.name);

    this.setState({ [value.name]: value.value });
    console.log("state", this.state.services);
    console.log("state", this.state.duration);
    console.log("state", this.state.dur);
    console.log("state", this.state.numofservices);

    // console.log(value.previousValue);
  };

  render() {
    moment.locale("el");
    return (
      <div className="container-fluid">
        {this.state.articles.length === 0 ? (
          <h2> No offers yet :( </h2>
        ) : (
          this.state.splitted.map((part) => {
            if (part !== "ergolavia") {
              return <h4 key={this.state.splitted.indexOf(part)}> {part}</h4>;
            } else {
              return (
                <div style={{ whiteSpace: "wrap" }}>
                  {/* <label className="mr-2">HAHAHAHA</label> */}
                  {/* <br></br> */}
                  <EditText
                    id="services"
                    name="services"
                    placeholder="εργασίες/υπηρεσίες"
                    inline
                    style={{ width: "500px" }}
                    onSave={this.handleSave}
                  />
                  {/* <br></br> */}
                  {/* <label className="mr-2">HAHAHAHHA2</label> */}
                </div>
              );
            }
          })
        )}
      </div>
    );
  }
}

export default Test;
