import { useState } from "react";
import Link from "next/link";

const StepThree = (props) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="container-fluid m-2 p-2">
      <div className="row p-2">
        <h5 className="fs-5 text-primary">Στοιχεία επικοινωνίας</h5>
      </div>
      <div className="row p-2">
        <p className="fs-6 text-muted">
          Συμπληρώστε τα στοιχεία και πατήστε 'Εγγραφή' για να ολοκληρωθεί η
          εγγραφή σας
        </p>
      </div>
      <div className="row p-2">
        <div className="row">
          <div className="col-xl-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-6 text-primary">
                Email εταιρείας
              </label>
              <input
                value={props.email}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                type="email"
                className="form-control"
                id="email"
                aria-describedby="company email"
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label fs-6 text-primary">
                Τηλέφωνο εταιρείας
              </label>
              <input
                value={props.Phone}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                type="Phone"
                className="form-control"
                id="Phone"
                aria-describedby="company Phone"
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10">
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="check"
                onChange={handleCheck}
                checked={checked}
              />
              <label className="form-check-label" htmlFor="check">
                Συμφωνώ με τους <Link href="/policy">Όρους χρήσης</Link> και τις
                άδειες χρήσης του ServiceStore
              </label>
            </div>
          </div>
        </div>

        <div className="row p-2 justify-content-end">
          <button
            onClick={() => {
              props.prevStep(), props.setWidth(props.width - 50);
            }}
            className="btn bg-primary btn-small m-2"
          >
            Προηγούμενο
          </button>
          <button
            onClick={() => {
              props.nextStep(), props.seeState(), props.registerUser();
            }}
            className="btn bg-primary btn-small m-2"
            disabled={
              checked && props.Phone.length !== 0 && props.email.length !== 0
                ? false
                : true
            }
          >
            Εγγραφή
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
