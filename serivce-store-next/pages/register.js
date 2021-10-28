import { useState, useEffect } from 'react';
import Image from 'next/dist/client/image';
import styles from './login.module.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { loginUser } from "../libs/auth";
import Selector from '../components/Selector/selector'
import { instance } from '../pages/api/axiosConfiguration';

export default function login(props) {
  const [typosEtaireias, setTyposEtaireias] = useState();
  const [username, setUsername] = useState();
  const [pasword, setPassword] = useState();
  const [doy, setDoy] = useState();
  const [activity, setActivity] = useState();
  const [vat, setVat] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [nameOfCompany, setNameOfCompany] = useState();
  const [messageText, setMessageText] = useState();
  const [TypeOfRequestedJobs, setTypeOfRequestedJobs] = useState();
  const [type, setType] = useState();
  const [service2, setService2] = useState([]);
  const [test, setTest] = useState('thanos');

  useEffect(() => {

    instance.get('/services').then(
      (response) => {
        const res = response.data;
        let tempService2 = []
        res.forEach((value) => {
          tempService2 = [...tempService2, { 'question': value.service_1, 'answer': value.service_2 }];
        });
        setService2([...new Set(tempService2.values())]);
        if( service2.length > 0) {
          setService2(service2.map(a => a.answer))
        }

      }, error => { console.log('test') });

  },[service2.length])

  const updateRequestedJob = (question, answer, triggerElement) => {
    setTypeOfRequestedJobs(answer);
  }

  const registerUser = () => {
    let path = '/clients';
    const newUser = {
      'Emploeeys': 4,
      'AFM': vat,
      'TypeOfCompany': typosEtaireias,
      'DOY': doy,
      'Phone': phone,
      'Activity': activity,
      'YearsOperation': 5,
      'NameOfCompany': nameOfCompany,
      'Password': 'pwd',
      'published_at': new Date().toISOString(),
      'created_at': new Date().toISOString(),
      'update_at': new Date().toISOString()
    }
    if (type == 'Πάροχος') {
      newUser['Rating'] = 0;
      newUser['TypeOfRequestedJobs'] = TypeOfRequestedJobs;
      path = '/providers';
    }
    instance
      .post(path, newUser)
      .then(function (response) {
        if (response.status == 200) {
          // If the user saved successfully in the database then create a strapi user to log in
          console.log('test')
          let finalUser = {
            "confirmed": true,
            "blocked": false,
            "username": username,
            "email": email,
            "password": pasword,
            "provider": "local",
            "createdAt": new Date().toISOString(),
            "updatedAt": new Date().toISOString(),
            "role": {
              "_id": "60fd79585a9a8e22e48e47b0",
              "name": "Authenticated",
              "description": "Default role given to authenticated user.",
              "type": "authenticated",
              "__v": 0,
              "id": "60fd79585a9a8e22e48e47b0"
            }
          }

          if (type == 'Πάροχος') {
            finalUser['userprovider'] = { '_id': response.data._id }
          } else {
            finalUser['client'] = { '_id': response.data._id }
          }

          instance.post('/users', finalUser).then((response) => {
            if (response.status == 201) {
              // will be impleneted a redirect 
              console.log('Grafitkes');
            } else {
              console.log(response);
            }
          })
        }
      })
      .catch(function (error) {
        return "Invalid Username or Password";
      })
      .then(function () {
        // always executed
      });
  }

  const setCompany = (s1, s2, s3) => {
    setTyposEtaireias(s2);
  }

  const setUserType = (s1, s2, s3) => {
    setType(s2);
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
                    <h4>Όνομα Χρήστη</h4>
                    <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username" />
                  </div>
                  <div>
                    <h4>E-mail</h4>
                    <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Username" />
                  </div>
                  <div>
                    <h4>Κωδικός Πρόσβασης</h4>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                  </div>
                  <div>
                    <h4>Α.Φ.Μ</h4>
                    <input onChange={(event) => setVat(event.target.value)} placeholder="v.a.t number" />
                  </div>
                  <div>
                    <h4>Τύπος Εταιρείας</h4>
                    <Selector
                      onChange={setCompany}
                      values={[
                        "Ανώνυμη Εταιρεία Α.Ε",
                        "Εταιρεία Περιορισμένης Ευθύνσης Ε.Π.Ε",
                        'Ομόρρυθμες Εταιρείες Ο.Ε',
                        'Ετερόρρυθμες Εταιρείες Ε.Ε ',
                        'Ιδιωτικές Κεφαλαιουχικές Εταιρείες Ι.Κ.Ε'
                      ]} />
                  </div>
                  <div>
                    <h4>Τύπος Λογαριασμού</h4>
                    <Selector
                      onChange={setUserType}
                      values={[
                        "Πάροχος",
                        "Πελάτης"
                      ]} />
                  </div>
                  <div>
                    <h4>Δ.Ο.Υ</h4>
                    <input onChange={(event) => setDoy(event.target.value)} placeholder="ΔΟΥ" />
                  </div>
                  <div>
                    <h4>Τηλέφωνο</h4>
                    <input onChange={(event) => setPhone(event.target.value)} type="" placeholder="Τηλέφωνο" />
                  </div>
                  <div>
                    <h4>Δραστηριότητα</h4>
                    <Selector
                      placeholder="Δραστηριότητα"
                      id="service_2"
                      onChange={updateRequestedJob}
                      values={[...new Set(service2)]}></Selector>
                  </div>
                  <div>
                    <h4>Όνομα Εταιρείας</h4>
                    <input onChange={(event) => setNameOfCompany(event.target.value)} placeholder="Όνομα Εταιρείας" />
                  </div>
                  <p className={[styles.contentmiddle, 'text-danger'].join(' ')} value={messageText}>{messageText}</p>
                  <div className="mt-4">
                    <button onClick={() => registerUser()} className="btn btn-small bg-primary btn-100" >Εγγραφή</button>
                  </div>
                  <a href='/reset'>
                    <a className={[styles.contentmiddle, 'text-primary', 'mt-2'].join(' ')}>Already have an account ?</a>
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
