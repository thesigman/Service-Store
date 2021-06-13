import styles from './adminBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function AdminInfo() {
  return (
    <div className={[styles.adminInfo , 'm-2'].join(' ')}>
      <div className="row h-100">
        <div className="col-2 h-100">
          <FontAwesomeIcon icon={faAt} className="text-secondary text-senter m-2 , icon-4x"></FontAwesomeIcon>
        </div>
        <div className="col">
          <div className="row"><b className="text-right">Username</b></div>
          <div className="row"><span className="text-start">Organizarion Name</span></div>
        </div>
      </div>
    </div>
  );
}