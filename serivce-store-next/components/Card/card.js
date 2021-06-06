import styles from './card.module.scss';

export default function Card() {
  return (
    <div className={[styles.card , 'm-2'].join(' ')}>
      <div className="p-2">
        <div className="row">
          <h5>Card Title</h5>
        </div>
        <div>
          <span>Thats a message Card</span>
        </div>
        <div>
          <span className="badge badge-primary m-2">badge 1</span>
          <span className="badge badge-secondary m-2">badge 2</span>
        </div>
      </div>
    </div>
  )
}
