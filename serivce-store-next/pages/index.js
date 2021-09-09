import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navigation from "../components/Navigation/navigation";
import MessageCard from "../components/Card/messageCard";
import Card from "../components/Card/card";
import TaskCard from "../components/Card/taskCard";
import AdminBar from "../components/AdminBar/adminBar";
import Layout from "../components/Layout/layout";
import "bootstrap/dist/css/bootstrap.css";

import { useState, useEffect } from "react";

export default function Home() {
  /**
   * Το state και το effect θα χρησιμοποιηθο΄ύν για την οργάνωση της πληροφορίας
   * Ωστόσο η πληροφορία αρχικά θα οργανωθεί σε πίνακες προκειμένου να ολοκληρωθούν οι εργασίες
   * ανεξάρτητα της πορείας του api
   */
  const [toDOsCount, setTODos] = useState();
  const [inProgressCount, setInProgress] = useState();
  const [doneCount, setDone] = useState();
  const [messagesCount, setMessages] = useState();

  useEffect(() => {
    /**
     * Τρέχει όταν φορτώνει η σελίδα εδώ θα γίνει το request με την βάση
     */
    setTODos(8);
    setInProgress(3);
    setDone(4);
    setMessages(5);
  });

  /**
   * TaskCard αποτελείτ την μεγάλη κάρτα που αναπαριστά κάθε κατηγορία
   * Η κάρτα για να εμφανιστεί θα πρέπει να ξέρει τον τιτλο το χρώμα
   * Ο αριθμός των στοιχείων χρησιμεύει στο πόσα στοιχεία θα πρέπει να ρεντάρει
   * και ο τύπος στο να γνωρίζει ποιο endpoint θα πρέπει να καλέσει
   */

  return (
    <Layout>
      <div className="row">
        <div className="col-3">
          <TaskCard
            title="To Do"
            cardBg="bg-primary"
            counter={toDOsCount}
            type="todo"
          ></TaskCard>
        </div>
        <div className="col-3">
          <TaskCard
            title="In progess"
            cardBg="bg-secondary"
            counter={inProgressCount}
            type="progress"
          ></TaskCard>
        </div>
        <div className="col-3">
          <TaskCard
            title="Done"
            cardBg="bg-success"
            counter={doneCount}
            type="done"
          ></TaskCard>
        </div>
        <div className="col-3">
          <TaskCard
            title="Messages"
            cardBg="bg-gray"
            counter={messagesCount}
            type="message"
          ></TaskCard>
        </div>
      </div>
    </Layout>
  );
}
