import { faCog, faHandsHelping, faHome, faPaperPlane, faProjectDiagram, faSignOutAlt, faUserCircle, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AdminInfo from '../AdminBar/adminInfo';



export default function Layout(props) {

  const [role, setRole] = useState();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setRole(JSON.parse(window.sessionStorage.getItem('application_user')).role);
  }, []);

  const toggleStatus = () => {
    setStatus(!status);
  }


  return (
    <div className="min-vh-100">
      <header className="navbar bg-primary navbar-dark sticky-top flex-md-nowrap p-0 shadow ">
        <button className="navbar-toggler position-absolute d-md-none collapsed mr-3" onClick={toggleStatus} type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 m-2'>
          <Image
            src='/logo.png'
            width={191}
            height={27}
            loading="eager"
            to="http://localhost:3001"
          />
        </a>
      </header>
      <div className="containter-fluid">
        <div className="row">
          <nav id="sidebarMenu" className={(status) ? 'col-md-2 col-lg-2 d-md-block bg-dark sidebar collapse show' : 'col-md-2 col-lg-2 d-md-block bg-dark sidebar collapse'}>
            <div className='menu  position-sticky pt-3'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <AdminInfo user={props.user}></AdminInfo>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faHome} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/home"><a className="text-white">Αρχική</a></Link></b>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faProjectDiagram} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/questionaire"><a className="text-white">Projects</a></Link></b>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/chat"><a className="text-white">Εισερχόμενα</a></Link></b>
                  </a>
                </li>
                {role == "client" &&
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faHandsHelping} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/providers"><a className="text-white">Προτάσεις</a></Link></b>
                    </a>
                  </li>
                }
                <li className='nav-item'>
                  <hr className="bg-white b-2 bd-white" />
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faUserCircle} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/profile"><a className="text-white">Προφιλ</a></Link></b>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faWallet} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/ewallet"><a className="text-white">E-πορτοφόλι</a></Link></b>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faCog} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/ewallet"><a className="text-white">Ρυθμίσεις</a></Link></b>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-white" ></FontAwesomeIcon>
                    <b className="text-white"> <Link href="/login"><a className="text-white">Αποσύνδεση</a></Link></b>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-11 ms-sm-auto col-lg-10 px-md-4">{props.children}</main>
        </div>
      </div>

    </div>
  );
}

