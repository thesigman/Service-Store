import Toggle from "react-toggle";
import "react-toggle/style.css";

const AgreementTitle = (props) => {
  // console.log(typeof props.accepted);
  const { title, description, saveAgreement, handleAccepted, accepted, index } =
    props;
  return (
    <>
      <div className="row justify-content-end">
        <button className="btn bg-success m-2">
          Αποθήκευση πρότασης και υπογραφή
        </button>
        <button
          className="btn bg-secondaryGreenColor m-2"
          onClick={saveAgreement}
        >
          Προσωρινή Αποθήκευση
        </button>
      </div>
      <div className="row justify-content-between">
        <div className="col-2">
          <h2> {title}</h2>
        </div>
        <div className="col align-self-center">
          <Toggle
            id={index}
            checked={accepted}
            value="yes"
            onChange={handleAccepted}
          />
          <label htmlFor={index}>αποδεκτό</label>
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
