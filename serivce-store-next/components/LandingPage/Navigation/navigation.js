
import styles from './navigation.module.scss';
import Image from 'next/image';


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
        <Nav className="mr-auto">
          <Nav.Link >Αρχική</Nav.Link>
          <Nav.Link >Υπηρεσίες</Nav.Link>
          <Nav.Link >Πoιοί είμαστε</Nav.Link>
          <Nav.Link >Για επαγγελματίες</Nav.Link>
          <Nav.Link >Επικοινωνία</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default navigation;