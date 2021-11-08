import { Component, Fragment } from "react";
import Head from "next/head";
import { devteam2 } from "./api/axiosConfiguration";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../components/ChatRoom/chatroom.module.scss";
import style from "../components/LeftBar/box.module.scss";
import ArticleSideCard from "../components/Card/articleSideCard";
import AgreementTitle from "../components/Title/agreementTitle";
import { EditText, EditTextarea } from "react-edit-text";
import Layout from "../components/Layout/layout";
import moment from "moment";

class Agreement extends Component {
  state = {
    requests: [],
    articles: [],
    title: "",
    description: "",
    article: [],
    splitted: [],
    accepted: Boolean,
    keywords: [],
    user: {},
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(JSON.parse(window.sessionStorage.getItem("offerid")));
    this.setState({
      user: JSON.parse(window.sessionStorage.getItem("application_user")),
    });
    devteam2
      .post("/articles/offerid", {
        offerid: "6123c934172d021ef07070ee",
      })
      .then(
        (response) => {
          console.log(response.data);
          let articles = [];
          let article = [];
          for (let a in response.data[0].articles) {
            articles.push(response.data[0].articles[a]);
            response.data[0].articles[a].keywords.forEach((keyword) =>
              this.state.keywords?.push(keyword)
            );
            // this.state.keywords?.push(response.data[0].articles[a].keywords);
            // console.log("response", response.data[0].articles[a].keywords);
          }
          // for (let element in response.data[0].articles["article0"]) {
          //   article.push(response.data[0].articles["article0"][element]);
          // }
          // console.log(article);
          this.setState({ articles });

          let parts = this.state.articles[0].text.split(/(\bergolavia+\b)/gi);
          // let parts = this.state.articles[0].text.split(regexList[0]);

          this.setState({ splitted: parts });
          this.setState({ article: response.data[0].articles["article0"] });

          this.setState({ article: response.data[0].articles["article0"] });
          this.setState({ title: response.data[0].articles.article0.name });
          this.setState({
            accepted:
              this.state.user.role === "client"
                ? response.data[0].articles.article0.clientAccept
                : response.data[0].articles.article0.providerAccept,
          });
          this.setState({
            description: response.data[0].articles.article0.title,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleArticle = (articleNumber) => {
    // const regexList = [
    //   /(\bproviderServices+\b)/gi,
    //   /(\bduration+\b)/gi,
    //   /(\bergolavia+\b)/gi,
    //   /(\bdate+\b)/gi,
    // ];
    const regexList = this.state.articles[articleNumber]?.keywords;

    // console.log(new RegExp(`(\\b${regexList[0]}+\\b)`, "gi"));
    let parts = this.state.articles[articleNumber].text.split(
      // "(\bproviderServices+\b)
      new RegExp(`(\\b${regexList[0]}+\\b)`, "gi")
    );

    regexList.forEach((regex, index) => {
      if (index >= 1) {
        let t = parts[parts.length - 1].split(
          new RegExp(`(\\b${regex}+\\b)`, "gi")
        );
        parts.splice(parts.length - 1, 1);
        t.forEach((element) => parts.push(element));
      }
    });

    this.setState({ splitted: parts });
    this.setState({ article: this.state.articles[articleNumber] });
    this.setState({ title: this.state.articles[articleNumber].name });
    this.setState({
      description: this.state.articles[articleNumber].title,
    });
    this.setState({
      accepted:
        this.state.user.role === "client"
          ? this.state.articles[articleNumber].clientAccept
          : this.state.articles[articleNumber].providerAccept,
    });
    // }
  };

  handleSave = (value) => {
    this.setState({ [value.name]: value.value });
    console.log([value.name], value.value);
    // console.log(value.previousValue);
  };
  saveAgreement = () => {
    console.log("services", this.state.services);
    console.log("duration", this.state.duration);
    console.log("dur", this.state.dur);
    console.log("numofservices", this.state.numofservices);
  };
  handleAccepted = () => {
    devteam2
      .post("/articles/accepted", {
        number: this.state.article.number,
        offerid: "6123c934172d021ef07070ee",
        userid:
          this.state.user.role === "client" ? "clientAccept" : "providerAccept",
      })
      .then(
        (response) => {
          const newArticles = [...this.state.articles];
          let foundIndex = newArticles.findIndex(
            (article) => article.number === response.data.number
          );
          newArticles[foundIndex] = response.data;
          this.setState({ articles: newArticles });
          this.setState({
            accepted:
              this.state.user.role === "client"
                ? response.data.clientAccept
                : response.data.providerAccept,
          });
          if (this.state.article.number === response.data.number) {
            this.setState({ article: response.data });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    let ph = "";
    moment.locale("el");

    return (
      <>
        <Head>
          <title>Σύμβαση</title>
        </Head>
        <Layout user={this.props}>
          {(!this.props.isAuthenticated && <p>You have to login First</p>) || (
            <>
              {this.state.user.id}
              {this.state.user.role}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <h2>Σύμβαση παροχής υπηρεσιών</h2>
                  </div>
                  <div className="col-sm-9">
                    <AgreementTitle
                      title={this.state.title}
                      description={this.state.description}
                      saveAgreement={this.saveAgreement}
                      accepted={this.state.accepted}
                      handleAccepted={this.handleAccepted}
                      index={this.state.article["number"]}
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  {/* <Box requests={this.state.requests} /> */}
                  <div className={[style.box, "col-sm-3 bg-primary"].join(" ")}>
                    {this.state.articles.map((article) => (
                      <ArticleSideCard
                        key={this.state.articles.indexOf(article)}
                        article={article}
                        onCardSelect={this.handleArticle}
                        // index={this.state.providers.indexOf(provider)}
                      ></ArticleSideCard>
                    ))}
                  </div>

                  <div className="col-sm-9">
                    <div
                      className={[
                        styles.container,
                        " overflow-auto",
                        "p-2",
                      ].join(" ")}
                    >
                      {this.state.splitted.map((part) => {
                        if (!this.state.keywords.includes(part)) {
                          return (
                            <h5 key={this.state.splitted.indexOf(part)}>
                              {" "}
                              {part}
                            </h5>
                          );
                        } else {
                          if (part === "date") {
                            ph = "διαρκεια";
                          }
                          return (
                            <div style={{ whiteSpace: "wrap" }}>
                              <EditText
                                id={part}
                                name={part}
                                placeholder={"sumplhrwste"}
                                inline
                                style={{ width: "500px" }}
                                onSave={this.handleSave}
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Layout>
      </>
    );
  }
}

export default Agreement;
