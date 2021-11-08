import styles from './card.module.scss';

export default function MessageCard() {
  return (
    <div className={[styles.card , 'm-2'].join(' ')}>
      <div className="p-2">
        <div className="row">
          <h5>Message Title</h5>
        </div>
        <div>
          <span>Kαλησπέρα</span>
        </div>
        <div className={styles.cardFooter}>
          <button className="btn btn-primary bg-primary m-2">Procceed</button>
          <button className="btn btn-primary bg-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}

