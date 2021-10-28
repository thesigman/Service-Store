import styles from "./adminBar.module.scss";
import AdminButton from "./adminButton";
import AdminInfo from "./adminInfo";
import { useState, useEffect } from "react";

export default function AdminBar(props) {
  const [adminBarItem, setAdminBarItems] = useState([]);

  useEffect(() => {
    let items = [];
    //Αναπαριστά την πληροφορία που θα λαμβάναμε απο το api
    let menuInfo = [
      {
        icon: "faHome",
        title: "Αρχική Σελίδα",
        uri: "/home",
      },

      {
        icon: "faProjectDiagram",
        title: "Projects",
        uri: "/questionaire",
      },

      {
        icon: "faEdit",
        title: "Υπο επεξεργασία",
        uri: "/edit",
      },

      {
        icon: "faPaperPlane",
        title: "Εισερχόμενα",
        uri: "",
      },

      {
        icon: "faUserCircle",
        title: "Το προφίλ μου",
        uri: "/profile",
      },

      {
        icon: "faCog",
        title: "Ρυθμίσεις",
        uri: "/settings",
      },
    ];
    for (let index = 0; index < 6; index++) {
      items = [
        ...items,
        <div className="row">
          <AdminButton
            key={index}
            icon={menuInfo[index]["icon"]}
            title={menuInfo[index]["title"]}
            uri={menuInfo[index]["uri"]}
          ></AdminButton>
        </div>,
      ];
    }
    setAdminBarItems(items);
  }, []);

  return (
    <div className={[styles.adminBar, "p-2"].join(" ")}>
      <AdminInfo user={props.user}></AdminInfo>
      <hr></hr>
      {adminBarItem}
    </div>
  );
}
