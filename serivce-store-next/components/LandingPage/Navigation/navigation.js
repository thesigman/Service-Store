
import styles from './navigation.module.scss';
import Image from 'next/image';
import { Link } from 'react-scroll';


import { Navbar, Nav } from 'react-bootstrap'

const navigation = () => {
  return (
    <Navbar className={styles.navbar} sticky="top">
      <div className={styles.navbarlogo} href="#home">
        <Image
          src='/logo.png'
          width={191}
          height={27}
          loading="eager"
          to="http://localhost:3001" />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-4">
          <li className="mr-2"><Link to="home" spy={true} smooth={true}>Αρχική</Link></li>
          <li className="mr-2"><Link offset={-70} to="services" spy={true} smooth={true}>Πακέτα Υπηρεσιών</Link></li>
          <li className="mr-2"><Link offset={-70} to="whoarewe" spy={true} smooth={true}>Ποιοί Είμαστε</Link></li>
          <li className="mr-2"><Link offset={70} to="feedback" spy={true} smooth={true}>Τι λένε για εμάς</Link></li>
          <li className="mr-2"><Link to="contanct" spy={true} smooth={true}>Επικοινωνία</Link></li>
        </ul>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default navigation;