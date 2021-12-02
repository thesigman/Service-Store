import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Kanban from '../components/Kanban/kanban'
import Layout from '../components/Layout/layout'
import MultiStepForm from '../components/MultiStepForm/MultiStepForm'
import Search from '../components/Search/search'
import Selector from '../components/Selector/selector'
export default function Home(props) {

  const changeDefaultView = (event, event2, event3) => {
    setView(event2);
  }

  const [view, setView] = useState("Καρτέλες ως πελάτης");
  const [modalIsOpen, setModalStatus] = useState(false);



  return (
    <Layout user={props}>
      {!props.isAuthenticated && <p>You have to login First</p> ||
        <div className="row">
          <div className="row mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Αρχική</a>
                </li>
              </ol>
            </nav>
            <div className="col-2 mt-4">
              <Search></Search>
            </div>
            <div className="col-2 mb-4">
              <Selector onChange={changeDefaultView} placeholder="Προεπιλεγμένη εμφάνιση" values={["Καρτέλες ως πελάτης", "Καρτέλες ώς πάροχος"]} ></Selector>
            </div>
            <div className="col-2 mt-2 mb-4">
              <Button onClick={() => setModalStatus(!modalIsOpen)} className="btn bg-primary">Προσθήκη Πρότασης</Button>
            </div>
          </div>
          <Kanban view={view}></Kanban>
        </div>
      }
      {!modalIsOpen ||
        <MultiStepForm modalstatus={modalIsOpen}></MultiStepForm>
      }

    </Layout>

  )
}
