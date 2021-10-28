import Card from "../components/Card/card";
import Layout from "../components/Layout/layout";
import Image from "next/image";
import Rate from "../components/Rate/rate";
import Innercontainer from "../components/container/innerContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instance } from "./api/axiosConfiguration";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  faGlobe,
  faMapMarker,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
export default function Profile(props) {
  const [nameOfCompany, setNameOfCOmpany] = useState();
  const [phone, setPhone] = useState();
  const [activity, setActivity] = useState();
  const [rating, setRating] = useState();

  useEffect(() => {
    instance
      .get("/providers")
      .then(function (response) {
        setNameOfCOmpany(response.data[0].NameOfCompany);
        setPhone(response.data[0].Phone);
        setActivity(response.data[0].Activity);
        setRating(response.data[0].Rating);
      })
      .catch(function (error) {
        // Σε περίπτωση που δεν έχει πρόσβαση η υπάρχει error θα προστεθεί εδώ
      })
      .then(function () {
        // always executed
      });
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
                  <h4>Όνομα Επιχείρησης</h4>
                  <h3 className="text-bold">{nameOfCompany}</h3>
                </div>
                <div className="mt-2">
                  <h4>Ειδικότητα</h4>
                  <h3 className="text-bold">{activity}r</h3>
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
              <div className="p-2 col-8">
                <div className="m-2">
                  <b className="font-24">Προφίλ</b>
                </div>
                <div className="font-24">
                  Ο τρόπος ζωής του Κώστα είναι αρκετά δραστήριος. Εργάζεται έξι
                  φορές την εβδομάδα. Εκτός από το web developement, ασχολείται
                  και με το data analysis σε καθημερινή βάση. Στον ελέυθερο του
                  χρόνο ασχολείται ερασιτεχνικά με τη φωτογραφία και την
                  παραγωγή βίντεο
                </div>
              </div>
              <div className="p-2 col-8">
                <div className="m-2">
                  <b className="font-24">Στοιχεία Προσωπικότητας</b>
                </div>
                <div className="font-24">
                  Ο τρόπος ζωής του Κώστα είναι αρκετά δραστήριος. Εργάζεται έξι
                  φορές την εβδομάδα. Εκτός από το web developement, ασχολείται
                  και με το data analysis σε καθημερινή βάση. Στον ελέυθερο του
                  χρόνο ασχολείται ερασιτεχνικά με τη φωτογραφία και την
                  παραγωγή βίντεο
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
