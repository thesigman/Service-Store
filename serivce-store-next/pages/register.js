import { useState } from 'react';
import Image from 'next/dist/client/image';
import styles from './login.module.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {loginUser} from "../libs/auth";


export default function login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [messageText, setMessageText] = useState();
  console.log(props);
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
                  <div>
                    <h4>E-mail</h4>
                    <input onChange={event=>setUsername(event.target.value)} type="text"  placeholder="Username" />
                  </div>
                    <h4>Password</h4>
                    <input onChange={event=>setPassword(event.target.value)} type="password" placeholder="Password" />
                    <h4>V.A.T Number</h4>
                    <input onChange={event=>setPassword(event.target.value)} type="password" placeholder="Password" />
                  <p className={[styles.contentmiddle, 'text-danger'].join(' ')} value={messageText}>{messageText}</p>
                  <div className="mt-4">
                    <button onClick={()=>loginUser(username, password, props)} className="btn btn-small bg-primary btn-100" >Register</button>
                  </div>
                  <a href='/reset'>
                    <a className={[styles.contentmiddle , 'text-primary', 'mt-2'].join(' ')}>Already have an account ?</a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
