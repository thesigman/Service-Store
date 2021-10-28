import { React, Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout/layout";
import Filters from "../components/Filters/filters.jsx";
import AnonymousChatRoom from "../components/ChatRoom/AnonymousChatRoom.jsx";
import AnonymousChatTitle from "../components/Title/anonymousChatTitle.jsx";
import QuestionSideCard from "../components/Card/questionSideCard.jsx";
import { devteam2 } from "./api/axiosConfiguration";
import socket from "socket.io-client";
const sock = socket.io("http://localhost:5550");
import style from "../components/LeftBar/box.module.scss";

class AnonymousChat extends Component {
  state = {
    questions: [],
    messages: [],
    description: [],
    index: [],
    answered: true,
    created: [],
    currentid: "",
  };

  constructor(props) {
    super(props);

    // this.handleRequest = this.handleRequest.bind(this);
  }

  componentDidMount() {
    devteam2
      .post("/anonymousmessages/", {
        id: "611a7981fd554e07fc12fc4a",
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          // this.setState({ providers: response.data });

          // response.data.forEach((element) => {
          //   console.log(element.answers);
          //   element.answers.forEach((message) => {
          //     console.log(message);
          //     this.state.messages.push(message);
          //   });
          // });
          this.setState({ questions: response.data });
          // console.log(response.data[0].answers);
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
          // response.data.forEach((element) => {
          //   this.setState({ messages: element.answers });

          //   // element.answers.forEach((message) => {
          //   //   console.log(message);
          //   // });
          // });

          // console.log(response.data);
          // this.setState({ messages: response.data });
          // this.setState({ titles: response.data[0].question });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleOffer = (offer) => {
    console.log("eimai sto anonymouschat sto handleoffer", offer);
    // offer["requestid"] = "6102af2b7b7e6aee3e1922ac";
    offer["requestid"] = "61260b4ae1249539241b0823";
    offer["provider"] = "61018436ec74ca45f8c8e3ee";

    devteam2.post("/offers/", { offer: offer }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  componentDidUpdate() {
    sock.on("message", (data) => {
      // console.log("data", data.answers);
      // const newMessages = [...this.state.messages];
      // newMessages.push(data.answers);
      // console.log(newMessages);
      this.setState({ messages: data.answers });

      const newQuestions = [...this.state.questions];
      let foundIndex = newQuestions.findIndex(
        (question) => question._id === data._id
      );
      newQuestions[foundIndex] = data;
      this.setState({ questions: newQuestions });

      // appendMessages(`${data.message} created: ${data.created}`);
    });
  }

  handleMessage = (m) => {
    let o = {
      msg: m,
      senderId: "client",
      _id: this.state.currentid,
      requestid: "611a7981fd554e07fc12fc4a",
    };
    // console.log("eimai sto anonymouschat", m);
    // sock.emit("anonymouschatmessage", m);
    console.log("eimai sto anonymouschat", o);
    sock.emit("anonymouschatmessage", o);

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
    // this.setState({ currentid: question._id });
    // console.log("state", this.state.currentid);
    console.log("eimai sto anonymous chat222", question);
    // this.setState({ titles: request.name });

    devteam2
      .post("http://localhost:5550/api/anonymousmessages/id/", {
        id: question._id,
        requestid: "611a7981fd554e07fc12fc4a",
      })
      .then(
        (response) => {
          response.data.forEach((element) => {
            this.setState({ messages: element.answers });
            this.setState({ description: element.question });
            this.setState({ currentid: element._id });
            console.log("currentid", this.state.currentid);
            this.state.questions.map((q) => {
              if (q._id === question._id) {
                this.setState({ index: this.state.questions.indexOf(q) });
              }
              this.setState({ answered: element.answered });
              this.setState({
                created: Date.parse(element.created.toString()),
              });
            });
            // this.setState({index : })
          });
          // response.data.forEach((element) => {
          //   console.log(element);
          // });

          // this.setState({ providers: response.data });
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
  render() {
    // console.log(this.state.messages);
    return (
      <>
        <Head>
          <title>Chatroom</title>
        </Head>
        <Layout user={this.props}>
          {(!this.props.isAuthenticated && <p>You have to login First</p>) || (
            <>
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
                      nextQuestion={this.nextQuestion}
                      handleOffer={this.handleOffer}
                      userid="client"
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className={[style.box, "col-sm-3 bg-primary"].join(" ")}>
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
                  {/* </div> */}
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
