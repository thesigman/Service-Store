import { Component } from "react";
// import Modal from "react-modal";
import { devteam2 } from "../../pages/api/axiosConfiguration";

import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import Success from "./Success";

class PMultistepForm extends Component {
  state = {
    step: 1,
    name: "",
    width: 0,
    selectedDomain: null,
    selectedService1: null,
    selectedService2: null,
    request: {},
    answears: {},
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.setState({ name:value });
    this.setState({
      selectedDomain: localStorage.getItem("domain")
        ? {
            label: localStorage.getItem("domain").slice(2),
            value: localStorage.getItem("domain"),
          }
        : null,
    });
  }

  searchDomain = async (inputValue) => {
    console.log("input domain value: ", inputValue);

    // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
    // dioti apo th vash 8a ferei ola ta apotelesmata
    const regex = new RegExp("^\\s+|^[0-9]|^\\.");

    // elegxoume ean tairiazei tote kanoume return
    if (regex.test(inputValue)) {
      return;
    } else {
      // alliws kanoume kanonika to request
      const response = await devteam2.post("/services/domain", { inputValue });
      console.log("before", response.data);
      const services = response.data.map((service) => ({
        label: service.slice(2),
        value: service,
      }));

      console.log(services);
      return services;
    }
  };

  searchService1 = async (inputValue) => {
    console.log("input service1 value: ", inputValue);

    // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
    // dioti apo th vash 8a ferei ola ta apotelesmata
    const regex = new RegExp("^\\s+|^[0-9]|^\\.");

    // elegxoume ean tairiazei tote kanoume return
    if (regex.test(inputValue)) {
      console.log("sadd");
      return;
    } else {
      //to  selectedDomain einai ena antikeimeno
      //selectedDomain: { label: ' Ψηφιακές Δεξιότητες', value: '5. Ψηφιακές Δεξιότητες' }
      const response = await devteam2.post("/services/service_1", {
        inputValue,
        domain: this.state.selectedDomain,
      });
      const services1 = response.data[0].service_1.map((service) => ({
        label: service.slice(3),
        value: service,
      }));

      console.log(services1);
      return services1;
    }
  };

  searchService2 = async (inputValue) => {
    console.log("input service2 value: ", inputValue);

    // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
    // dioti apo th vash 8a ferei ola ta apotelesmata
    const regex = new RegExp("^\\s+|^[0-9]|^\\.");

    // elegxoume ean tairiazei tote kanoume return
    if (regex.test(inputValue)) {
      return;
    } else {
      const response = await devteam2.post("/services/service_2", {
        inputValue,
        service1: this.state.selectedService1,
      });
      const services2 = response.data[0].service_2.map((service) => ({
        label: service.slice(5),
        value: service,
      }));

      console.log(services2);
      return services2;
    }
  };

  renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <StepOne
            width={this.state.width}
            nextStep={this.nextStep}
            setWidth={this.setWidth}
            name={this.state.name}
            setName={this.setName}
            selectedDomain={this.state.selectedDomain}
            setSelectedDomain={this.setDomain}
            selectedService1={this.state.selectedService1}
            setSelectedService1={this.setService1}
            selectedService2={this.state.selectedService2}
            setSelectedService2={this.setService2}
            searchDomain={this.searchDomain}
            searchService1={this.searchService1}
            searchService2={this.searchService2}
          />
        );
      case 2:
        return (
          <StepTwo
            width={this.state.width}
            nextStep={this.nextStep}
            setWidth={this.setWidth}
            prevStep={this.prevStep}
            selectedService2={this.state.selectedService2}
            setAnswers={this.setAnswers}
          />
        );
      case 3:
        return (
          <StepThree
            width={this.state.width}
            nextStep={this.nextStep}
            setWidth={this.setWidth}
            prevStep={this.prevStep}
            name={this.state.name}
            answears={this.state.answears}
            sendRequest={this.sendRequest}
          />
        );
      case 4:
        return <Success closeModal={this.props.closeModal} />;
    }
  };

  setName = (name) => {
    this.setState({ name });
  };
  setWidth = (width) => {
    this.setState({ width });
  };
  getWidth = () => {
    return { width: `${this.state.width}%` };
  };
  setDomain = (domain) => {
    this.setState({ selectedDomain: domain });
  };
  setService1 = (service1) => {
    this.setState({ selectedService1: service1 });
  };
  setService2 = (service2) => {
    this.setState({ selectedService2: service2 });
  };
  setAnswers = (quest, answear) => {
    let answears = { quest, answear };
    this.setState({ answears });
  };
  nextStep = () => {
    // this.setState({ step: this.state.step + 1 });
    this.setState((prevState) => {
      return { step: prevState.step + 1 };
    });
  };
  prevStep = () => {
    // this.setState({ step: this.state.step - 1 });
    this.setState((prevState) => {
      return { step: prevState.step - 1 };
    });
  };

  sendRequest = async () => {
    let request = {
      requester: JSON.parse(sessionStorage.getItem("application_user")).id,
      domain: this.state.selectedDomain.value,
      service_1: this.state.selectedService1.value,
      service_2: this.state.selectedService2.value,
      answears: this.state.answears,
      status: "Open",
      name: this.state.name,
      created: new Date(),
    };
    this.setState({ request });
    console.log("Created Request: ", request);
    const response = await devteam2.post("/requests", request);
    console.log(response.data);
  };

  render() {
    const { step, width } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-end">
          <button
            className="btn-close"
            onClick={this.props.closeModal}
          ></button>
        </div>

        <div className="row p-2">
          {/* {localStorage.getItem("domain")} */}
          <div>{this.renderSwitch(step)}</div>
        </div>
        <div className="row p-2 justify-content-center">
          <div className="col-10">
            <div className="progress" style={{ height: "3px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={this.getWidth(width)}
                // aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
        {step < 4 && (
          <div className="row justify-content-center">Βήμα {step} από 3</div>
        )}
      </div>
    );
  }
}

