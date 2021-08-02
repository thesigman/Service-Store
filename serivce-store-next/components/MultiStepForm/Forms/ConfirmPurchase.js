import styles from "../form.module.scss";
import { useFormData } from "../context/index";

export default function ConfirmPurchase({ formStep, nextFormStep }) {
  const  setFormValues  = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Confirm Purchase</h2>

      <form>
        <div className={styles.formRow}>
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" />
            Ready to go?
          </label>
        </div>
        <button type="button" onClick={nextFormStep}>
          Confirm purchase
        </button>
      </form>
    </div>
  );
}
