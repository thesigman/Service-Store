import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../components/Card/card";
import Layout from "../components/Layout/layout";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";


export default function Questionaire(props) {
  const [finalCards, setFinalCards] = useState([]);
  const [modalIsOpen, setModalStatus] = useState(false);

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FFFFFF",
      width: "70%",
      height: "auto",
      overflow: "visible",
    },
  }

  useEffect(() => {
    let finalCards = [];
    // Θα φορτώνουμε τις προτάσεις απο τον server
    const data = [
      { name: 'Δημιουργία Ψηφιακού Ιστοτόπου Portal', description: 'Τομέας Ψηφιακού Marketing', badge1: 'Ψηφιακό Marketing', badge2: 'Δημιουργέια Εταιρεικής Εικόνας' },
      { name: 'Δημιουργία Ψηφιακού Ιστοτόπου Portal', description: 'Τομέας Ψηφιακού Marketing', badge1: 'Ψηφιακό Marketing', badge2: 'Δημιουργέια Εταιρεικής Εικόνας' },
      { name: 'Δημιουργία Ψηφιακού Ιστοτόπου Portal', description: 'Τομέας Ψηφιακού Marketing', badge1: 'Ψηφιακό Marketing', badge2: 'Δημιουργέια Εταιρεικής Εικόνας' },
      { name: 'Δημιουργία Ψηφιακού Ιστοτόπου Portal', description: 'Τομέας Ψηφιακού Marketing', badge1: 'Ψηφιακό Marketing', badge2: 'Δημιουργέια Εταιρεικής Εικόνας' },
    ]
    data.forEach((item) => {
      finalCards.push(
        <Card
          name={item.name}
          description={item.description}
          badge1={item.badge1}
          badge2={item.badge2}
        ></Card>
      );
    })
    setFinalCards(finalCards);
  }, [])

  /**
   * Κλείνει το ενεργό modal 
   */
  const closeModal = () => {
    setModalStatus(false);
  }

  return (
    <Layout user={props}>
      {!props.isAuthenticated && <p>You have to login First</p> ||
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
              <Button onClick={() => setModalStatus(!modalIsOpen)} className="btn bg-primary">Προσθήκη Πρότασης</Button>
            </div>
          </div>
          <p>Παρακάτω φαίνονται οι προτάσεις που έχουν κατατεθεί</p>

          <div className="row">
            <div className="col-3">
              {finalCards}
            </div>
          </div>
        </div>
      }
      <MultiStepForm modalstatus={modalIsOpen} />
    </Layout>
  )
}