import { useState } from "react";
import Modal from "react-modal";
import moment from "moment";

const ProjectCard = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FFFFFF",
      width: "70%",
      height: "80vh",
    },

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 1)",
    // borderRadius: "26px",
    // box-shadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
    // {border-radius: "6px"}
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function getBadgeClass() {
    let classes = "";
    classes +=
      props.badge2 == "Open"
        ? "badge badge-success m-2"
        : props.badge2 == "Rejected"
        ? "badge badge-danger m-2"
        : "badge badge-primary m-2";
    return classes;
  }

  return (
    <>
      <div className="card p-1 m-1 shadow">
        <div className="card-body">
          <h5 className="card-title">{props.request.name}</h5>
          <div className="row">
            <div className="col">
              <span className="badge badge-primary m-2">{props.badge1}</span>
            </div>
            <div className="col">
              <span className={getBadgeClass()}>{props.badge2}</span>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-2">
              <button className="btn bg-primary btn-small" onClick={openModal}>
                Λεπτομέρειες
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col">
              <h5>{props.request.name}</h5>
            </div>
            <button className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="row p-2">
            <span className="text-muted">
              {props.request.domain.slice(2)} {" > "}
              {props.request.service_1.slice(3)}
              {" > "}
              {props.request.service_2.slice(5)}
            </span>
          </div>
          <div className="row p-2">
            <div className="col">
              Κατάσταση:{" "}
              <span className={getBadgeClass()}>{props.request.status}</span>
            </div>
          </div>
          <div className="row p-2">
            <span className="text-muted">
              Ημερομηνία δημιουργίας:{" "}
              {moment(props.request.created).format("llll")}
            </span>
          </div>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-sm table-bordered border-dark caption-top p-2 m-2">
                <caption>Πληροφορίες</caption>
                {/* <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                </tr>
              </thead> */}
                <tbody>
                  {/* NOMIZA oti oi apanthseis me nai/oxi antistoixoun se true/false sth vash kai oxi
                    strings "NAI" kai "OXI" */}
                  {/* {props.request.answears.answear.length > 0
                  ? props.request.answears.answear.map((item, index) => (
                      <tr>
                      <td>
                        {props.request.answears.quest[index] === true
                          ? "Ναι"
                          : props.request.answears.quest[index] == false
                          ? "Όχι"
                          : props.request.answears.quest[index]}
                      </td>
                        <td>{item}</td>
                      </tr>
                    ))
                  :  (
                    <tr key={"nodetails"}>
                      <td>No details</td>
                      <td>No details</td>
                    </tr>
                  )} */}
                  {/* elegxoume ean uparxei kati sto answeAr tou answeArs */}
                  {/* ean uparxei tote ftiaxnoume grammes pinaka me duo sthles. Sth prwth sthlh
                  vazoume thn erwthsh. Sthn deuterh sthlh vazoume thn apanthsh. */}
                  {props.request.answears.answear.length > 0 ? (
                    props.request.answears.answear.map((item, index) => (
                      <tr key={props.request.answears.quest[index]}>
                        <td>{props.request.answears.quest[index]}</td>
                        <td>{item}</td>
                      </tr>
                    ))
                  ) : (
                    //   ean den uparxei kati sto answeAr tote vazoume no details
                    <tr key={"nodetails"}>
                      <td>No details</td>
                      <td>No details</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
