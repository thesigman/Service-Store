import axios from 'axios';
import { useState } from 'react';
import router from 'next/router';
import Image from 'next/dist/client/image';
import styles from './login.module.scss';
import stylesin from '../components/Search/search.module.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  var default_credentials = {
    username: "thanos",
    password: "thanos"
  };


  const login = () => {
    if (username == default_credentials.username && password == default_credentials.password) {
      router.push('/');
    }
  }


  return (
    <div className={[styles.pagecenter].join(' ')}>
      <div>
        <div>
          <div className={[styles.login].join(' ')}>
            <div className="container">
              <div className={[styles.formcontentwrapper, 'bg-white', 'col'].join(' ')}>
                <Image
                  src='/logo_dark.png'
                  width={2000}
                  height={412}
                  loading="eager" />
                <div className={[styles.formcontent].join(' ')}>
                  <div>
                    <h4>Username</h4>
                    <input type="text" className={[stylesin.faIcon, stylesin.Search].join(' ')} placeholder="&#xf002; Username" />
                  </div>
                  <div className="mt-4 mb-4">
                    <h4>Password</h4>
                    <input type="text" className={[stylesin.faIcon, stylesin.Search].join(' ')} placeholder="&#xf002; Password" />
                  </div>
                  <div className="mt-4">
                    <button className="btn bg-primary btn-100" >Login</button>
                  </div>
                  <a href='/reset'>
                    <span className={[styles.contentmiddle, styles.forgotpassword].join(' ')}>Forgot your password</span>
                  </a>
                  <div className={[styles.separator, 'mb-2', 'mt-2'].join(' ')}> or </div>
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