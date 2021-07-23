import React from 'react'
import '../landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const feedback = () => {
  return (
    <div className="backg-secondary">

      <div className="service-title m-2">
        <span className="title-text text-primary">Τι λένε για εμάς</span>
        <p className="text-secondary">Αληθινές ιστορίες από τους συνεργάτες μας. Μαζί χτίζουμε μια σχέση εμπιστοσύνης</p>

        <div className="row comments ">
          <div className=" color-white modal-wrapper-sm col-md m-2 p-2">
            <div className="comment-wrapper">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p className="text-secondary">Πολυ ευχαρηστημένος. Προτείνω το Service Strore σε όλους</p>
            <div class="row text-center">
              <div class="col-md-3 mb-2">
                <img class="rounded-circle profile" alt="50x50" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                data-holder-rendered="true"/>
              </div>
              <p className=" col text-secondary ">Νίκη Αθανασίου</p>
            </div>
            
          </div>
        </div>
    
        <div className=" color-white modal-wrapper-sm col-md m-2 p-2">
            <div className="comment-wrapper">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p className="text-secondary">Πολυ ευχαρηστημένος. Προτείνω το Service Strore σε όλους</p>
            <div class="row text-center">
              <div class="col-md-3 mb-2">
                <img class="rounded-circle profile" alt="50x50" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                data-holder-rendered="true"/>
              </div>
              <p className=" col text-secondary ">Νίκη Αθανασίου</p>
            </div>
          </div>
        </div>
          
        <div className=" color-white modal-wrapper-sm col-md m-2 p-2">
            <div className="comment-wrapper">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p className="text-secondary">Πολυ ευχαρηστημένος. Προτείνω το Service Strore σε όλους</p>
            <div class="row text-center">
              <div class="col-md-3 mb-2">
                <img class="rounded-circle profile" alt="50x50" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                data-holder-rendered="true"/>
              </div>
              <p className=" col text-secondary ">Νίκη Αθανασίου</p>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  )
}

export default feedback;