import { Component, Fragment } from "react";
import Head from "next/head";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import AgreementForm from "../components/Forms/agreementForm";
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
    titles: [],
    description: [],
    article: [],
    services: "",
    duration: "",
    dur: "",
    numofservices: "",
  };
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   axios.get("http://localhost:5550/api/articles/").then(
  //     (response) => {
  //       // console.log(response);
  //       console.log(response.data);
  //       console.log(response.status);
  //       console.log(response.statusText);
  //       // console.log(response.headers);
  //       // console.log(response.config);
  //       // this.setState({ providers: response.data });
  //       this.setState({ articles: response.data });
  //       this.setState({ titles: response.data[0].name });
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  componentDidMount() {
    axios
      .post("http://localhost:5550/api/articles/offerid", {
        offerid: "6123c934172d021ef07070ee",
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          // console.log(response.data[0][1]);
          let articles = [];
          let article = [];
          for (let a in response.data[0].articles) {
            articles.push(response.data[0].articles[a]);
          }
          for (let element in response.data[0].articles["article1"]) {
            article.push(response.data[0].articles["article1"][element]);
          }
          console.log(article);
          this.setState({ articles });
          this.setState({ article });

          console.log("arti", this.state.articles[0].name);
          this.setState({ article: response.data[0].articles["article1"] });
          // console.log(response.data[0]._id);
          // console.log(response.data[0].articles.article1);
          // this.setState({ articles: response.data[0].articles[0] });
          // console.log(this.state.articles);
          // this.setState({ article: response.data[0] });
          this.setState({ titles: response.data[0].articles.article1.name });
          this.setState({
            description: response.data[0].articles.article1.title,
          });
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
  saveAgreement = () => {
    console.log("services", this.state.services);
    console.log("duration", this.state.duration);
    console.log("dur", this.state.dur);
    console.log("numofservices", this.state.numofservices);
  };
  render() {
    moment.locale("el");
    return (
      <Fragment>
        {/* <Layout> */}
        {/* <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Αρχική</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Σύμβαση Παροχής
              </li>
            </ol>
          </nav>
        </div> */}
        <Head>
          <title>Σύμβαση</title>
        </Head>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 align-self-center">
              <h2>Σύμβαση παροχής υπηρεσιών</h2>
            </div>
            <div className="col-sm-9">
              <AgreementTitle
                title={this.state.titles}
                description={this.state.description}
                saveAgreement={this.saveAgreement}
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
                  // afm={provider.AFM}
                  // index={this.state.providers.indexOf(provider)}
                ></ArticleSideCard>
              ))}
            </div>

            <div className="col-sm-9">
              {/* <Cards providers={this.state.providers} /> */}
              <div className={[styles.container, " overflow-auto"].join(" ")}>
                {this.state.articles.map((article) => (
                  <div style={{ whiteSpace: "wrap" }}>
                    <label className="mr-2">{article.text}</label>
                    <br></br>
                    <EditText
                      id="services"
                      name="services"
                      placeholder="εργασίες/υπηρεσίες"
                      inline
                      style={{ width: "500px" }}
                      onSave={this.handleSave}
                    />
                    {/* <label className="mr-2">
                    σήμερα, την {moment().format("dddd")}{" "}
                    {moment().format("LL")}, μεταξύ των κάτωθι συμβαλλομένων:
                  </label> */}{" "}
                    <br></br>
                    <label className="mr-2">{article.text1}</label>
                    <label className="mr-2">{article.text2}</label>
                    <label className="mr-2">{article.text3}</label>
                    <label className="mr-2">{article.text4}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <AgreementForm /> */}
      </Fragment>
      //{/* </Layout> */}
    );
  }
}

export default Agreement;
