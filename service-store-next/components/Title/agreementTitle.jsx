import Toggle from "react-toggle";
import "react-toggle/style.css";

const AgreementTitle = (props) => {
  // console.log(typeof props.accepted);
  const { title, description, signAgreement, handleAccepted, accepted, index } =
    props;

  let baseURL = "http://islab-thesis.aegean.gr:5550/api";
  let url = `${baseURL}/articles/download?offerid=${props.offerid}`;
  return (
    <>
      <div className="row justify-content-end">
        <a
          href={url}
          className="btn bg-success d-flex align-items-center m-2"
          onClick={signAgreement}
          target="_blank"
        >
          Αποθήκευση πρότασης και υπογραφή
        </a>
        {/* <button className="btn bg-secondaryGreenColor m-2">
          Προσωρινή Αποθήκευση
        </button> */}
      </div>
      <div className="row justify-content-start">
        <div className="col-xl-3">
          <h2> {title}</h2>
        </div>
        <div className="col-xl-9 align-self-center">
          <Toggle
            id={index}
            checked={accepted}
            value="yes"
            onChange={handleAccepted}
          />
          <label className="fw-bold" htmlFor={index}>
            αποδεκτό
          </label>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col align-self-end">
          <p>{description}</p>
        </div>
        <button className="btn btn-small m-2 bg-secondaryGreenColor">
          Προηγούμενος τομέας
        </button>

        <button className="btn btn-small m-2 bg-primary">
          Επόμενος τομέας
        </button>
      </div>
    </>
  );
};

export default AgreementTitle;
