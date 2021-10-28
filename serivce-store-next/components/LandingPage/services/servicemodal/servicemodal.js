import React from 'react';

const servicemodal  = () => {
  return (
  <div className="modal-wrapper color-primary m-2">
    <span className="modal-title text-white">Βρες τον ιδικό για κάθε υπηρεσία</span>
    <div className="modal-wrapper info">
    <ul className="list-group no-borders ">
      <li className="list-group-item">New <span className="badge">12</span></li>
      <li className="list-group-item">Deleted <span className="badge">5</span></li>
      <li className="list-group-item">Warnings <span className="badge">3</span></li>
    </ul>
    </div>
  </div>
    )
}

export default servicemodal;