export default PMultistepForm;

// export default function PMultiStepForm(props) {
//   const [step, setStep] = useState(1);
//   // const [modalIsOpen, setModalStatus] = useState(false);
//   const [name, setName] = useState("");
//   const [width, setWidth] = useState(0);
//   const [selectedDomain, setSelectedDomain] = useState(
//     localStorage.getItem("domain")
//       ? {
//           label: localStorage.getItem("domain").slice(2),
//           value: localStorage.getItem("domain"),
//         }
//       : null
//   );

//   const [selectedService1, setSelectedService1] = useState(null);
//   const [selectedService2, setSelectedService2] = useState(null);
//   const [request, setRequest] = useState(null);

//   const getWidth = (width) => {
//     return { width: `${width}%` };
//   };

//   const searchDomain = async (inputValue) => {
//     console.log("input domain value: ", inputValue);

//     // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
//     // dioti apo th vash 8a ferei ola ta apotelesmata
//     const regex = new RegExp("^\\s+|^[0-9]|^\\.");

//     // elegxoume ean tairiazei tote kanoume return
//     if (regex.test(inputValue)) {
//       return;
//     } else {
//       // alliws kanoume kanonika to request
//       const response = await devteam2.post("/services/domain", { inputValue });
//       console.log("before", response.data);
//       const services = response.data.map((service) => ({
//         label: service.slice(2),
//         value: service,
//       }));

//       console.log(services);
//       return services;
//     }
//   };

//   const searchService1 = async (inputValue) => {
//     console.log("input service1 value: ", inputValue);

//     // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
//     // dioti apo th vash 8a ferei ola ta apotelesmata
//     const regex = new RegExp("^\\s+|^[0-9]|^\\.");

//     // elegxoume ean tairiazei tote kanoume return
//     if (regex.test(inputValue)) {
//       return;
//     } else {
//       //to  selectedDomain einai ena antikeimeno
//       //selectedDomain: { label: ' Ψηφιακές Δεξιότητες', value: '5. Ψηφιακές Δεξιότητες' }
//       const response = await devteam2.post("/services/service_1", {
//         inputValue,
//         domain: selectedDomain,
//       });
//       const services1 = response.data[0].service_1.map((service) => ({
//         label: service.slice(3),
//         value: service,
//       }));

//       console.log(services1);
//       return services1;
//     }
//   };

//   const searchService2 = async (inputValue) => {
//     console.log("input service2 value: ", inputValue);

//     // dhmiourgoume regex gia na elegxoume ean grafei space, ari8mo h teleia . ws prwto xarakthra
//     // dioti apo th vash 8a ferei ola ta apotelesmata
//     const regex = new RegExp("^\\s+|^[0-9]|^\\.");

//     // elegxoume ean tairiazei tote kanoume return
//     if (regex.test(inputValue)) {
//       return;
//     } else {
//       const response = await devteam2.post("/services/service_2", {
//         inputValue,
//         service1: selectedService1,
//       });
//       const services2 = response.data[0].service_2.map((service) => ({
//         label: service.slice(5),
//         value: service,
//       }));

//       console.log(services2);
//       return services2;
//     }
//   };
//   // liar
//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const renderSwitch = (step) => {
//     switch (step) {
//       case 1:
//         return (
//           <StepOne
//             nextStep={nextStep}
//             setWidth={setWidth}
//             name={name}
//             setName={setName}
//             selectedDomain={selectedDomain}
//             setSelectedDomain={setSelectedDomain}
//             selectedService1={selectedService1}
//             setSelectedService1={setSelectedService1}
//             selectedService2={selectedService2}
//             setSelectedService2={setSelectedService2}
//             searchDomain={searchDomain}
//             searchService1={searchService1}
//             searchService2={searchService2}
//           />
//         );
//       case 2:
//         return (
//           <StepTwo
//             nextStep={nextStep}
//             setWidth={setWidth}
//             prevStep={prevStep}
//             selectedService2={selectedService2}
//           />
//         );
//       case 3:
//         return (
//           <StepThree
//             nextStep={nextStep}
//             setWidth={setWidth}
//             prevStep={prevStep}
//             name={name}
//           />
//         );
//       case 4:
//         return <Success closeModal={props.closeModal} />;
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-end">
//         <button className="btn-close" onClick={props.closeModal}></button>
//       </div>

//       <div className="row p-2">
//         {/* {localStorage.getItem("domain")} */}
//         <div>{renderSwitch(step)}</div>
//       </div>
//       <div className="row p-2 justify-content-center">
//         <div className="col-10">
//           <div className="progress" style={{ height: "3px" }}>
//             <div
//               className="progress-bar bg-primary"
//               role="progressbar"
//               style={getWidth(width)}
//               // aria-valuenow={0}
//               aria-valuemin={0}
//               aria-valuemax={100}
//             ></div>
//           </div>
//         </div>
//       </div>
//       {step < 4 && (
//         <div className="row justify-content-center">Βήμα {step} από 3</div>
//       )}
//     </div>
//   );
// }
