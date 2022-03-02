import React, { useEffect, useState } from 'react';


const editRequest = (props) => {

  // Options on Select2 
  const [service1, setService12Options] = useState();
  const [service2, setService22Options] = useState();
  const [domain, setDomain2Options] = useState();

  useEffect(() => {
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
    setCompany2Options([...new Map(company2Options.map(item => [item.label, item])).values()]);
  }, [])


  return (
    <div className='row'>
      <div className="row p-2 ">
        <div className='col-md-4 col-12'>
          <div className='row'>
            <strong>Εταιρεία</strong>
          </div>
        </div>
        <div className='col-md-4 col-12'>
          <div className='row'>
            <strong>Τομέας</strong>
          </div>
        </div>
        <div className='col-md-2 col-12'>
          <div className='row'>
            <strong>Service 1</strong>
          </div>
        </div>
        <div className='col-md-2 col-12'>
          <div className='row'>
            <strong>Service 2</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default editRequest;