import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../components/Card/card";
import ProjectCard from "../components/Card/projectCard";
import Layout from "../components/Layout/layout";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

export default function Questionaire(props) {
  const [finalCards, setFinalCards] = useState([]);
  const [modalIsOpen, setModalStatus] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(async () => {
    let finalCards = [];
    // Φόρτωστη των request που έχει πραγματοποιήσει ο χρήσητς ως πελάτης
    const active_user = JSON.parse(
      window.sessionStorage.getItem("application_user")
    );
    const response = await axios.post(
      `http://islab-thesis.aegean.gr:82/trans/api/requests/uid`,
      { uid: active_user.id, role: active_user.role }
    );
    console.log("requests response", response);
    const itemsPerRow = 5;
    let itemsParsed = 0;
    const totalItemNum = response.data.length;
    const renderedCards = [];

    console.log("test projects");
    setRequests(response.data);

    response.data.forEach((item) => {
      renderedCards.push(
        <Card
          name={item.name}
          description={item.service_2.substr(item.service_2.indexOf(" ") + 1)}
          badge1={item.service_1.substr(item.service_1.indexOf(" ") + 1)}
          badge2={item.status}
          fixedWitdth={true}
          fixedHeight={true}
          key={item._id}
        ></Card>
      );
    });
    let tempCards = [];

    // Μορφοποίηση των καρτών ώστε να εμφανίζονται σε στήλες
    for (let i = 0; i < response.data.length; i++) {
      tempCards.push(renderedCards.at(i));
      if (tempCards.length == itemsPerRow) {
        finalCards.push(<div className="col-md-3 col mr-0">{tempCards}</div>);
        tempCards = [];
      }
    }

    // Παει να πει ότι έχουν περισσέψει κάρτες που δεν έχουν
    // συμπληρώσει τον αριθμό per Row. Τις προσθέτουμε και αυτές
    if (tempCards.length > 0) {
      finalCards.push(<div className="col-3">{tempCards}</div>);
    }

    setFinalCards(finalCards);
  }, []);

  /**
   * Κλείνει το ενεργό modal
   */
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <Layout user={props}>
      {(!props.isAuthenticated && <p>You have to login First</p>) || (
        <div className="container-fluid h-100">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                {/* <a href="#">Αρχική</a> */}
                <Link href="/home">
                  <a>Αρχική</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-md-10">
              <h2> Projects </h2>
            </div>
          </div>
          <div className="row">
            <p>Παρακάτω φαίνονται τα Project που σας αφορούν</p>
          </div>

          <div
            className="d-flex"
            style={{
              "overflow-y": "scroll",
              "box-shadow": "inset 0px 4px 4px rgb(0 0 0 / 25%)",
              "border-radius": "6px",
            }}
          >
            {finalCards}
          </div>

          <div
            className="container-fluid p-2 overflow-auto"
            style={{
              height: "100vh",
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
            }}
          >
            {requests ? (
              <div className="row p-2">
                {requests.map((request) => (
                  <div className="col-xl-3 col-md-4" key={request._id}>
                    <ProjectCard
                      request={request}
                      badge1={request.service_1.substr(
                        request.service_1.indexOf(" ") + 1
                      )}
                      badge2={request.status}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="row p-2">Δεν υπάρχουν διαθέσιμα πρότζεκτ</div>
            )}
          </div>
        </div>
      )}
      {/* {!modalIsOpen || <MultiStepForm modalstatus={modalIsOpen} />} */}
    </Layout>
  );
}
