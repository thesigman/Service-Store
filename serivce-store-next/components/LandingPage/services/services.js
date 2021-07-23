import React from "react";
import smallLogo from "../../../logo-small.png";
import "./services.css";
import "../landing.css";

import ServiceModal from "./servicemodal/servicemodal";
const services = () => {
  return (
    <div className="services-wrapper ">
      <div className="service-title m-2">
        <span className="title-text text-primary">Πακέτα υπηρεσιών</span>
        <p className="text-secondary">Ολοκληρωμένα πακέτα ψηφιακού μετασχηματισμού</p>
      </div>
      <div className="services m-2">
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
