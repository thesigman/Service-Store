import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { toast, ToastContainer } from "react-nextjs-toast";
import { devteam2 } from "../../pages/api/axiosConfiguration";

const AgreementTitle = (props) => {
  const {
    title,
    description,
    signAgreement,
    handleAccepted,
    accepted,
    index,
    agreementAccept,
    role,
    status,
  } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  let baseURL = "http://islab-thesis.aegean.gr:5550/api";
  let providerUrl = `${baseURL}/articles/download?offerid=${props.offerid}`;
  let clientUrl = `${baseURL}/articles/download/unsigned?offerid=${props.offerid}`;
  let url = `${baseURL}/articles/download/signed?offerid=${props.offerid}`;

  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = async () => {
    // Create an object of formData
    let formData = new FormData();

    // Update the formData object
    formData.append("file", selectedFile);
    formData.append("role", role);
    formData.append("offerid", props.offerid);

    // Details of the uploaded file
    console.log("trying to upload");

    const response = await devteam2.post("/articles/upload", formData);
    console.log(response);

    response.data.message == "File is uploaded"
      ? toast.notify("Επιτυχής μεταφόρτωση αρχείου", {
          duration: 5,
          type: "success",
          title: "Service Store",
        })
      : toast.notify("Κάτι πήγε λάθος", {
          duration: 5,
          type: "error",
          title: "Service Store",
        });
  };

  return (
    <>
      <ToastContainer align={"left"} position={"bottom"} />
      {agreementAccept && role == "provider" && status == "signProvider" ? (
        <div className="row justify-content-end">
          <a
            href={providerUrl}
            className="btn bg-success d-flex align-items-center m-2"
            onClick={signAgreement}
            target="_blank"
          >
            Αποθήκευση και υπογραφή
          </a>
          <div className="col-xl-3">
            <div className="card rounded">
              <div className="card-body">
                <input
                  className="form-control  form-control-sm"
                  type="file"
                  name="file"
                  onChange={onFileChange}
                />
              </div>
            </div>
          </div>
          <button
            className="btn bg-secondaryGreenColor m-2"
            onClick={onFileUpload}
          >
            Μεταφόρτωση υπογεγραμμένης σύμβασης
          </button>
        </div>
      ) : role == "client" && status == "signClient" ? (
        <div className="row justify-content-end">
          <a
            href={clientUrl}
            className="btn bg-success d-flex align-items-center m-2"
            onClick={signAgreement}
            target="_blank"
          >
            Αποθήκευση πρότασης και υπογραφή
          </a>
          <div className="col-xl-3">
            <div className="card rounded">
              <div className="card-body">
                <input
                  className="form-control  form-control-sm"
                  type="file"
                  name="file"
                  onChange={onFileChange}
                />
              </div>
            </div>
          </div>
          <button
            className="btn bg-secondaryGreenColor m-2"
            onClick={onFileUpload}
          >
            Μεταφόρτωση υπογεγραμμένης σύμβασης
          </button>
        </div>
      ) : status == "signed" ? (
        <div className="row justify-content-end">
          {" "}
          <a
            href={url}
            className="btn bg-success d-flex align-items-center m-2"
            onClick={signAgreement}
            target="_blank"
          >
            Αποθήκευση υπογεγραμμένης σύμβασης
          </a>
        </div>
      ) : (
        " "
      )}
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
            disabled={props.status != "signProvider"}
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
