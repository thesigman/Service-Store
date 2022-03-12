import React, { useEffect, useState } from 'react';
import Selector from '../../../components/Selector/selector';
import { instance } from '../../api/axiosConfiguration';


const editRequest = (props) => {

  // Options on Select2 
  const [service1, setService12Options] = useState();
  const [service2, setService22Options] = useState();
  const [domain, setDomain2Options] = useState();

  const [selectedservice1, setSelectedService1] = useState(props.record.service_1 );
  const [selectedservice2, setSelectedService2] = useState(props.record.service_2);
  const [selectedDomain, setSelectedDomain] = useState(props.record.domain );

  useEffect(async () => {
    // Initialize Των φίλτρων
    const allServices = await instance.get('/services');
    let tempService1 = [{ label: "Όλα", value: 'all' }];
    let tempService2 = [{ label: "Όλα", value: 'all' }];
    let tempDomains = [{ label: "Όλα", value: 'all' }];

    allServices.data.forEach((value) => {
      tempDomains = [...tempDomains, { 'label': value.domain, value: value.domain }];
      tempService1 = [...tempService1, { 'label': value.service_1, value: value.service_1 }];
      tempService2 = [...tempService2, { 'label': value.service_2, value: value.service_2 }];
    })

    setService12Options([...new Map(tempService1.map(item => [item.label, item])).values()]);
    setService22Options([...new Map(tempService2.map(item => [item.label, item])).values()]);
    setDomain2Options([...new Map(tempDomains.map(item => [item.label, item])).values()]);
  }, [])

  const setNewValue = (placeholder, value) => {
    switch (placeholder) {
      case 'Service 1':
        setSelectedService1(value);
        break;
      case 'Service 2':
        setSelectedService2(value);
        break;
      case 'Domain':
        setSelectedDomain(value);
        break;
    }
  }

  const sendRequest = () => {
    const req ={
      domain : selectedDomain,
      service1: selectedservice1,
      service2: selectedservice2
    }

    console.log(req);
  }


  return (
    <>
      <div className="row ">
        <div className='col-md-4'>
          <Selector defaultAnswer={selectedDomain} onChange={setNewValue} select2ready={true} hasCleanView={false} placeholder="Domain" values={domain} ></Selector>
        </div>
        <div className='col-md-4'>
          <Selector defaultAnswer={selectedservice1} onChange={setNewValue} select2ready={true} hasCleanView={false} placeholder="Service 1" values={service1} ></Selector>
        </div>
        <div className='col-md-4'>
          <Selector defaultAnswer={selectedservice2} onChange={setNewValue} select2ready={true} hasCleanView={false} placeholder="Service 2" values={service2} ></Selector>
        </div>
      </div>
      <div className="d-flex float-end">
        <button onClick={sendRequest} className=" mt-2 btn bg-success btn-small"> Ενημέρωση</button>
      </div>
    </>
  )
}

export default editRequest;