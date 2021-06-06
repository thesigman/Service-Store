import Image from 'next/image';
import styles from './navigation.module.scss'
import Search from '../Search/search';
import { faBell, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavigationBar() {
  return (
    <nav className={[styles.navbarcustom, 'navbar', 'navbar-inverse', 'navbar-static-top'].join(' ')}>
      <div className="container">
        <div className="navbar-header">
          <Image
            src='/logo.png'
            width={191}
            height={27}
            loading="eager" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
    
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Search></Search>
          </li>
          <li> <FontAwesomeIcon icon={faBell} className="text-white" ></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faQuestionCircle} className="text-white" ></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faCog} className="text-white" ></FontAwesomeIcon></li>
        </ul>
      </div>
    </nav>
  )
}
