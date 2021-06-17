import axios from 'axios';
import { useState } from 'react';
import router from 'next/router';
import Image from 'next/dist/client/image';

export default function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  var default_credentials = {
    username: "thanos",
    password: "thanos"
  };


  const login = () => {
    if(username == default_credentials.username && password==default_credentials.password) {
      router.push('/');
    }
  }


  return (
    <div id='divElement'>
      <table border="0" align="center">
        <tr height="100%">
          <td height="100%" width="100%" valign="middle" className="no-border" align="center">
          <Image
            src='/logo_dark.png'
            width={2000}
            height={412}
            loading="eager" />
            <input type="text" placeholder="Username" className="pr-2 mt-2 form-control" onChange={(event) => setUsername(event.target.value)}  ></input>
            <input type="text" placeholder="Password" className="pr-2 mt-2 form-control" onChange={(event) => setPassword(event.target.value)} ></input>
            <button className="btn bg-primary mt-2" onClick={login}>Login</button>
          </td>
        </tr>
      </table>
    </div>
  );
}