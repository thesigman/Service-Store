import styles from './adminBar.module.scss';
import AdminButton from './adminButton';
import AdminInfo from './adminInfo';
import { useState, useEffect } from 'react';


export default function AdminBar() {
  const [adminBarItem, setAdminBarItems] = useState([])

  useEffect(() => {
    let items = [];
    //Αναπαριστά την πληροφορία που θα λαμβάναμε απο το api
    let menuInfo = [
      {
        'icon': 'faHome',
        'title': 'Αρχική Σελίδα'
      },

      {
        'icon': 'faProjectDiagram',
        'title': 'Projects'
      },

      {
        'icon': 'faEdit',
        'title': 'Υπο επεξεργασία'
      },

      {
        'icon': 'faPaperPlane',
        'title': 'Εισερχόμενα'
      },

      {
        'icon': 'faUserCircle',
        'title': 'Το προφίλ μου',
        'url': '/profile'
      },

      {
        'icon': 'faCog',
        'title': 'Ρυθμίσεις'
      },
    ]
    for (let index = 0; index < 6; index++) {
      items = [...items,
      <div className="row">
        <AdminButton key={index}
          icon={menuInfo[index]['icon']}
          title={menuInfo[index]['title']}
          url={menuInfo[index]['url']}
        ></AdminButton>
      </div>
      ]
    }
    setAdminBarItems(items);
  }, []);

  return (
    <div className={[styles.adminBar, 'p-2'].join(' ')}>
      <AdminInfo></AdminInfo>
      <hr></hr>
      {adminBarItem}
    </div>
  )
}
