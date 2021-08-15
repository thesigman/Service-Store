import { useState, useEffect, Children } from "react";
import styles from "./form.module.scss";
import Selector from "../Selector/selector";
import axios from '../../pages/api/axiosConfiguration'


export default function MultiStepForm() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([])
  const [name, setName] = useState(0)

  const newPage = () => {
    setPage(page => page + 1);
    console.log(data);
  }



  return (
    <div className={[styles.formCard, 'p-4'].join(' ')}>
      <p>Ερώτηση {page} από 3</p>
      <div>
        {page === 1 && <StepOne name={setName} data={data} newPage={newPage} update={setData} />}
        {page === 2 && <StepTwo name={name} newPage={newPage} data={data} update={setData} />}
        {page === 3 && <StepThree name={name} newPage={newPage} data={data} update={setData} />}
      </div>
    </div>
  )
}


function StepOne(props) {
  const [domains, setDomains] = useState([]);
  const [service1, setService1] = useState([]);
  const [service2, setService2] = useState([]);
  const [service1Active, setService1Active] = useState([]);
  const [service2Active, setService2Active] = useState([]);
  const [serviceName, setServiceName] = useState([])
  useEffect(() => {
    axios.get('/services').then(
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
    switch (triggerElement) {
      case 'domain':
        let tmp = service1.filter(x => x.question == answer);
        tmp = tmp.map(a => a.answer)
        setService1Active(tmp);
        props.update([...props.data, { 'question': triggerElement, 'answer': answer }]);
        break;
      case 'service_1':
        tmp = service2.filter(x => x.question == answer);
        tmp = tmp.map(a => a.answer)
        setService2Active(tmp);
        props.update([...props.data, { 'question': triggerElement, 'answer': answer }]);
        break;
      case 'service_2':
        const name = Object.keys(serviceName).find(key => serviceName[key] === answer);
        props.name(name);
        props.update([...props.data, { 'question': triggerElement, 'answer': answer }]);
        break;
    }
  }
  return (
    <div>
      <h5 className="text-center"><b>Ανάπτυξη Website</b></h5>
      <p className="text-center">Κατασκευή e-shop</p>
      <div className="row">
        <div className="col">
          <Selector placeholder="Domain" id="domain" onChange={updateDom} values={[...new Set(domains.values())]}></Selector>
        </div>
        <div className="col">
          <Selector placeholder="Service 1" id="service_1" onChange={updateDom} values={[...new Set(service1Active)]}></Selector>
        </div>
      </div>
      <div className="row mt-2">
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

  const updateDom = async (question, answer) => {
    setQuestion({ 'question': question[0], 'answer': answer });
  }

  useEffect(() => {
    if (question) {
      props.update([...props.data, { 'question': question.question, 'answer': question.answer }]);
    }

  }, [question])


  useEffect(() => {
    let step = 2;
    axios.get(`characteristics?name=${props.name}`).then((response) => {
      let tempQuestions = []
      let chunk = []
      response.data.forEach((element, index) => {
        // Σε αυτο τo Step θα απαντήσουμε μόνο τις ερωτήσεις που δεν έχουν σύνδεση με άλλες 
        // Ελέγχουμε αμα είναι single η multiple answer για να rendaroyme το κατάλληλο dom
        let item;
        if (element.multiple != null) {
          const multiple = element.multiple;
          if(multiple.depend != 0) {console.log(multiple.depend)}
          item = <div key={index} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} multiple={true} placeholder={multiple.multiple_quest} id={element.id} values={multiple.multiple_ans}></Selector></div></div>;
        } else {
          const single = element.single;
          if(single.depend != 0) {console.log(single.depend)}
          item = <div key={index} className="row"><div className="col mt-2"><Selector key={index} onChange={updateDom} placeholder={single.single_quest} id={element.id} values={single.single_ans}></Selector></div></div>;
        }
        chunk = [...chunk, item];
        if (index % step == 0) {
          tempQuestions = [...tempQuestions, chunk];
          chunk = [];
        }

      })
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
 
}