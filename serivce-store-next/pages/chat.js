import { React, Component } from "react";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout/layout";
import Filters from "../components/Filters/filters.jsx";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import ChatTitle from "../components/Title/ChatTitle";
import axios from "axios";
import socket from "socket.io-client";
import MessageSideCard from "../components/Card/messageSideCard.jsx";
const sock = socket.io("http://localhost:5550");

class Chat extends Component {
  state = { messages: [], offers: [] };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // axios
    //   .post("http://localhost:5550/api/messages/", {
    //     id: "61017675b47117629c1a8b67",
    //   })
    axios
      .post("http://localhost:5550/api/offers/uid", {
        id: "61017675b47117629c1a8b67",
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
          this.setState({ offers: response.data[0] });
          this.setState({ messages: response.data[1][0] });
          console.log(this.state.messages);
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
      this.setState({ messages: data });
    });
  }

  handleMessage(m) {
    console.log("eimai sto chat", m);
    sock.emit("chatmessage", m);
    // sock.on("message", (m) => {
    //   console.log(m);
    //   // appendMessages(`${data.message} created: ${data.created}`);
    // });
  }
  handleOffer = (offer) => {
    console.log(offer._id);
    axios
      .post("http://localhost:5550/api/messages/offerid", {
        id: offer._id,
      })
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          this.setState({ messages: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    // console.log(this.state.messages);
    return (
      <>
        <Head>
          <title>Chatroom</title>
        </Head>
        <Layout user={this.props}>
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
              <Filters />
            </div>
            <div className="col-sm-9">
              <ChatTitle />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 bg-primary">
              {this.state.offers.map((offer) => (
                <MessageSideCard
                  key={this.state.offers.indexOf(offer)}
                  offer={offer}
                  onCardSelect={this.handleOffer}
                ></MessageSideCard>
              ))}
            </div>
            <div className="col-sm-9 overflow-auto">
              <ChatRoom
                messages={this.state.messages}
                handleMessage={this.handleMessage}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
        </Layout>
      </>
    );
  }
}

export default Chat;
