import { useState } from 'react';
import router from 'next/router';
import Image from 'next/dist/client/image';
import styles from './login.module.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import axios from './api/axiosConfiguration'

export default function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [messageText, setMessageText] = useState();



  const login = () => {
    const credentials = {
      'identifier' : username,
      'password' : password
    };
    axios.post('/auth/local', credentials)
    .then(function (response) {
      if(response.status == 200){
        setMessageText('');
        window.location.href = "/home";
      }
    }) .catch(function (error) {
      setMessageText('Invalid Username or Password');

    })
    .then(function () {
      // always executed
    });
  }


  return (

    <div className={['pagecenter'].join(' ')}>
 
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
                    <input onChange={event=>setUsername(event.target.value)} type="text"  placeholder="Username" />
                  </div>
                  <div className="mt-4 mb-4">
                    <h4>Password</h4>
                    <input onChange={event=>setPassword(event.target.value)} type="password" placeholder="Password" />
                  </div> 
                  <p className={[styles.contentmiddle, 'text-danger'].join(' ')} value={messageText}>{messageText}</p>
                  <div className="mt-4">
                    <button onClick={()=>login()} className="btn btn-small bg-primary btn-100" >Login</button>
                  </div>
                  <a href='/reset'>
                    <a className={[styles.contentmiddle , 'text-primary', 'mt-2'].join(' ')}>Forgot your password</a>
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