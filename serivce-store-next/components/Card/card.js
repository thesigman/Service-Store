import styles from './card.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className="p-2">
        <div className="row">
          <span className={styles.cardTitle}>The Title</span>
        </div>
        <div className={styles.cardBody}>
          <span>Kαλησπέρα</span>
        </div>
        <div className={styles.classFooter}>
          <button className="btn btn-primary bg-primary m-2">Procceed</button>
          <button className="btn btn-primary bg-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}