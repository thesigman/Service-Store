import Image from 'next/image';
import styles from './navigation.module.scss'
import Search from '../Search/search';
import { faBell, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavigationBar() {
  return (
    <nav className={[styles.navbarcustom, 'navbar', 'navbar-expand-lg', 'navbar-static-top'].join(' ')}>
      <div className="container-fluid">
        <div className="navbar-header">
          <Image
            src='/logo.png'
            width={191}
            height={27}
            loading="eager"
            to="http://localhost:3001" />
            <a href="http://localhost:3001"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
    
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Search></Search>
          </li>
          <li className="nav-link"> <FontAwesomeIcon icon={faBell} className="text-white" ></FontAwesomeIcon></li>
          <li className="nav-link"><FontAwesomeIcon icon={faQuestionCircle} className="text-white" ></FontAwesomeIcon></li>
          <li className="nav-link"><FontAwesomeIcon icon={faCog} className="text-white" ></FontAwesomeIcon></li>
        </ul>
      </div>
    </nav>
  )
}
