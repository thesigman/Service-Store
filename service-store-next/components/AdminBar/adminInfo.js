import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './adminBar.module.scss';
export default function AdminInfo(props) {
  const [username, setUserName] = useState('username');
  const [orgname, setOrgName] = useState('orgName');

  useEffect(() => {
    setUserName(props.user.user.username);
    setOrgName(props.user.user.email);
  });
  return (
    <div className={[styles.adminInfo , 'm-2'].join(' ')}>
      <div className="row h-100">
        <div className="col-2 h-100">
          <FontAwesomeIcon icon={faAt} className="text-secondary text-senter m-2 , icon-4x"></FontAwesomeIcon>
        </div>
        <div className="col">
          <div className="row"><b className="text-right">{username}</b></div>
          <div className="row"><span className="text-start">{orgname}</span></div>
        </div>
      </div>
    </div>
  );
}
