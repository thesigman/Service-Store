import { useState, useEffect, useRef } from "react";
// import { Modal } from "bootstrap";
// import { Modal } from "bootstrap";
// import { useState, useEffect, useRef } from "react";

const ChatTitle = () => {
  // const [modal, setModal] = useState(null);
  // const exampleModal = useRef();

  // useEffect(() => {
  //   setModal(new Modal(exampleModal.current));
  // }, []);
  return (
    <>
      <div className="row justify-content-between">
        <div className="col">
          <h2>ChatRoom με Γιώργος Χ.</h2>
          <span>Πρόταση για papoutsiakokkina.gr</span>
        </div>
        {/* <div className="col-3"> */}
        <button
          className="btn bg-danger m-2"
          data-bs-toggle="modal"
          data-bs-target="#acceptanceModal"
        >
          Απόρριψη Πρότασης
        </button>
        {/* </div> */}
        {/* <div className="col-3"> */}
        <button className="btn bg-success m-2">Αποδοχή Πρότασης</button>
        {/* </div> */}
      </div>
      <div className="row justify-content-between">
        <div className="col-9">
          <button className="btn btn-secondary">
            Προβολή Συνημμένων/Απεσταλμένων αρχείων
          </button>
        </div>

        <button className="btn btn-primary m-2">Μετάβαση στη πρόταση</button>
      </div>
      {/* <button
        type="button"
        onClick={() => modal.show()}
        className="btn btn-primary"
      >
        Launch demo modal
      </button> */}
      {/* Modal */}
      {/* <div
        className="modal fade"
        ref={exampleModal}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => modal.hide()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* End of Modal */}
    </>
  );
};

export default ChatTitle;
