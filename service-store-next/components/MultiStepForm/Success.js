import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Success = (props) => {
  return (
    <div className="container-fluid">
      <div className="row p-2 text-center">
        <div className="col">
          <FontAwesomeIcon
            className="text-success"
            icon={faCheckCircle}
            fontSize={100}
          />
        </div>
      </div>
      <div className="row p-2 text-center">
        <p className="fs-5">Το αίτημα καταχωρήθηκε με επιτυχία!</p>
      </div>
      <div className="row p-2 text-center">
        <p className="fs-6">
          Μπορείτε να δείτε την κατάστασή του στη σελίδα των πρότζεκτ.
        </p>
      </div>
      <div className="row justify-content-center">
        <button
          className=" m-2 btn bg-primary btn-small"
          onClick={props.closeModal}
        >
          κλείσιμο
        </button>
      </div>
    </div>
  );
};

export default Success;
