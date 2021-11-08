import React from "react";
import styles from  "./services.module.css";


import ServiceModal from "./servicemodal/servicemodal";
const services = () => {
  return (
    <div className="services-wrapper ">
      <div className={[styles.servicetitle, 'm-2'].join(' ')}>
        <span className="title-text">Πακέτα υπηρεσιών</span>
        <p>Ολοκληρωμένα πακέτα ψηφιακού μετασχηματισμού</p>
      </div>
      <div className={[styles.services, 'm-2'].join(' ')}>
        <div className="row">
          <div className="col">
            <ServiceModal></ServiceModal>
          </div>
          <div className="col">
            <ServiceModal></ServiceModal>
          </div>
          <div className="col">
            <ServiceModal></ServiceModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
