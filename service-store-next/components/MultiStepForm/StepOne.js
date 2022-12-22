import AsyncSelect from "react-select/async";

{
  /* STATELESS COMPONENT */
}

// const StepOne = (props) => {
//   const handleDomain = (inputValue) => {
//     props.setSelectedDomain(inputValue);
//   };

//   const handleService1 = (inputValue) => {
//     props.setSelectedService1(inputValue);
//   };

//   const handleService2 = (inputValue) => {
//     props.setSelectedService2(inputValue);
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row p-2">
//         <h5 className="fs-5 text-center">Δημιουργία αιτήματος</h5>
//       </div>
//       <div className="row p-2 text-center">
//         <p>Συμπληρώστε τα στοιχεία και προχωρήσετε στο επόμενο βήμα</p>
//       </div>
//       <div className="row p-2">
//         <div className="col">
//           <div className="form-floating mb-3">
//             <input
//               value={props.name}
//               type="text"
//               className="form-control"
//               id="floatingInput"
//               placeholder="Το εκπληκτικό μου αίτημα"
//               onChange={(e) => props.setName(e.target.value)}
//               required
//             />
//             <label htmlFor="floatingInput">Τίτλος αιτήματος</label>
//           </div>
//         </div>
//       </div>
//       <div className="row p-2">
//         <div className="col">
//           <AsyncSelect
//             value={props.selectedDomain}
//             defaultInputValue={
//               localStorage.getItem("domain")
//                 ? localStorage.getItem("domain").slice(2)
//                 : null
//             }
//             instanceId="domain"
//             loadOptions={props.searchDomain}
//             placeholder="Αναζητήστε κατηγορία υπηρεσιών"
//             // onChange={setSelectedDomain}
//             onChange={handleDomain}
//             noOptionsMessage={() => "Κανένα αποτέλεσμα"}
//             loadingMessage={() => "Φόρτωση..."}
//           />
//         </div>
//       </div>
//       <div className="row p-2">
//         <div className="col-xl-6 p-2">
//           <AsyncSelect
//             value={props.selectedService1}
//             instanceId="service1"
//             loadOptions={props.searchService1}
//             placeholder="Αναζητήστε υπηρεσία"
//             onChange={handleService1}
//             loadingMessage={() => "Φόρτωση..."}
//             noOptionsMessage={() => "Κανένα αποτέλεσμα"}
//             isDisabled={props.selectedDomain ? false : true}
//           />
//         </div>
//         <div className="col-xl-6 p-2">
//           <AsyncSelect
//             value={props.selectedService2}
//             instanceId="service2"
//             loadOptions={props.searchService2}
//             placeholder="Αναζητήστε υποϋπηρεσία"
//             onChange={handleService2}
//             loadingMessage={() => "Φόρτωση..."}
//             noOptionsMessage={() => "Κανένα αποτέλεσμα"}
//             isDisabled={props.selectedService1 ? false : true}
//           />
//         </div>
//       </div>
//       <div className="row p-2 justify-content-end">
//         <button
//           onClick={() => {
//             localStorage.removeItem("domain"),
//               props.setSelectedDomain(null),
//               props.setSelectedService1(null),
//               props.setSelectedService2(null);
//           }}
//           className="btn bg-warning btn-small m-2"
//         >
//           Καθαρισμός
//         </button>
//         <button
//           onClick={() => {
//             props.nextStep(), props.setWidth((width) => width + 34);
//           }}
//           className="btn bg-primary btn-small m-2"
//           disabled={
//             props.selectedService2 && props.name.length > 0 ? false : true
//           }
//         >
//           Επόμενο
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StepOne;

{
  /*CLASS COMPONENT */
}

const StepOne = (props) => {
  const handleDomain = (inputValue) => {
    props.setSelectedDomain(inputValue);
  };

  const handleService1 = (inputValue) => {
    props.setSelectedService1(inputValue);
  };

  const handleService2 = (inputValue) => {
    props.setSelectedService2(inputValue);
  };

  return (
    <div className="container-fluid">
      <div className="row p-2">
        <h5 className="fs-5 text-center">Δημιουργία αιτήματος 1</h5>
      </div>
      <div className="row p-2 text-center">
        <p>Συμπληρώστε τα στοιχεία και προχωρήσετε στο επόμενο βήμα</p>
      </div>
      <div className="row p-2">
        <div className="col">
          <div className="form-floating mb-3">
            <input
              value={props.name}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Το εκπληκτικό μου αίτημα"
              onChange={(e) => props.setName(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Όνομα αιτήματος</label>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col">
          <AsyncSelect
            value={props.selectedDomain}
            defaultInputValue={
              localStorage.getItem("domain")
                ? localStorage.getItem("domain").slice(2)
                : null
            }
            instanceId="domain"
            loadOptions={props.searchDomain}
            placeholder="Αναζητήστε κατηγορία υπηρεσιών"
            // onChange={setSelectedDomain}
            onChange={handleDomain}
            noOptionsMessage={() => "Κανένα αποτέλεσμα"}
            loadingMessage={() => "Φόρτωση..."}
          />
        </div>
      </div>
      <div className="row p-2">
        <div className="col-xl-6 p-2">
          <AsyncSelect
            value={props.selectedService1}
            instanceId="service1"
            loadOptions={props.searchService1}
            placeholder="Αναζητήστε υπηρεσία"
            onChange={handleService1}
            loadingMessage={() => "Φόρτωση..."}
            noOptionsMessage={() => "Κανένα αποτέλεσμα"}
            isDisabled={props.selectedDomain ? false : true}
          />
        </div>
        <div className="col-xl-6 p-2">
          <AsyncSelect
            value={props.selectedService2}
            instanceId="service2"
            loadOptions={props.searchService2}
            placeholder="Αναζητήστε υποϋπηρεσία"
            onChange={handleService2}
            loadingMessage={() => "Φόρτωση..."}
            noOptionsMessage={() => "Κανένα αποτέλεσμα"}
            isDisabled={props.selectedService1 ? false : true}
          />
        </div>
      </div>
      <div className="row p-2 justify-content-end">
        <button
          onClick={() => {
            localStorage.removeItem("domain"),
              props.setSelectedDomain(null),
              props.setSelectedService1(null),
              props.setSelectedService2(null);
            props.setName("");
          }}
          className="btn bg-warning btn-small m-2"
        >
          Καθαρισμός
        </button>
        <button
          onClick={() => {
            props.nextStep(), props.setWidth(props.width + 34);
          }}
          className="btn bg-primary btn-small m-2"
          disabled={
            props.selectedService2 && props.name.length > 0 ? false : true
          }
        >
          Επόμενο
        </button>
      </div>
    </div>
  );
};

export default StepOne;
