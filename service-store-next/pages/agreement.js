import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";
import ArticleSideCard from "../components/Card/articleSideCard";
import styles from "../components/ChatRoom/chatroom.module.scss";
import Text from "../components/EditText/Text";
import Layout from "../components/Layout/layout";
import style from "../components/LeftBar/box.module.scss";
import AgreementTitle from "../components/Title/agreementTitle";
import { devteam2 } from "./api/axiosConfiguration";

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
    values: {},
    user: {},
    status: "",
    agreementAccept: true,
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
        //        offerid: "6123c934172d021ef07070ee",
        //offerid:"6185383f84f27ed4b9d9765f",
        offerid: JSON.parse(window.sessionStorage.getItem("offerid")),
      })
      .then(
        (response) => {
          console.log(response.data);
          let articles = [];
          let article = [];
          let v = {};

          for (let a in response.data[0].articles) {
            articles.push(response.data[0].articles[a]);
            response.data[0].articles[a].keywords.forEach((keyword) =>
              this.state.keywords?.push(keyword)
            );
            // this.state.keywords?.push(response.data[0].articles[a].keywords);
            // console.log("response", response.data[0].articles[a].keywords);
            console.log(response.data[0].articles[a]?.values);
            if (
              response.data[0].articles[a].values &&
              response.data[0].articles[a].values != null
            ) {
              v = { ...v, ...response.data[0].articles[a].values };
            }
          }
          // for (let element in response.data[0].articles["article0"]) {
          //   article.push(response.data[0].articles["article0"][element]);
          // }
          // console.log(article);

          this.setState({ status: response.data[0].status });

          console.log(v);

          this.setState({ values: v });
          this.setState({ articles });

          this.state.articles.forEach((article) => {
            if (!(article.providerAccept && article.clientAccept))
              this.setState({ agreementAccept: false });
          });

          // let parts = this.state.articles[0].text.split(
          //   /(\bpreambleProvider+\b)/gi
          // );
          // let parts = this.state.articles[0].text.split(regexList[0]);

          const regexList = this.state.articles[0]?.keywords;

          // console.log(new RegExp(`(\\b${regexList[0]}+\\b)`, "gi"));
          let parts = this.state.articles[0].text.split(
            new RegExp(`(\\b${regexList[0]}+\\b)`, "gi")
          );

          regexList.forEach((regex, index) => {
            // if (index >= 1) {
            let t = parts[parts.length - 1].split(
              new RegExp(`(\\b${regex}+\\b)`, "gi")
            );
            parts.splice(parts.length - 1, 1);
            t.forEach((element) => parts.push(element));
            // }
          });

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
      new RegExp(`(\\b${regexList[0]}+\\b)`, "gi")
    );

    regexList.forEach((regex, index) => {
      // if (index >= 1) {
      let t = parts[parts.length - 1].split(
        new RegExp(`(\\b${regex}+\\b)`, "gi")
      );
      parts.splice(parts.length - 1, 1);
      t.forEach((element) => parts.push(element));
      // }
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

  signAgreement = () => {
    console.log("sign agreement");
    // devteam2
    //   .post(
    //     "/articles/download"
    //     // {
    //     //   offerid: "6123c934172d021ef07070ee",
    //     // }
    //     // { responseType: "blob" }
    //   )
    //   .then(
    //     (response) => {
    //       console.log(response.data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };

  handleSave = (value) => {
    console.log("save");
    console.log("values", value);

    let name = value.name;
    console.log(name);

    devteam2
      .post("/articles/edit", {
        value,
        offerid: JSON.parse(window.sessionStorage.getItem("offerid")),
        number: this.state.article.number,
      })
      .then(
        (response) => {
          let newValues = { ...this.state.values };
          newValues[value.name] = response.data["values"][value.name];
          this.setState({
            values: newValues,
          });
          //edw prepei na settarete kai to clientAccept kai providerAccept se false gia to
          //sugkekrimeno ar8ro. Sto backend einai etoimo.
          //den kanei akoma update to clientAccept kai to providerAccept
        },
        (error) => {
          console.log(error);
        }
      );
  };

  handleAccepted = () => {
    devteam2
      .post("/articles/accepted", {
        number: this.state.article.number,
        //        offerid: "6123c934172d021ef07070ee",
        offerid: JSON.parse(window.sessionStorage.getItem("offerid")),
        role:
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

          //elegxos kai update gia thn apodoxh olwn twna ar8rwn kai
          //emfanishs tou koumpiou gia thn apo8hkeush ths sumvashs
          //sto agreementTitle.jsx
          let newAgreementAccept = true;
          this.state.articles.forEach((article) => {
            if (!(article.providerAccept && article.clientAccept))
              newAgreementAccept = false;
          });
          if (this.state.agreementAccept !== newAgreementAccept) {
            this.setState({ agreementAccept: newAgreementAccept });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    let ph = "";

    return (
      <>
        <Head>
          <title>Service Store - Σύμβαση</title>
        </Head>
        <Layout user={this.props}>
          {(!this.props.isAuthenticated && <p>You have to login First</p>) || (
            <>
              <div className="row mt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      {/* <a href="#">Αρχική</a> */}
                      <Link href="/home">
                        <a>Αρχική</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <Link href="/chat">
                        <a>Εισερχόμενα</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Σύμβαση
                    </li>
                  </ol>
                </nav>
              </div>
              {/* {this.state.user.id}
              {this.state.user.role} */}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 align-self-center">
                    <h2>Σύμβαση παροχής υπηρεσιών</h2>
                  </div>
                  <div className="col-lg-9">
                    <AgreementTitle
                      title={this.state.title}
                      description={this.state.description}
                      signAgreement={this.signAgreement}
                      accepted={this.state.accepted}
                      handleAccepted={this.handleAccepted}
                      index={this.state.article["number"]}
                      offerid={JSON.parse(
                        window.sessionStorage.getItem("offerid")
                      )}
                      agreementAccept={this.state.agreementAccept}
                      role={this.state.user.role}
                      uploadAgreement={this.uploadAgreement}
                      saveFile={this.saveFile}
                      status={this.state.status}
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
                          switch (part) {
                            case "preambleClient":
                              ph = "εργασία";
                              break;
                            case "preambleProvider":
                              ph = "παροχές";
                              break;
                            case "providerServices":
                              ph = "υπηρεσίες παρόχου";
                              break;
                            case "duration":
                              ph = "διάρκεια";
                              break;
                            case "ergolavia":
                              ph = "εργασίες";
                              break;
                            case "days":
                              ph = "μέρες/μήνες";
                              break;
                            case "date":
                              ph = "ημερομηνία";
                              break;
                            case "ammount":
                              ph = "ποσό";
                              break;
                            case "payment1":
                              ph = "1η πληρωμή";
                              break;
                            case "payment2":
                              ph = "2η πληρωμή";
                              break;
                            case "iban":
                              ph = "iban λογαριασμού";
                              break;
                            case "bank":
                              ph = "τράπεζα";
                              break;
                            case "team":
                              ph = "στελέχη";
                              break;
                            case "representative":
                              ph = "εκπρόσωπος";
                              break;
                            default:
                              ph = "συμπληρώστε εδώ";
                              break;
                          }
                          return (
                            <Text
                              part={part}
                              value={this.state.values[`${part}`]}
                              defaultValue={this.state.values[`${part}`]}
                              ph={ph}
                              readonly={this.state.agreementAccept}
                              onSave={this.handleSave}
                            />
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
