import { useFormData } from "../context/index";
import styles from '../form.module.scss'
import Selector from "../../Selector/selector";
import axios from '../../../pages/api/axiosConfiguration'
import { useEffect, useState } from "react";


export default function PersonalInfo({ formStep, nextFormStep }) {
  const setFormValues = useFormData();
  const [services, setServices] = useState([]);
  const [service1, setServices1] = useState([]);
  const [service2, setServices2] = useState([]);
  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  useEffect(() => {
    axios.get('/services')
      .then(function (response) {
        const res = response.data;
        let domain = [];
        let service1 = [];
        let service2 = [];
        res.forEach((value, index) => {
         domain = [...domain, value.domain];
         service1 = [...service1, value.service_1];
         service2 = [...service1, value.service_2];
        });
        setServices(domain);
        setServices1(service1);
        setServices2(service2);
      }).catch(function (error) {
        // forEachΣε περίπτωση που δεν έχει πρόσβαση η υπάρχει error θα προστεθεί εδώ
      })
     
  }, []);

  const values = ['Ελληνικά', 'Αγγλικά' ];
  console.log(services);
  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h5 className="text-center"><b>Τίτλος</b></h5>
      <p className="text-center">Βασικές Ρυθμίσεις</p>
      <div className="row">
        <div className="col">
          <Selector placeholder=" Επιλέξτε Γλώσσα" values={values}></Selector>
        </div>
        <div className="col">
          <Selector placeholder="Κατηγορία" values={[...new Set(services)]}></Selector>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <Selector placeholder="Υποκατηγορία 1" values={[...new Set(service1)]}></Selector>
        </div>
        <div className="col">
          <Selector placeholder="Υποκατηγορία 2" values={[...new Set(service2)]}></Selector>
        </div>
      </div>
      <div className="d-flex float-end">
        <button onClick={nextFormStep} className=" mt-2 btn bg-primary btn-small">Επόμενο</button>
      </div>

    </div>
  );
}
