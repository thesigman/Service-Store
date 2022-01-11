import Image from 'next/dist/client/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-nextjs-toast';
import { loginUser } from '../libs/auth';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import styles from './login.module.scss';


export default function login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Κάθε φορά που γυρίζουμε στο Login καθαρίζουμε το session storage 
  // ώστε να αλλάζει ο ενεργός χρήστης
  useEffect(() => {
    window.sessionStorage.clear();
    props.setIsAuthenticated(false);
  }, [])


  // Σύνδεση του χρήστη στην εφαρμογή
  const checkUserLogin = async (username, password) => {
    if (await loginUser(username, password, props)) {
      Router.push("/home");
    } else {
      toast.notify(
        'Λάθος Συνδιασμός Ονόματος / Κωδικού Πρόσβασης',
        { duration: 5, type: "error", title: "Service Store" }
      );
    }
  }

  return (
    <div className={['pagecenter'].join(' ')}>
      <ToastContainer align={"left"} position={"bottom"} />
      <div>
        <div>
          <div className={[styles.login].join(' ')}>
            <div className="container-fluid">
              <div className={[styles.formcontentwrapper, 'bg-white', 'col'].join(' ')}>
                <Image
                  src='/logo_dark.png'
                  width={2000}
                  height={412}
                  loading="eager" />
                <div className={[styles.formcontent].join(' ')}>
                  <div>
                    <h4>Username</h4>
                    <input onChange={event => setUsername(event.target.value)} type="text" placeholder="Username" />
                  </div>
                  <div className="mt-4 mb-4">
                    <h4>Password</h4>
                    <input onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
                  </div>
                  <div className="mt-4">
                    <button onClick={() => checkUserLogin(username, password)} className="btn btn-small bg-primary btn-100" >Σύνδεση</button>
                  </div>
                  <a href='/register'>
                    <a className={[styles.contentmiddle, 'text-primary', 'mt-2'].join(' ')}>Εγγραφή στην πλατφόρμα</a>
                  </a>
                  <div className={['separator', 'mb-2', 'mt-2'].join(' ')}> or </div>
                  <div className={[styles.contentmiddled].join(' ')}>
                    <p>Alternative Method</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
