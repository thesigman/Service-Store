import styles from './adminBar.module.scss';
import AdminButton from './adminButton';
import AdminInfo from './adminInfo';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faCog, faPaperPlane, faHome, faEdit, faUserCircle, faProjectDiagram, faSignOutAlt, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function AdminBar(props) {
  const [role, setRole] = useState();
  useEffect(() => {
    setRole(JSON.parse(window.sessionStorage.getItem('application_user')).role);
  }, []);

  return (
    <div className={[styles.adminBar, 'p-2'].join(' ')}>
      <AdminInfo user={props.user}></AdminInfo>
      <hr></hr>
      <button className={[styles.adminButton, 'm-2'].join(' ')}>
        <div className="row">
          <div className="col-2">
            <FontAwesomeIcon icon={faHome} className="text-white" ></FontAwesomeIcon>
          </div>
          <div className="col-6">
            <b className="text-white"> <Link href="/home"><a className="text-white">Αρχική</a></Link></b>
          </div>
        </div>
      </button>
      <button className={[styles.adminButton, 'm-2'].join(' ')}>
        <div className="row">
          <div className="col-2">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-white" ></FontAwesomeIcon>
          </div>
          <div className="col-8">
            <b className="text-white"> <Link href="/questionaire"><a className="text-white">Κατάθεση Πρότασης</a></Link></b>
          </div>
        </div>
      </button>
      {role == "client" &&
        <button className={[styles.adminButton, 'm-2'].join(' ')}>
          <div className="row ">
            <div className="col-2">
              <FontAwesomeIcon icon={faEdit} className="text-white" ></FontAwesomeIcon>
            </div>
            <div className="col-10">
              <b className="text-white"> <Link href="/providers"><a className="text-white">Προτάσεις Υπο επεξεργασία</a></Link></b>
            </div>
          </div>
        </button>
      }
      <hr className="bg-white b-2 bd-white" />
      <button className={[styles.adminButton, 'm-2'].join(' ')}>
        <div className="row ">
          <div className="col-2">
            <FontAwesomeIcon icon={faUserCircle} className="text-white" ></FontAwesomeIcon>
          </div>
          <div className="col-6">
            <b className="text-white"> <Link href="/profile"><a className="text-white">Προφιλ</a></Link></b>
          </div>
        </div>
      </button>
      <button className={[styles.adminButton, 'm-2'].join(' ')}>
        <div className="row ">
          <div className="col-2">
            <FontAwesomeIcon icon={faWallet} className="text-white" ></FontAwesomeIcon>
          </div>
          <div className="col-6">
            <b className="text-white"> <Link href="/ewallet"><a className="text-white">E-πορτοφόλι</a></Link></b>
          </div>
        </div>
      </button>
      <button className={[styles.adminButton, 'm-2'].join(' ')}>
        <div className="row ">
          <div className="col-2">
            <FontAwesomeIcon icon={faCog} className="text-white" ></FontAwesomeIcon>
          </div>
          <div className="col-6">
            <b className="text-white"> <Link href="/"><a className="text-white">Ρυθμίσεις</a></Link></b>
          </div>
        </div>
      </button>
      <button className={[styles.adminButton, 'm-2'].join(' ')}>
        <div className="row ">
          <div className="col-2">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-white" ></FontAwesomeIcon>
          </div>
          <div className="col-6">
            <b className="text-white"> <Link href="/login"><a className="text-white">Αποσύνδεση</a></Link></b>
          </div>
        </div>
      </button>
    </div>
  )
}