import styles from "../form.module.scss";
import { useFormData } from "../../../pages/api/formData";
import Selector from "../../Selector/selector";
export default function BillingInfo({ formStep, nextFormStep }) {
  const setFormValues = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };
  const values = [
    { 'name': 'Ελληνικά', 'value': 'GR' },
    { 'name': 'Αγγλικά', 'value': 'ΕΝ' },
  ]

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <form>
        <h5 className="text-center"><b>Ανάπτυξη Website</b></h5>
        <p className="text-center">Κατασκευή e-shop</p>
        <div className="row">
          <div className="col">
            <Selector placeholder=" Επιλέξτε Γλώσσα" values={values}></Selector>
          </div>
          <div className="col">
            <Selector placeholder="Κατηγορία Website" values={values}></Selector>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <Selector placeholder="Αριθμός Σελίδων" values={values}></Selector>
          </div>
        </div>
        <div className="d-flex float-end">
          <button onClick={nextFormStep} className=" mt-2 btn bg-primary btn-small">Επόμενο</button>
        </div>
      </form>
    </div>
  );
}
