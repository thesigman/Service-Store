import styles from './adminBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import axios from '../../pages/api/axiosConfiguration'
import { useEffect, useState } from 'react';
export default function AdminInfo() {
  const [username, setUserName] = useState('username');
  const [orgname, setOrgName] = useState('orgName');

  useEffect(() => {
    axios.get('/providers')
  .then(function (response) {
    setUserName(response.data[0].NameOfCompany);
    setOrgName(response.data[0].NameOfCompany);
  }) .catch(function (error) {
    // Σε περίπτωση που δεν έχει πρόσβαση η υπάρχει error θα προστεθεί εδώ
  })
  .then(function () {
    // always executed
  });
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