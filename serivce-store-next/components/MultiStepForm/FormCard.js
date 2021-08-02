import styles from "./form.module.scss";
import Step from "./Step/step";

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={styles.formCard}>
      {currentStep < 3 && (
        <>
          {currentStep > 0 && (
            <button
              className={styles.back}
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}
          <div className="row">
            <div className="col"> <Step step="1"></Step></div>
            <div className="col"> <Step step="2"></Step></div>
            <div className="col"> <Step step="3"></Step></div>
            
          </div>
          <span className={styles.steps}>Step {currentStep + 1} of 3</span>
        </>
      )}
      {children}
    </div>
  );
}
