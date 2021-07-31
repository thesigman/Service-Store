import React from 'react'



const whoarewe = () => {
  return (
    <div className="backg-secondary-gradient">
      <div className="service-title m-2 text-primary">
        <span className="title-text text-primary" >Ποιοι είμαστε</span>
        <p className=" text-secondary">Τι κάνουμε και με ποιο τρόπο μπορεί το  service store να χαρίσει στην εταιρεία σας αυτό που χρειάζεται</p>
        <div className="video-responsive">
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/6fWU0e6W8QY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

    </div>
  )
}

export default whoarewe;