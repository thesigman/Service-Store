import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../components/Card/card";
import Layout from "../components/Layout/layout";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

export default function Questionaire(props) {
  const [finalCards, setFinalCards] = useState([]);
  const [modalIsOpen, setModalStatus] = useState(false);

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
    const itemsPerRow = 5;
    let itemsParsed = 0;
    const totalItemNum = response.data.length;
    const renderedCards = [];

    response.data.forEach((item) => {
      renderedCards.push(
        <Card
          name={item.name}
          description={item.service_2}
          badge1={item.service_1}
          badge2={item.status}
          fixedWitdth={true}
        ></Card>
      );
    });
    let tempCards = [];

    // Μορφοποίηση των καρτών ώστε να εμφανίζονται σε στήλες
    for (let i = 0; i < response.data.length; i++) {
      tempCards.push(renderedCards.at(i));
      if (tempCards.length == itemsPerRow) {
        finalCards.push(<div className="col-3 mr-0">{tempCards}</div>);
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
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Αρχική</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-10">
              <h2> Projects </h2>
            </div>
            <div className="col-2 mt-4">
              <Button
                onClick={() => setModalStatus(!modalIsOpen)}
                className="btn bg-primary"
              >
                Προσθήκη Πρότασης
              </Button>
            </div>
          </div>
          <p>Παρακάτω φαίνονται τα Project που σας αφορούν</p>

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
        </div>
      )}
      {!modalIsOpen || <MultiStepForm modalstatus={modalIsOpen} />}
    </Layout>
  );
}
