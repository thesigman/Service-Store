import { faBrush, faChartLine, faComment, faFileContract, faHandsHelping, faHome, faPaperPlane, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function AdminLayout(props) {

  const [role, setRole] = useState();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setRole(JSON.parse(window.sessionStorage.getItem('application_user')).role);
  }, []);

  const toggleStatus = () => {
    setStatus(!status);
  }


  return (
    <>
      <div>
        <header className="navbar bg-dark navbar-dark sticky-top flex-md-nowrap p-0 shadow ">
          <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 m-2'>
            <Image
              src='/logo.png'
              width={191}
              height={27}
              loading="eager"
              to="http://localhost:3001"
            />
          </a>
          <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </header>
        <div className="containter-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-md-block bg-dark sidebar collapse">
              <div className='menu  position-sticky pt-3'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faChartLine} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/dashboard"><span style={{ cursor: "pointer" }} className="text-white">Dashboard</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <hr className="bg-white b-2 bd-white" />
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faUserCircle} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/entities/users"><span style={{ cursor: "pointer" }} className="text-white">Χρήστες</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faPaperPlane} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/entities/requests"><span style={{ cursor: "pointer" }} className="text-white">Αιτήματα</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faHandsHelping} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/entities/offers"><span style={{ cursor: "pointer" }} className="text-white">Προτάσεις</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faFileContract} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/entities/contracts"><span style={{ cursor: "pointer" }} className="text-white">Συμβάσεις</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <hr className="bg-white b-2 bd-white" />
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faBrush} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/app/colors"><span style={{ cursor: "pointer" }} className="text-white">Χρωματισμοί</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faComment} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/app/texts"><span style={{ cursor: "pointer" }} className="text-white">Λεκτικά</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faHome} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/admin/app/home"><span style={{ cursor: "pointer" }} className="text-white">Ρύθμιση Αρχικής Σελίδας</span></Link></b>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <hr className="bg-white b-2 bd-white" />
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <FontAwesomeIcon icon={faSignOutAlt} className="text-white" ></FontAwesomeIcon>
                      <b className="text-white"> <Link href="/login"><span style={{ cursor: "pointer" }} className="text-white">Αποσύνδεση</span></Link></b>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 overflow-auto">{props.children}</main>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

