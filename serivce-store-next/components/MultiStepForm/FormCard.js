import styles from "./form.module.scss";

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={[styles.formCard, 'p-4'].join(' ')}>
      <span className={styles.steps}>Step {currentStep + 1} of 3</span>
      {children}
    </div>
  );
}
