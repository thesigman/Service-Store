import axios from 'axios';
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import { instance } from '../../pages/api/axiosConfiguration';
import Selector from "../Selector/selector";
import styles from './form.module.scss';

/**
 * MultiStepForm
 * Για την διαχείσιση της φόρμας υπάρχει ένα κεντρικό state που είναι αυτό του function
 * Oποιαδοίποτε ενέργεια / προσθήκη πρέπει να γίνετααι μέσα απο το κεντρικό state 
 * 
 * Τα state μέσα σε κάθε step ειναι υπεύθυνα για την διαχείριση της πληροφορίας στο εκάστωτε βήμα
 * και για να κάνουμε submit πρέπει να υποβάλουν το αποτέλεσμά του στο κεντρικό state 
 */


export default function MultiStepForm(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([])
  const [name, setName] = useState('');
  const [activeService, setActiveService] = useState('');
  const [dependQuest, setDependQuest] = useState([]);
  const [modalIsOpen, setModalStatus] = useState(false);

  const modalStyle = {
    content: {
      background: "#FFFFFF",
      overflow: "visible",
      margin: 'auto',
      width: '50%',
      height: '50vh'
    },
  }

  useEffect(() => {
    setModalStatus(!modalIsOpen);
  }, [props]);


  const newPage = () => {
    setPage(page => page + 1);
  }

  /**
  * Κλείνει το ενεργό modal 
  */
  const closeModal = () => {
    setModalStatus(false);
  }


  return (
    <Modal isOpen={modalIsOpen} style={modalStyle} ariaHideApp={false} size="sm" >
      <div className="container-fluid">
        <div className="row justify-content-end">
          <button className="btn-close" onClick={closeModal}></button>
        </div>
      </div>
      <div className="row p-2">
        <div className={['p-4', styles.formRow].join(' ')}>
          {page < 4 && <p>Βήμα {page} από 3</p>}
          <div>
            {page === 1 && <StepOne setActiveService={setActiveService} data={data} newPage={newPage} update={setData} setName={setName} />}
            {page === 2 && <StepTwo name={activeService} dependencies={dependQuest} updateQuest={setDependQuest} newPage={newPage} data={data} update={setData} />}
            {page === 3 && <StepThree name={activeService} dependencies={dependQuest} newPage={newPage} updateQuest={setDependQuest} data={data} update={setData} />}
            {page === 4 && <StepFour name={name} data={data} />}
          </div>
          <button onClick={newPage}>NExt</button>
        </div>
      </div>
    </Modal>

  )
}


function StepOne(props) {
  const [domains, setDomains] = useState([]);
  const [service1, setService1] = useState([]);
  const [service2, setService2] = useState([]);
  const [service1Active, setService1Active] = useState([]);
  const [service2Active, setService2Active] = useState([]);
  const [serviceName, setServiceName] = useState([]);
  const [name, setName] = useState('');
  const [boldtext, setBoldText] = useState('Καλώς Ορίσατε')
  const [serviceText, setServiceText] = useState('Επιλέξτε για να ξεκινήσετε')
  
  useEffect(() => {
    instance.get('/services').then(
      (response) => {
        const res = response.data;
        let tempDomains = []
        let tempservice1 = []
        let tempService2 = []
        let tempStateName = []
        res.forEach((value) => {
          tempDomains[value.name] = value.domain;
          tempservice1 = [...tempservice1, { 'question': value.domain, 'answer': value.service_1 }];
          tempService2 = [...tempService2, { 'question': value.service_1, 'answer': value.service_2 }];
          tempStateName[value.name] = value.service_2;

        });

        setDomains(tempDomains);
        setService1([...new Set(tempservice1.values())]);
        setService2([...new Set(tempService2.values())]);
        setServiceName(tempStateName);
      }
    )
  }, [])

  const updateDom = (question, answer, triggerElement) => {
    let found;
    switch (triggerElement) {
      case 'domain':
        let tmp = service1.filter(x => x.question == answer);
        tmp = tmp.map(a => a.answer)
        setService1Active(tmp);
        setBoldText(answer);
        found = props.data.find((item) => item.question == triggerElement);
        if (typeof found != "undefined") { props.data.splice(found, 1); }
        props.update([...props.data, { 'question': triggerElement, 'answer': answer }]);
        break;
      case 'service_1':
        setServiceText(answer)
        tmp = service2.filter(x => x.question == answer);
        tmp = tmp.map(a => a.answer)
        setService2Active(tmp);
        found = props.data.find((item) => item.question == triggerElement);
        if (typeof found != "undefined") { props.data.splice(found, 1); }
        props.update([...props.data, { 'question': triggerElement, 'answer': answer }]);
        break;
      case 'service_2':
        const name = Object.keys(serviceName).find(key => serviceName[key] === answer);
        props.setActiveService(name);
        found = props.data.find((item) => item.question == triggerElement);
        if (typeof found != "undefined") { props.data.splice(found, 1); }
        props.update([...props.data, { 'question': triggerElement, 'answer': answer }]);
        break;
      default:
        // Δεν ειναι απόλυτα σωστ΄ή προσσέγγιση αλλά λειτουργεί μιας και το default case δεν πορόκεται ποτέ 
        // να είναι κατι διαφορετικό απο το όνομα του request
        props.setName(question.target.value);
        break;
    }
  }
  return (
    <div>
      <h5 className="text-center"><b>{boldtext}</b></h5>
      <p className="text-center">{serviceText}</p>
      <div className="row">
        <div className="col">
          <label for="requestName" >Όνομα Πρότασης</label>
          <input placeholder="Όνομα πρότασης" id="requestName" onChange={updateDom}></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Selector placeholder="Domain" id="domain" onChange={updateDom} values={[...new Set(domains.values())]}></Selector>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <Selector placeholder="Service 1" id="service_1" onChange={updateDom} values={[...new Set(service1Active)]}></Selector>
        </div>
        <div className="col">
          <Selector placeholder="Service 2" id="service_2" onChange={updateDom} values={[...new Set(service2Active)]}></Selector>
        </div>
      </div>
      <div className="d-flex float-end">
        <button onClick={props.newPage} className=" mt-2 btn bg-primary btn-small">Επόμενο</button>
      </div>
    </div>
  )
}

