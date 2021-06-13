import styles from './adminBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSitemap } from '@fortawesome/free-solid-svg-icons';
export default function AdminButton() {
  return (
    <button className={[styles.adminButton , 'm-2'].join(' ')}>
      <div className="row ">
        <div className="col-2">
          <FontAwesomeIcon icon={faSitemap} className="text-white" ></FontAwesomeIcon>
        </div>
        <div className="col">
          <b className="text-white"> Menu Item</b>
        </div>
      </div>


    </button>
  )
}