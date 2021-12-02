import { React, Component } from "react";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout/layout";
import Filters from "../components/Filters/filters.jsx";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import ChatTitle from "../components/Title/ChatTitle";
import { devteam2 } from "./api/axiosConfiguration";
import socket from "socket.io-client";
import MessageSideCard from "../components/Card/messageSideCard.jsx";
const sock = socket.io("islab-thesis.aegean.gr:5550");
import style from "../components/LeftBar/box.module.scss";

class Chat extends Component {
  state = {
    chatroommessages: [],
    offers: [],
    users: [],
    requests: [],
    messages: [],
    currentofferid: "",
    title: "",
    requestname: "",
    user: {},
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({
      user: JSON.parse(window.sessionStorage.getItem("application_user")),
    });
    // axios
    //   .post("http://localhost:5550/api/messages/", {
    //     id: "61017675b47117629c1a8b67",
    //   })
    devteam2
      .post("/offers/uid", {
        id: JSON.parse(window.sessionStorage.getItem("application_user")).id,
        role: JSON.parse(window.sessionStorage.getItem("application_user"))
          .role,
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          // console.log(response.data[2][0][0]);

          let u = [];
          response.data[2].forEach((item) => {
            // console.log(item[0]);
            u.push(item[0]);
          });
          // console.log("P", p);
          this.setState({ users: u });
          let r = [];
          response.data[3].forEach((item) => {
            // console.log(item[0]);
            r.push(item[0]);
          });
          // console.log("R", r);
          this.setState({ requests: r });
          let o = [];
          response.data[0].forEach((item) => {
            console.log("ITEM", item);
            o.push(item);
          });
          console.log("O", o);

          let m = [];
          response.data[1].forEach((item) => {
            console.log("MMMM", item);
            m.push(item);
          });
          // console.log("O", o);
          this.setState({ messages: m });
          this.setState({ offers: o });
          // this.setState({ offers: response.data[0] });
          // this.setState({ messages: response.data[1] });
          // this.setState({ currentofferid: response.data[0][0]._id });
          this.setState({ currentofferid: this.state.offers[0]._id });

          this.setState({ chatroommessages: response.data[1][0] });
          // this.setState({ providers: response.data[2] });

          // this.setState({ requests: response.data[3] });
          // console.log("TITLE", response.data[2][0][0].NameOfCompany);
          this.setState({ title: response.data[2][0][0].NameOfCompany });
          this.setState({ requestname: response.data[3][0][0].name });

          console.log("stateMessages", this.state.messages);
          console.log(this.state.users);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  componentDidUpdate() {
    sock.on("message", (data) => {
      // const newMessages = [...this.state.messages];
      // newMessages.push(data);
      // this.setState({ messages: newMessages });
      this.setState({ chatroommessages: data });

      // let newMessages = [...this.state.messages];
      // console.log("new Messages", newMessages[0]);
      // let foundIndex = newMessages.findIndex(
      //   (offer) => offer._id === this.state.currentofferid
      // );
      // newMessages[foundIndex].push(data);
      // this.setState({ messages: newMessages });
    });
  }

  handleMessage = (m) => {
    console.log("eimai sto chat", m);
    let msg = {
      message: m,
      // senderId: "client",
      senderId: this.state.user.id,
      coll: this.state.currentofferid,
    };
    sock.emit("chatmessage", msg);
    // sock.on("message", (m) => {
    //   console.log(m);
    //   // appendMessages(`${data.message} created: ${data.created}`);
    // });
  };
  handleOffer = (offer) => {
    console.log(offer._id);
    this.setState({ currentofferid: offer._id });

    let u;
    let r;

    JSON.parse(window.sessionStorage.getItem("application_user")).role ==
    "client"
      ? ((u = this.state.users.find(
          (user) => user._id.toString() === offer.provider.toString()
        )),
        (r = this.state.requests.find(
          (request) => request._id.toString() === offer.requestid.toString()
        )))
      : ((r = this.state.requests.find(
          (request) => request._id.toString() === offer.requestid.toString()
        )),
        (u = this.state.users.find(
          (user) => user._id.toString() === r.requester.toString()
        )));

    // this.state.requests.forEach((array) => {
    //   r = array.filter((request) => request._id === offer.requestid);
    // });
    // console.log("PPPPP", p);
    // console.log("RRRRR", r);

    // this.setState({ requestname: r[0]?.name });
    // this.setState({ title: p[0]?.NameOfCompany });
    this.setState({ requestname: r.name });
    this.setState({ title: u.NameOfCompany });
    devteam2
      .post("/messages/offerid", {
        id: offer._id,
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          this.setState({ chatroommessages: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  filterByName = () => {
    console.log("filterbyname");
    // let NewArray = this.state.offers.sort(function (a, b) {
    //   if (a.Summary < b.Summary) {
    //     return -1;
    //   }
    //   if (a.Summary > b.Summary) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // this.setState({ offers: NewArray });
  };

  filterByDate = () => {
    console.log("filterbydate");
    // let NewArray = this.state.offers.sort(function (a, b) {
    //   if (a.createdAt < b.createdAt) {
    //     return -1;
    //   }
    //   if (a.createdAt > b.createdAt) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // this.setState({ offers: NewArray });
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
                      Εισερχόμενα
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3">
                    <h1>Εισερχόμενα</h1>
                    <Filters
                      filterByName={this.filterByName}
                      filterByDate={this.filterByDate}
                    />
                  </div>
                  <div className="col-sm-9">
                    <ChatTitle
                      title={this.state.title}
                      name={this.state.requestname}
                      offerid={this.state.currentofferid}
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className={[style.box, "col-sm-3 bg-primary"].join(" ")}>
                    {this.state.offers.map((offer, index) => (
                      <MessageSideCard
                        key={this.state.offers.indexOf(offer)}
                        messages={this.state.messages[index]}
                        user={
                          JSON.parse(
                            window.sessionStorage.getItem("application_user")
                          ).role == "client"
                            ? this.state.users.find(
                                (user) => user._id === offer.provider
                              )
                            : this.state.users.find((user) => {
                                let req = this.state.requests.find(
                                  (request) => request._id === offer.requestid
                                );
                                return user._id === req.requester;
                              })
                        }
                        offer={offer}
                        request={this.state.requests.find(
                          (request) => request._id == offer.requestid
                        )}
                        onCardSelect={this.handleOffer}
                      ></MessageSideCard>
                    ))}
                  </div>
                  <div className="col-sm-9 overflow-auto">
                    <ChatRoom
                      messages={this.state.chatroommessages}
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

export default Chat;