function StepTwo(props) {
  const [domQuestions, setDomQuestions] = useState([]);
  const [activeChuck, setactiveChuck] = useState(0);
  const [question, setQuestion] = useState();
  const [dependQuest, setDependQuest] = useState([]);

  const updateDom = async (question, answer) => {
    setQuestion({ 'question': question[0], 'answer': answer });
  }

  useEffect(() => {
    if (question) {
      // Εαν υπάρχει ήδη η ερώτηση θα πρέπει να αντικατασταθεί με την καινούρια απάντηση
      const found = props.data.find((item) => item.question == question.question);
      if (typeof found != "undefined") { props.data.splice(found, 1); }
      props.update([...props.data, { 'question': question.question, 'answer': question.answer }]);
    }

  }, [question]);

  useEffect(() => {
    if (dependQuest) {
      props.updateQuest([...props.dependencies, { 'name': dependQuest.name, 'question': dependQuest.question }]);
    }
  }, [dependQuest])



  useEffect(() => {
    let step = 2;
    console.log(props.name);
    instance.get(`characteristics?name=${props.name}`).then((response) => {
      let tempQuestions = []
      let chunk = []
      response.data.forEach((element, index) => {
        // Σε αυτο τo Step θα απαντήσουμε μόνο τις ερωτήσεις που δεν έχουν σύνδεση με άλλες 
        // Ελέγχουμε αμα είναι single η multiple answer για να rendaroyme το κατάλληλο dom
        let item;
        if (element.multiple != null) {
          const multiple = element.multiple;
          if (multiple.depend != 0) { setDependQuest({ 'name': multiple.depend, 'question': multiple.multiple_quest }) }
          item = <div key={uuidv4()} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} multiple={true} placeholder={multiple.multiple_quest} id={element.id} values={multiple.multiple_ans}></Selector></div></div>;
        } else if (element.single != null) {
          const single = element.single;
          if (single.depend != 0) { setDependQuest({ 'name': single.depend, 'question': single.single_quest }) }
          item = <div key={uuidv4()} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} placeholder={single.single_quest} id={element.id} values={single.single_ans}></Selector></div></div>;
        } else {
          item = <span><label for={element.id} >{element.text[0]}</label>
            <div key={uuidv4()} className="row"><div className="col mt-2"><input className="form-input" key={index} id={element.id} onChange={updateDom}></input></div></div></span>
        }

        chunk = [...chunk, item];
        if (index % step == 0) {
          tempQuestions = [...tempQuestions, chunk];
          chunk = [];
        }

      })


      // Σε περίτπωση που τελειώσουμε με ζυγό αριθμό ερωτήσεων και δεν περαστεί η τελευταία ερώτηση
      if (response.data.length % step == 0) {
        const index = response.data.length - 1;
        const element = response.data[response.data.length - 1];
        let item;
        if (element.multiple != null) {
          const multiple = element.multiple;
          if (multiple.depend != 0) { setDependQuest({ 'name': multiple.depend, 'question': multiple.multiple_quest }) }
          item = <div key={uuidv4()} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} multiple={true} placeholder={multiple.multiple_quest} id={element.id} values={multiple.multiple_ans}></Selector></div></div>;
        } else {
          const single = element.single;
          if (single.depend != 0) { setDependQuest({ 'name': single.depend, 'question': single.single_quest }) }
          item = <div key={uuidv4()} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} placeholder={single.single_quest} id={element.id} values={single.single_ans}></Selector></div></div>;
        }

        tempQuestions = [...tempQuestions, [item]];
      }
      setDomQuestions(tempQuestions);
    })
  }, [])

  const nextChunck = () => {
    if (activeChuck == domQuestions.length - 1) {
      props.newPage()
    }
    setactiveChuck(activeChuck => activeChuck + 1)
  }

  const prevChuck = () => {
    setactiveChuck(activeChuck => activeChuck - 1)
  }

  return (
    <div>
      <div className="row">
        {domQuestions[activeChuck]}
      </div>
      <div className="d-flex float-end">
        {activeChuck > 0 && <button onClick={prevChuck} className=" mt-2 btn text-primary no-bd btn-secondary-small">Προηγούμενο</button>}
        <button onClick={nextChunck} className=" mt-2 btn bg-primary btn-small">Επόμενο</button>
      </div>
    </div>
  )
}

