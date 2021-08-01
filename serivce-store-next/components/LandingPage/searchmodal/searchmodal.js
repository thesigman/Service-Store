import React from 'react'
import {Button}  from 'react-bootstrap';



const searchmodal = () => {

  const services =['Digital Marketing', 'Website', 'E-Shop', 'Φωτογράφιση']
  return (
  <div className="modal-wrapper">
    <span className="modal-title">Βρες τον ιδικό για κάθε υπηρεσία</span>
    <div className="search-area">
      <h4>Τι χρειάζεστε?</h4>
      <input
        type="text"
        placeholder="Search here "
        className="form-control"
        id="formGroupExampleInput"
      />
      <div className="m-2">
        <h4>Συχνές υπηρεσίες</h4>
        <Button className="btn-rounded color-primary m-2">Digital Marketing</Button>
        <Button className="btn-rounded color-primary m-2">WebSite</Button>
        <Button className="btn-rounded color-primary m-2">E-Shop</Button>
        <Button className="btn-rounded color-primary m-2">Φωτογράφιση</Button>
      </div> 
      <Button  className="btn btn-long color-primary">Ξεκινήστε εδώ</Button>
    </div>
  </div>
  )
}

export default searchmodal;