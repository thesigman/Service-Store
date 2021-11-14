import { React, Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout/layout";
import Filters from "../components/Filters/filters.jsx";
import AnonymousChatRoom from "../components/ChatRoom/AnonymousChatRoom.jsx";
import AnonymousChatTitle from "../components/Title/anonymousChatTitle.jsx";
import QuestionSideCard from "../components/Card/questionSideCard.jsx";
import { devteam2 } from "./api/axiosConfiguration";
import socket from "socket.io-client";
const sock = socket.io.connect("islab-thesis.aegean.gr:5550");
import style from "../components/LeftBar/box.module.scss";
import axios from 'axios';
import Question from "../components/Question/Question";

class AnonymousChat extends Component {
  state = {
    questions: [],
    messages: [],
    description: [],
    index: [],
    answered: true,
    created: [],
    currentid: "",
    user: {},
    requestid: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //plain javascript
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    this.setState({requestid: params.requestId});
    this.setState({
      user: JSON.parse(window.sessionStorage.getItem("application_user")),
    });
    devteam2
      .post("/anonymousmessages/", {
        id: params.requestId,
      })
      .then(
        (response) => {
          this.setState({ questions: response.data });
          this.setState({
            messages: response.data[0].answers,
          });
          this.setState({
            created: Date.parse(response.data[0].created.toString()),
          });
          this.setState({ description: response.data[0].question });
          this.setState({ index: 0 });
          this.setState({ currentid: response.data[0]._id });
          this.setState({ answered: response.data[0].answered });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleOffer = (offer) => {
     //plain javascript
     const urlSearchParams = new URLSearchParams(window.location.search);
     const params = Object.fromEntries(urlSearchParams.entries());
    // offer["requestid"] = "6102af2b7b7e6aee3e1922ac";
    offer["requestid"] =  params.requestId;
    offer["provider"] =  JSON.parse(window.sessionStorage.getItem('application_user')).id;

    devteam2.post("/offers/", { offer: offer }).then(
      (response) => {
        //dhmiourgia offer
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  componentDidUpdate() {
    sock.on("message", (data) => {
      this.setState({ messages: data.answers });

      const newQuestions = [...this.state.questions];
      let foundIndex = newQuestions.findIndex(
        (question) => question._id === data._id
      );
      newQuestions[foundIndex] = data;
      this.setState({ questions: newQuestions });
    });
  }

  handleMessage = (m) => {

    try {
      let o = {
        msg: m,
        senderId: this.state.user.id,
        _id: this.state.currentid,
        requestid: this.state.requestid,
      };
      console.log("eimai sto anonymouschat", o);
      sock.emit("anonymouschatmessage", o);
    } catch (error) {
      console.log(error);
    }
    
    // sock.on("message", (m) => {
    //   console.log(m);
    //   // appendMessages(`${data.message} created: ${data.created}`);
    // });
  };

  nextQuestion = (index) => {
    console.log("hi", index);
    // if (index === this.state.questions.length) {
    //   console.log(this.state.questions[0].answers);
    // } else {
    //   console.log(this.state.questions[index + 1].answers);
    // }
  };

  handleQuestion = (question) => {
    console.log("eimai sto anonymous chat222", question);
     //plain javascript
     const urlSearchParams = new URLSearchParams(window.location.search);
     const params = Object.fromEntries(urlSearchParams.entries());
    axios
      .post("http://islab-thesis.aegean.gr:82/trans/api/anonymousmessages/id/", {
        id: question._id,
        requestid: params.requestId,
      })
      .then(
        (response) => {
          response.data.forEach((element) => {
            this.setState({ messages: element.answers });
            this.setState({ description: element.question });
            this.setState({ currentid: element._id });

            this.state.questions.map((q) => {
              if (q._id === question._id) {
                this.setState({ index: this.state.questions.indexOf(q) });
              }
              this.setState({ answered: element.answered });
              this.setState({
                created: Date.parse(element.created.toString()),
              });
            });
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  filterByName = () => {
    console.log("filterbyname");
    let NewArray = this.state.questions.sort(function (a, b) {
      if (a.question < b.question) {
        return -1;
      }
      if (a.question > b.question) {
        return 1;
      }
      return 0;
    });
    this.setState({ questions: NewArray });
  };

  filterByDate = () => {
    console.log("filterbydate");
    let NewArray = this.state.questions.sort(function (a, b) {
      if (a.created < b.created) {
        return -1;
      }
      if (a.created > b.created) {
        return 1;
      }
      return 0;
    });
    this.setState({ questions: NewArray });
  };

  handleAnswered = () => {
    axios
      .post("http://islab-thesis.aegean.gr:82/trans/api/anonymousmessages/answered", {
        questionId: this.state.currentid,
        requestid: this.state.requestid,
      })
      .then(
        (response) => {
          const newQuestions = [...this.state.questions];
          let foundIndex = newQuestions.findIndex(
            (question) => question._id === response.data._id
          );
          newQuestions[foundIndex] = response.data;
          this.setState({ questions: newQuestions });
          this.setState({ answered: response.data.answered });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  sendNewQuestion = (question) => {
    console.log("eimai anonymouschat", question);
  };
  render() {
    return (
      <>
        <Head>
          <title>Chatroom</title>
        </Head>
        <Layout user={this.props}>
          {(!this.props.isAuthenticated && <p>You have to login First</p>) || (
            <>
              {this.state.user.id}
              {this.state.user.role}
              <div className="row mt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Αρχική</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      trivago.gr
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3">
                    <h1>trivago.gr</h1>
                    <Filters
                      filterByName={this.filterByName}
                      filterByDate={this.filterByDate}
                    />
                  </div>
                  <div className="col-sm-9">
                    <AnonymousChatTitle
                      created={this.state.created}
                      index={this.state.index}
                      description={this.state.description}
                      answered={this.state.answered}
                      created={this.state.created}
                      currentid={this.state.currentid}
                      nextQuestion={this.nextQuestion}
                      handleOffer={this.handleOffer}
                      handleAnswered={this.handleAnswered}
                      userrole={this.state.user.role}
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className={[style.box, "col-sm-3 bg-primary"].join(" ")}>
                  {"provider" == "provider" && (
                    <Question sendNewQuestion={this.sendNewQuestion} />
                  )}
                    {this.state.questions.map((question) => (
                      <QuestionSideCard
                        onCardSelect={this.handleQuestion}
                        key={question._id}
                        question={question}
                        
                        index={this.state.questions.indexOf(question)}
                        answers={question.answers.length}
                      ></QuestionSideCard>
                    ))}
                  </div>
                  <div className="col-sm-9 overflow-auto">
                    <AnonymousChatRoom
                      messages={this.state.messages}
                      handleMessage={this.handleMessage}
                    />
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

export default AnonymousChat;