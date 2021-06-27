import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './rate.module.scss'

export default function Rate(props) {
  let stars = [];
  for (let i = 0; i < props.stars; i++) {
    stars = [...stars,
    <FontAwesomeIcon icon={faStar} className={props.starColor} />
    ]
  }

  return (
    <div className="container">
      <div className="row">
        <b>{props.title}</b></div>
      <div className="row">
        <div className="col">
          {stars}
        </div>

      </div>
    </div>

  )
}
