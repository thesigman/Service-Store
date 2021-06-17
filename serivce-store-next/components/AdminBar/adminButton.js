import styles from './adminBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPaperPlane, faHome, faEdit, faUserCircle, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
export default function AdminButton(props) {
  return (
    <button className={[styles.adminButton , 'm-2'].join(' ')}>
      <div className="row ">
        <div className="col-2">
          <FontAwesomeIcon icon={faCog} className="text-white" ></FontAwesomeIcon>
        </div>
        <div className="col">
          <b className="text-white"> {props.title}</b>
        </div>
      </div>


    </button>
  )
}