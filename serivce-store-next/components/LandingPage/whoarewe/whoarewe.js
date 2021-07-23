import React from 'react'
import '../landing.css'
import sample from './sample-video.png'

const whoarewe = () => {
  return (
    <div className="backg-secondary-gradient">
       <div className="service-title m-2 text-primary">
        <span className="title-text text-primary" >Ποιοι είμαστε</span>
        <p className=" text-secondary">Τι κάνουμε και με ποιο τρόπο μπορεί το  service store να χαρίσει στην εταιρεία σας αυτό που χρειάζεται</p>
        <img src={sample}></img>
      </div>

    </div>
    )
}

export default whoarewe;