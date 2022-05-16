import Select from "react-select";
import AsyncSelect from "react-select/async";

import { doys } from "../../libs/doy";

const StepTwo = (props) => {
  const handleService2 = (inputValue) => {
    console.log("inputValue: ", inputValue);
    props.setSelectedService2(inputValue);
  };

  return (
    <div className="container-fluid m-2 p-2">
      <div className="row p-2">
        <h5 className="fs-5 text-primary">Επαγγελματικά Στοιχεία</h5>
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
                htmlFor="NameOfCompany"
                className="form-label fs-6 text-primary"
              >
                Όνομα εταιρείας
              </label>
              <input
                value={props.NameOfCompany}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                type="text"
                className="form-control"
                id="NameOfCompany"
                aria-describedby="NameOfCompany"
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3">
              <label htmlFor="AFM" className="form-label fs-6 text-primary">
                Αριθμός Φορολογικού Μητρώου Εταιρείας
              </label>
              <input
                type="text"
                className="form-control"
                id="AFM"
                value={props.AFM}
                onChange={(inputValue) =>
                  props.handleValues(
                    inputValue.target.value,
                    inputValue.target.id
                  )
                }
                style={{ minHeight: "3rem !important" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="mb-3">
              <label
                htmlFor="TypeOfCompany"
                className="form-label fs-6 text-primary"
              >
                Τύπος εταιρείας
              </label>
              <Select
                name="TypeOfCompany"
                id="TypeOfCompany"
                inputId="TypeOfCompany"
                options={[
                  { value: "Εταιρεία Α.Ε", label: "Εταιρεία Α.Ε" },
                  {
                    value: "Εταιρεία Περιορισμένης Ευθύνσης Ε.Π.Ε",
                    label: "Εταιρεία Περιορισμένης Ευθύνσης Ε.Π.Ε",
                  },
                  {
                    value: "Ομόρρυθμες Εταιρείες Ο.Ε",
                    label: "Ομόρρυθμες Εταιρείες Ο.Ε",
                  },
                  {
                    value: "Ετερόρρυθμες Εταιρείες Ε.Ε",
                    label: "Ετερόρρυθμες Εταιρείες Ε.Ε",
                  },
                  {
                    value: "Ιδιωτικές Κεφαλαιουχικές Εταιρείες Ι.Κ.Ε",
                    label: "Ιδιωτικές Κεφαλαιουχικές Εταιρείες Ι.Κ.Ε",
                  },
                ]}
                onChange={(inputValue, obj) =>
                  props.handleValues(inputValue.value, obj.name)
                }
                defaultValue={
                  props.TypeOfCompany
                    ? [
                        {
                          label: props.TypeOfCompany,
                          value: props.TypeOfCompany,
                        },
                      ]
                    : null
                }
                placeholder="Επιλέξτε τον τύπο της εταιρείας σας"
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
          <div className="col-xl-6">
            <div className="mb-3">
              <label
                htmlFor="service2"
                className="form-label fs-6 text-primary"
              >
                Δραστηριότητα εταιρείας
              </label>
              <AsyncSelect
                value={props.selectedService2}
                instanceId="service2"
                name="servive2"
                id="servive2"
                inputId="servive2"
                loadOptions={props.searchService2}
                placeholder="Αναζητήστε δραστηριότητα εταιρείας"
                onChange={handleService2}
                loadingMessage={() => "Φόρτωση..."}
                noOptionsMessage={() => "Κανένα αποτέλεσμα"}
                isMulti
                styles={{
                  control: (base) => ({
                    ...base,
                    // height: "3rem",
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
              <label htmlFor="DOY" className="form-label fs-6 text-primary">
                Δημόσια Οικονομική Υπηρεσία εταιρείας
              </label>
              <Select
                name="DOY"
                id="DOY"
                inputId="DOY"
                options={doys}
                onChange={(inputValue, obj) =>
                  props.handleValues(inputValue.label, obj.name)
                }
                defaultValue={
                  props.DOY ? [{ label: props.DOY, value: props.DOY }] : null
                }
                placeholder="Επιλέξτε τον τύπο της εταιρείας σας"
                loadingMessage={() => "Φόρτωση..."}
                noOptionsMessage={() => "Κανένα αποτέλεσμα"}
                styles={{
                  control: (base) => ({
                    ...base,
                    height: "3rem",
                    minHeight: "3rem",
                  }),
                }}
              />
              <div id="DOY" className="form-text">
                Μπορείτε να αναζητήσετε και πληκτρολογώντας το όνομα της ΔΟΥ
              </div>
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
              props.nextStep(), props.setWidth(props.width + 50);
            }}
            className="btn bg-primary btn-small m-2"
            disabled={
              props.NameOfCompany.length == 0 ||
              props.TypeOfCompany.length == 0 ||
              props.AFM.length == 0 ||
              props.DOY.length == 0 ||
              props.selectedService2 == null
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

export default StepTwo;
