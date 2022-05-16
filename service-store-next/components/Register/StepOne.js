import Select from "react-select";

const StepOne = (props) => {
  return (
    <div className="container-fluid m-2 p-2">
      <div className="row p-2">
        <h5 className="fs-5 text-primary">Στοιχεία Λογαριασμού</h5>
      </div>
      <div className="row p-2">
        <p className="fs-6 text-muted">
          Συμπληρώστε τα στοιχεία και προχωρήσετε στο επόμενο βήμα
        </p>
      </div>

      <div className="row p-2">
        <div className="row">
          <div className="col-xl-6">
            <div className="mb-3">
              <label
                htmlFor="username"
                className="form-label fs-6 text-primary"
              >
                Όνομα χρήστη
              </label>
              <input
                value={props.username}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                // style={styles}
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="απίθανο όνομα χρήστη"
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3">
              <label htmlFor="type" className="form-label fs-6 text-primary">
                Τύπος λογαριασμού
              </label>
              <Select
                name="type"
                id="type"
                inputId="type"
                options={[
                  { value: "Πελάτης", label: "Πελάτης" },
                  { value: "Πάροχος", label: "Πάροχος" },
                ]}
                onChange={(inputValue, obj) =>
                  props.handleValues(inputValue.value, obj.name)
                }
                defaultValue={
                  props.type ? [{ label: props.type, value: props.type }] : null
                }
                placeholder="Επιλέξτε τον τύπο λογαριασμού σας"
                loadingMessage={() => "Φόρτωση..."}
                noOptionsMessage={() => "Κανένα αποτέλεσμα"}
                isSearchable={false}
                styles={{
                  control: (base) => ({
                    ...base,
                    height: "3rem",
                    minHeight: "3rem",
                  }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label fs-6 text-primary"
              >
                Κωδικός πρόσβασης
              </label>
              <input
                value={props.password}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                type="password"
                placeholder="τουλάχιστον 8 χαρακτήρες"
                className="form-control"
                id="password"
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label fs-6 text-primary"
              >
                Επιβεβαίωση κωδικού πρόσβασης
              </label>
              <input
                value={props.confirmPassword}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                type="password"
                className="form-control"
                id="confirmPassword"
                disabled={props.password.length == 0 ? true : false}
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
        </div>
        <div className="row p-2 justify-content-end">
          <button
            onClick={() => {
              props.nextStep(), props.setWidth(props.width + 50);
            }}
            className="btn bg-primary btn-small m-2"
            disabled={
              props.username.length == 0 ||
              props.password.length == 0 ||
              props.confirmPassword.length == 0 ||
              props.type.length == 0
                ? true
                : false
            }
          >
            Επόμενο
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
