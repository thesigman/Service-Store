import styles from './adminBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faCog, faPaperPlane, faHome, faEdit, faUserCircle, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
export default function AdminButton(props) {
  return (
    <button className={[styles.adminButton , 'm-2'].join(' ')}>
      <div className="row ">
        <div className="col-2"> 
          <FontAwesomeIcon icon={faHome} className="text-white" ></FontAwesomeIcon>
        </div>
        <div className="col-6">
          <b className="text-white"> <Link href={props.uri}><a className="text-white">{props.title}</a></Link></b>
        </div>
      </div>
    </button>
  )
}