import {
  faGlobe,
  faMapMarker, faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../components/Card/card";
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
  // needs fix
  useEffect(async () => {
    const active_user = JSON.parse(window.sessionStorage.getItem("application_user"));
    const endpointName = (active_user.role == 'provider') ? 'providers' : 'clients';
    setUsername(active_user.username);
    setEmail(active_user.email);
    await instance
      .get(`/${endpointName}/${active_user.id}`)
      .then(function (response) {

        console.log(response.data);
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
  return (
    <Layout user={props}>
      {(!props.isAuthenticated && <p>You have to login First</p>) || (
        <div className="row mt-4">
          <div className="col-4">
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
                  <h3 className="text-bold">{username}</h3>
                </div>
                <div className="mt-2">
                  <h4>E-mail:</h4>
                  <h3 className="text-bold">{email}</h3>
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
                    <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                    <span>Τσιμισκή 47, Θεσσαλλονίκη</span>
                  </Button>
                </div>
              </div>
            </Innercontainer>
          </div>
          <div className="col">
            <h2> Αναλυτικό Προφιλ </h2>
            <Innercontainer>
              <div className="p-2">
                <div className="m-2">
                  <b className="font-24">Επαγγελματικά</b>
                </div>
                <div className="font-24">
                  <div className="row mb-2">
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Όνομα Εταιρείας</b></div>
                      <div className="col-6">{nameOfCompany}</div>
                    </div>
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Τύπος Εταιρείας</b></div>
                      <div className="col-6">{typeOfCompany}</div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Α.Φ.Μ</b></div>
                      <div className="col-6">{afm}</div>
                    </div>
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Δ.Ο.Υ</b></div>
                      <div className="col-6">{doy}</div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Χρόνια Λειτουργίας</b></div>
                      <div className="col-6">{yearsOfOperation}</div>
                    </div>
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Αρ. Εργαζομένων</b></div>
                      <div className="col-6">{employees}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="m-2">
                  <b className="font-24">Ιδιωτικά</b>
                </div>
                <div className="font-24">
                  <div className="row mb-2">
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Τηλέφωνο</b></div>
                      <div className="col-6">{phone}</div>
                    </div>
                    <div className="col-6 row">
                      <div className="col-6"><b className="font-24">Εγγραφή</b></div>
                      <div className="col-6">{moment(created, "YYYYMMDD").fromNow()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Innercontainer>
            <h2> Αξιλογήσεις Παρόχου </h2>
            <Innercontainer>
              <div className="row">
                <div className="col">
                  <Card
                    name="Card 1"
                    description="Description for card 1"
                  ></Card>
                  <Card
                    name="Card 1"
                    description="Description for card 1"
                  ></Card>
                </div>
              </div>
            </Innercontainer>
          </div>
        </div>
      )}
    </Layout>
  );
}
