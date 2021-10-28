import { Button } from 'react-bootstrap'
import React from 'react'
import SearchModal from './searchmodal/searchmodal'


const landing = () => {
  return (
   <div className='body'>
     <div className="row landrow">
        <div className="col-6 first-half">
          <span class="title-text">Ψηφιακός Μετασχηματιματισμός για την επιχείρησή σου</span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <Button className="btn btn-rounded color-primary">Είσαι επαγγελματίας ?</Button> <Button className="btn btn-rounded color-primary">Λύσεις για επιχειρήσεις</Button>{' '}
        </div>
        <div className="col second-half">
          <SearchModal/>
        </div>
     </div>
   </div>
  )
}

export default landing;