function StepThree(props) {
  const [domQuestions, setDomQuestions] = useState([]);
  const [activeChuck, setactiveChuck] = useState(0);
  const [question, setQuestion] = useState();
  const [dependQuest, setDependQuest] = useState([]);

  const updateDom = async (question, answer) => {
    setQuestion({ 'question': question[0], 'answer': answer });
  }

  useEffect(() => {
    if (question) {
      props.update([...props.data, { 'question': question.question, 'answer': question.answer }]);
    }

  }, [question]);

  useEffect(() => {
    if (dependQuest) {
      props.updateQuest([...props.dependencies, { 'name': dependQuest.name, 'question': dependQuest.question }]);
    }
  }, [dependQuest])



  useEffect(() => {
    let singleNAmes = props.dependencies.map(function (a) { return a.name; });
    let onlyNames = [...new Set(singleNAmes)];
    let step = 2;

    onlyNames.forEach((name, bigIndex) => {
      if (typeof name == 'undefined') { return; }
      instance.get(`characteristics?name=${name}`).then((response) => {
        let tempQuestions = []
        let chunk = []
        response.data.forEach((element, index) => {
          // Σε αυτο τo Step θα απαντήσουμε μόνο τις ερωτήσεις που δεν έχουν σύνδεση με άλλες 
          // Ελέγχουμε αμα είναι single η multiple answer για να rendaroyme το κατάλληλο dom
          let item;
          if (element.multiple != null) {
            const multiple = element.multiple;
            item = <div key={uuidv4()} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} multiple={true} placeholder={multiple.multiple_quest} id={element.id} values={multiple.multiple_ans}></Selector></div></div>;
          } else {
            const single = element.single;
            item = <div key={uuidv4()} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} placeholder={single.single_quest} id={element.id} values={single.single_ans}></Selector></div></div>;
          }
          // To be added if its text
          chunk = [...chunk, item];
          if (index % step == 0) {
            tempQuestions = [...tempQuestions, chunk];
            chunk = [];
          }

        })
        setDomQuestions(tempQuestions);
      })

    })
  }, []);


  const nextChunck = () => {
    if (activeChuck == domQuestions.length - 1) {
      props.newPage()
    }
    setactiveChuck(activeChuck => activeChuck + 1)
  }

  const prevChuck = () => {
    setactiveChuck(activeChuck => activeChuck - 1)
  }

  return (
    <div>
      <div className="row">
        {domQuestions[activeChuck]}
      </div>
      <div className="d-flex float-end">
        {activeChuck > 0 && <button onClick={prevChuck} className=" mt-2 btn text-primary no-bd btn-secondary-small">Προηγούμενο</button>}
        <button onClick={nextChunck} className=" mt-2 btn bg-primary btn-small">Επόμενο</button>
      </div>
    </div>
  )

}

function StepFour(props) {
  const user = JSON.parse(window.sessionStorage.getItem('application_user'))
  let jsonData = {};
  jsonData['requester'] = user.id;
  jsonData['domain'] = props.data.find((element) => element.question == 'domain').answer;
  jsonData['service_1'] = props.data.find((element) => element.question == 'service_1').answer;
  jsonData['service_2'] = props.data.find((element) => element.question == 'service_2').answer;
  jsonData['answears'] = { 'quest': props.data.filter(x => x.question != 'domain' && x.question != 'service_1' && x.question != 'service_2').map(x => x.question), 'answear': props.data.filter(x => x.question != 'domain' && x.question != 'service_1' && x.question != 'service_2').map(x => x.answer) }
  jsonData['published_at'] = new Date();
  jsonData['updatedAt'] = new Date();
  jsonData['status'] = 'Open';
  jsonData['name'] = props.name;
  jsonData['created'] = new Date();

  axios.post('http://islab-thesis.aegean.gr:82/trans/api/requests', jsonData).then((response) => {
    if (response.status = 200) {
      console.log('Successfully Sent')
      setModalStatus(!modalIsOpen);
    }
  }

  )
  return (
    <div>
      <p>Τα στοιχεία σας αποθηκεύτικαν με επιτυχία !</p>
    </div>
  )
}