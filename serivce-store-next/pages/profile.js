
import Card from '../components/Card/card'
import Layout from '../components/Layout/layout'
import Image from 'next/image';
import Rate from '../components/Rate/rate';
import Innercontainer from '../components/container/innerContainer'
import { useState, useEffect } from 'react'

export default function Profile() {

  /**
   * Θα υλοποιηθεί λογική που θα λαμβάνει πληοροφορίες απο το προφιλ του χρήστη με την 
   * χρήση του κατάλληλου request και θα τα φορτώνει στο view
   */

  return (
    <Layout>
      <div className="row mt-4">
        <div className="col-4">
          <Innercontainer>
            <div className="p-4">
              <div className="row">
                <div className="col-6">
                  <Image
                    src='/profile.png'
                    width={190}
                    height={190}
                    loading="eager" />
                </div>
                <div className="col">
                  <Rate
                    title='Αξιοπιστία'
                    stars='5'
                    starColor='text-secondary'
                  ></Rate>
                  <Rate
                    title='Ευελιξία'
                    stars='3'
                    starColor='text-success'
                  ></Rate>
                  <Rate
                    title='Ταχύτητα'
                    stars='4'
                    starColor='text-primary'
                  ></Rate>
                </div>
              </div>
              <div className="mt-2">
                <h4>Όνομα Επιχείρησης</h4>
                <h3 className="text-bold">Web Design</h3>
              </div>
              <div className="mt-2">
                <h4>Όνομα Επιχείρησης</h4>
                <h3 className="text-bold">Web Design</h3>
              </div>
              <div className="mt-2">
                <h4>Ειδικότητα</h4>
                <h3 className="text-bold">Web Developer</h3>
              </div>
              <div className="mt-2">
                <h4>Επιπλέον Γνώσεις</h4>
                <h3 className="text-bold">Photoshop, Indesign, Video Editing</h3>
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
                Ο τρόπος ζωής του Κώστα  είναι αρκετά δραστήριος. Εργάζεται έξι φορές την εβδομάδα.  Εκτός από το web developement, ασχολείται και με το data analysis σε καθημερινή βάση.
                Στον ελέυθερο του χρόνο ασχολείται ερασιτεχνικά με τη φωτογραφία και την παραγωγή βίντεο
              </div>

            </div>
            <div className="p-2 col-8">
              <div className="m-2">
                <b className="font-24">Στοιχεία Προσωπικότητας</b>
              </div>
              <div className="font-24">
                Ο τρόπος ζωής του Κώστα  είναι αρκετά δραστήριος. Εργάζεται έξι φορές την εβδομάδα.  Εκτός από το web developement, ασχολείται και με το data analysis σε καθημερινή βάση.
                Στον ελέυθερο του χρόνο ασχολείται ερασιτεχνικά με τη φωτογραφία και την παραγωγή βίντεο
              </div>
            </div>
          </Innercontainer>
          <h2> Αξιλογήσεις Παρόχου </h2>
          <Innercontainer>
            <div className="row">
              <div className="col">
                <Card name="Card 1" description="Description for card 1"></Card>
                <Card name="Card 1" description="Description for card 1"></Card>
              </div>
            </div>
          </Innercontainer>
        </div>
      </div>
    </Layout >
  )
}
