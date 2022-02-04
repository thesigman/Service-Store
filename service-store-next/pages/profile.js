import {
  faGlobe, faPhoneAlt, faSave, faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from 'react-nextjs-toast';
import StarRatingComponent from 'react-star-rating-component';
import Innercontainer from "../components/container/innerContainer";
import Layout from "../components/Layout/layout";
import { instance } from "./api/axiosConfiguration";



export default function Profile(props) {
  const [nameOfCompany, setNameOfCOmpany] = useState();
  const [phone, setPhone] = useState();
  const [employees, setEmployess] = useState();
  const [doy, setDoy] = useState();
  const [yearsOfOperation, setYearsOfOperation] = useState();
  const [created, setCreated] = useState();
  const [typeOfRequestedJobs, setTypeOfRequestedJobs] = useState();
  const [activity, setActivity] = useState();
  const [typeOfCompany, setTypeOfComapny] = useState();
  const [rating, setRating] = useState();
  const [username, setUsername] = useState();
  const [afm, setAfm] = useState();
  const [email, setEmail] = useState();
  const [activeUser, setActiveUser] = useState();
  const [type, setType] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postl, setPostal] = useState();
  const [ekprosvpos, setEkpr] = useState();
  // needs fix
  useEffect(async () => {
    const active_user = JSON.parse(window.sessionStorage.getItem("application_user"));
    const endpointName = (active_user.role == 'provider') ? 'providers' : 'clients';
    setActiveUser(active_user);
    setType(endpointName);
    setUsername(active_user.username);
    setEmail(active_user.email);
    await instance
      .get(`/${endpointName}/${active_user.id}`)
      .then(function (response) {
        setNameOfCOmpany(response.data.NameOfCompany);
        setActivity(response.data.Activity);
        setRating(response.data.Rating);
        setPhone(response.data.Phone);
        setDoy(response.data.DOY);
        setEmployess(response.data.Emploeeys);
        setYearsOfOperation(response.data.YearsOperation);
        setCreated(response.data.createdAt);
        setTypeOfRequestedJobs(response.data.TypeOfRequestedJobs);
        setTypeOfComapny(response.data.TypeOfCompany);
        setAfm(response.data.AFM)
      })
      .catch(function (error) {
        // Σε περίπτωση που δεν έχει πρόσβαση η υπάρχει error θα προστεθεί εδώ
      })
  }, []);

  const updateProfileInfo = async () => {
    const changedProfile = {
      _id: activeUser.id,
      Emploeeys: employees,
      AFM: afm,
      TypeOfCompany: typeOfCompany,
      DOY: doy,
      Phone: phone,
      YearsOperation: yearsOfOperation,
      NameOfCompany: nameOfCompany,
    }

    const response = await instance.put(`/${type}/${activeUser.id}`, changedProfile);
    if (response.status == 200) {
      toast.notify('Η ενημέρωση του Προφίλ ολοκληρώθηκε με επιτυχία', { duration: 5, type: "success", title: "Service Store" });

    }


  }
  return (
    <Layout user={props}>
      <ToastContainer></ToastContainer>
      {(!props.isAuthenticated && <p>You have to login First</p>) || (
        <div className="row mt-4">
          <div className="col-md-4 col-12">
            <Innercontainer>
              <div className="p-4">
                <div className="row">
                  <div className="col-6">
                    <Image
                      src="/profile.png"
                      width={190}
                      height={190}
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <h4>Όνομα χρήστη: </h4>
                  <b>{username}</b>
                </div>
                <div className="mt-2">
                  <h4>E-mail:</h4>
                  <b>{email}</b>
                </div>
                <div className="mt-4">
                  <Button className="btn btn-small-secondary btn-long bd-primary text-primary">
                    <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                    <span> {phone}</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <Button className="btn btn-small-secondary btn-long bd-primary text-primary">
                    <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    <span>google.gr</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <Button className="btn btn-small-secondary btn-long bd-primary text-primary">
                    <span> Εγγραφήκατε : {moment(created, "YYYYMMDD").fromNow()}</span>
                  </Button>
                </div>
              </div>
            </Innercontainer>
          </div>
          <div className="col-md-8 col-12 mt-2">
            <div className="d-flex justify-content-between m-2">
              <h4> Αναλυτικό Προφιλ </h4>
              <button type="button" className="btn bg-success btn-small" onClick={updateProfileInfo}>
                <FontAwesomeIcon icon={faSave} />
              </button>
            </div>

            <Innercontainer>
              <div className="p-2">
                <div className="m-2">
                  <h4>Επαγγελματικά</h4>
                </div>
                <div >
                  <div className="row mb-2 ml-2">
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Όνομα Εταιρείας</b></div>
                      <div className="col-6"><input onChange={(event) => setNameOfCOmpany(event.target.value)} value={nameOfCompany}></input></div>
                    </div>
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Τύπος Εταιρείας</b></div>
                      <div className="col-6"><input onChange={(event) => setTypeOfComapny(event.target.value)} value={typeOfCompany}></input></div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Α.Φ.Μ</b></div>
                      <div className="col-6"><input onChange={(event) => setAfm(event.target.value)} value={afm}></input></div>
                    </div>
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Δ.Ο.Υ</b></div>
                      <div className="col-6"><input onChange={(event) => setDoy(event.target.value)} value={doy}></input></div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Χρόνια Λειτουργίας</b></div>
                      <div className="col-6"><input onChange={(event) => setYearsOfOperation(event.target.value)} value={yearsOfOperation}></input></div>
                    </div>
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Αρ. Εργαζομένων</b></div>
                      <div className="col-6"><input onChange={(event) => setEmployess(event.target.value)} value={employees}></input></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="m-2">
                  <h3>Ιδιωτικά</h3>
                </div>
                <div  >
                  <div className="row mb-2">
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Τηλέφωνο</b></div>
                      <div className="col-6"><input onChange={(event) => setPhone(event.target.value)} value={phone}></input></div>
                    </div>
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Διεύθυνση</b></div>
                      <div className="col-6"><input onChange={(event) => setAddress(event.target.value)}></input></div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Πόλη</b></div>
                      <div className="col-6"><input onChange={(event) => setCity(event.target.value)} value={city}></input></div>
                    </div>
                    <div className=" col-md-6 col-12 row">
                      <div className="col-6"><b>Ταχυδρομικός Κώδικας</b></div>
                      <div className="col-6"><input onChange={(event) => setPostal(event.target.value)}></input></div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col row">
                      <div className="col-3"><b>Όνομα Εκπροσώπου</b></div>
                      <div className="col"><input onChange={(event) => setEkpr(event.target.value)} value={ekprosvpos}></input></div>
                    </div>
                  </div>
                </div>
              </div>
            </Innercontainer>
            <h4 className="m-2"> Αξιoλογήσεις Παρόχου </h4>
            <Innercontainer>
              <div className="row p-2">
                <div className="col-md-8 col-12">
                  <div className="row mb-2">
                    <div className="d-flex justify-content-between">
                      <b>Επικοινωνία με τον πελάτη</b>
                      <StarRatingComponent
                        name="factor3"
                        value={4}
                        starCount={5}
                        emptyStarColor={'#F0F0F0'}
                        renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
                        starColor={'#FFD579'}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="d-flex justify-content-between">
                      <b>Συνέπεια στο έργο</b>
                      <StarRatingComponent
                        name="factor3"
                        value={2}
                        starCount={5}
                        emptyStarColor={'#F0F0F0'}
                        renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
                        starColor={'#FFD579'}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="d-flex justify-content-between">
                      <b>Συνολική εμπειρία</b>
                      <StarRatingComponent
                        name="factor3"
                        value={4}
                        starCount={5}
                        emptyStarColor={'#F0F0F0'}
                        renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
                        starColor={'#FFD579'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Innercontainer>
          </div>
        </div>
      )}
    </Layout>
  );
}
