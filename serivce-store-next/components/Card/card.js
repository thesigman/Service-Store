import styles from './card.module.scss';

export default function Card(props) {
  return (
    <div className={[styles.card , 'm-2'].join(' ')}>
      <div className="p-2">
        <div className="row">
          <h5>{props.name}</h5>
        </div>
        <div>
          <span>{props.description}</span>
        </div>
        <div>
          <span className="badge badge-primary m-2">badge 1</span>
          <span className="badge badge-success m-2">badge 2</span>
        </div>
      </div>
    </div>
  )
}
