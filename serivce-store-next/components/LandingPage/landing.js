import { Button } from 'react-bootstrap'
import React from 'react'
import styles from './landing.css'
import SearchModal from './searchmodal/searchmodal'


const landing = () => {
  return (
   <div className='body'>
     <div className="row landrow">
        <div className="col-6 first-half">
          <span class="title-text text-secondary">Ψηφιακός Μετασχηματιματισμός για την επιχείρησή σου</span>
          <p className="text-primary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <Button className="btn-rounded color-primary" href="#">Είσαι επαγγελματίας ?</Button> <Button className="btn-rounded color-primary">Λύσεις για επιχειρήσεις</Button>{' '}
        </div>
        <div className="col second-half">
          <SearchModal/>
        </div>
     </div>
   </div>
  )
}

export default landing;