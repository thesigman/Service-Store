import { useState, useEffect } from "react";
import { devteam2 } from "../../pages/api/axiosConfiguration";
import Select from "react-select";
import { toast, ToastContainer } from "react-nextjs-toast";

{
  /* STATELESS COMPONENT */
}
// const StepTwo = (props) => {
//   const [objects, setObjects] = useState([]);
//   const [question, setQuestion] = useState(0);

//   useEffect(async () => {
//     const response = await devteam2.post(
//       "/services/characteristics",
//       props.selectedService2
//     );
//     setObjects(response.data);
//     console.log("response data", response.data);
//   }, []);

//   const renderQuestions = (obj) => {
//     if (obj.text != null) {
//       return (
//         <>
//           <p>questionid: {obj.QuestID}</p>
//           <p className="fs-5">{obj.text.text}</p>
//           <div className="col-xl-6 p-2">
//             <input
//               className="form-control"
//               type="text"
//               placeholder="Απαντήστε"
//               onChange={(inputValue) => console.log("inputValue", inputValue)}
//             />
//           </div>
//         </>
//       );
//     } else if (obj.single != null && obj.single.attach === false) {
//       const answers = obj.single.single_ans.map((ans) => ({
//         label: ans,
//         value: ans,
//       }));
//       console.log("answers", answers);
//       return (
//         <>
//           <p>questionid: {obj.QuestID}</p>
//           <p className="fs-5">{obj.single.single_quest[0]}</p>

//           <div className="col-xl-6 p-2">
//             <Select
//               instanceId={obj._id}
//               options={answers}
//               onChange={(inputValue) => console.log("input Value", inputValue)}
//               defaultValue={() => obj.single.single_ans[0]}
//               loadingMessage={() => "Φόρτωση..."}
//               noOptionsMessage={() => "Κανένα αποτέλεσμα"}
//               isSearchable={false}
//             />
//           </div>
//         </>
//       );
//     } else if (obj.single != null && obj.single.attach === true) {
//       const answers = obj.single.single_ans.map((ans) => ({
//         label: ans,
//         value: ans,
//       }));
//       console.log("answers", answers);
//       return (
//         <>
//           <p>questionid: {obj.QuestID}</p>
//           <p className="fs-5">{obj.single.single_quest[0]}</p>

//           <div className="col-xl-6 p-2">
//             <Select
//               instanceId={obj._id}
//               options={answers}
//               onChange={(inputValue) => console.log("input Value", inputValue)}
//               defaultValue={() => obj.single.single_ans[0]}
//               loadingMessage={() => "Φόρτωση..."}
//               noOptionsMessage={() => "Κανένα αποτέλεσμα"}
//               isSearchable={false}
//             />
//           </div>
//           <div className="col-xl-6 p-2">
//             <div class="mb-3">
//               <label htmlFor="formFile" className="form-label">
//                 Default file input example
//               </label>
//               <input className="form-control" type="file" id="formFile" />
//             </div>
//           </div>
//         </>
//       );
//     } else if (obj.multiple != null) {
//       const answers = obj.multiple.multiple_ans.map((ans) => ({
//         label: ans,
//         value: ans,
//       }));
//       console.log("answers", answers);

//       return (
//         <>
//           <p>questionid: {obj.QuestID}</p>
//           <p className="fs-5">{obj.multiple.multiple_quest[0]}</p>

//           <div className="col-xl-6 p-2">
//             <Select
//               instanceId={obj._id}
//               options={answers}
//               onChange={(inputValue) => console.log("input Value", inputValue)}
//               defaultValue={obj.multiple.multiple_ans[0]}
//               loadingMessage={() => "Φόρτωση..."}
//               noOptionsMessage={() => "Κανένα αποτέλεσμα"}
//               isSearchable={false}
//               isMulti
//             />
//           </div>
//         </>
//       );
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row text-center p-2">
//         <p className="fs-4">Βήμα 2</p>
//         <p>Απάντηση ερωτήσεων</p>
//       </div>
//       <div className="row justify-content-center p-2">
//         {objects.length > 0 ? (
//           renderQuestions(objects[question])
//         ) : (
//           <p>no questions</p>
//         )}
//       </div>
//       <div className="row p-2 justify-content-end">
//         {question == 0 || (
//           <button
//             onClick={() => setQuestion((question) => question - 1)}
//             className=" m-2 btn bg-primary btn-small"
//           >
//             Προηγούμενη ερώτηση
//           </button>
//         )}
//         {question == objects.length - 1 || (
//           <button
//             onClick={() => setQuestion((question) => question + 1)}
//             className=" m-2 btn bg-primary btn-small"
//           >
//             Επόμενη ερωτηση
//           </button>
//         )}
//       </div>
//       {question == objects.length - 1 && (
//         // {/* STATELESS COMPONENT */}
//         // <div className="row p-2 justify-content-end">
//         //   <button
//         //     onClick={() => {
//         //       props.prevStep(), props.setWidth((width) => width - 34);
//         //     }}
//         //     className=" m-2 btn bg-primary btn-small"
//         //   >
//         //     Προηγούμενο
//         //   </button>
//         //   <button
//         //     onClick={() => {
//         //       props.nextStep(), props.setWidth((width) => width + 34);
//         //     }}
//         //     className=" m-2 btn bg-primary btn-small"
//         //   >
//         //     Επόμενο
//         //   </button>
//         // </div>
//         // {/* CLASS COMPONENT */}
//         <div className="row p-2 justify-content-end">
//           <button
//             onClick={() => {
//               props.prevStep(), props.setWidth(props.width - 34);
//             }}
//             className=" m-2 btn bg-primary btn-small"
//           >
//             Προηγούμενο
//           </button>
//           <button
//             onClick={() => {
//               props.nextStep(), props.setWidth(props.width + 34);
//             }}
//             className=" m-2 btn bg-primary btn-small"
//           >
//             Επόμενο
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StepTwo;

{
  /* CLASS COMPONENT */
}

const StepTwo = (props) => {
  const [objects, setObjects] = useState([]);
  const [question, setQuestion] = useState(0);

  const [quest, setQuest] = useState([]);
  const [answear, setAsnwear] = useState([]);

  useEffect(async () => {
    const response = await devteam2.post(
      "/services/characteristics",
      props.selectedService2
    );
    setObjects(response.data);
    console.log("response data", response.data);
  }, []);

  const handleAnswers = (answer, q) => {
    console.log("quest table: ", quest);
    console.log("answear table: ", answear);

    console.log("answer", answer);
    console.log(q);

    let newQuest = quest;
    let newAns = answear;

    if (newQuest.length == 0) {
      newQuest.push(q);
      setQuest(newQuest);
      newAns.push(answer.value);
      setAsnwear(newAns);
      return;
    }
    const foundQuest = newQuest.find((element) => element == q);
    if (foundQuest) {
      // let index = newQuest.findIndex(foundQuest);
      newQuest[question] = q;
      setQuest(newQuest);
      newAns[question] = answer.value;
      setAsnwear(newAns);
      return;
    } else {
      newQuest.push(q);
      setQuest(newQuest);
    }
    newAns.push(answer.value);
    setAsnwear(newAns);
  };

  const renderQuestions = (obj) => {
    if (obj.text != null) {
      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{obj.text.text}</p>
          <div className="col-xl-6 p-2">
            <input
              className="form-control"
              type="text"
              placeholder="Απαντήστε στην ερώτηση"
              onChange={(inputValue) =>
                handleAnswers(inputValue, obj.text.text)
              }
            />
          </div>
        </>
      );
    } else if (obj.single != null && obj.single.attach === false) {
      const answers = obj.single.single_ans.map((ans) => ({
        label: ans,
        value: ans,
      }));
      console.log("answers", answers);
      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{obj.single.single_quest[0]}</p>

          <div className="col-xl-6 p-2">
            <Select
              instanceId={obj._id}
              options={answers}
              // onChange={(inputValue) => console.log("input Value", inputValue)}
              onChange={(inputValue) =>
                handleAnswers(inputValue, obj.single.single_quest[0])
              }
              // defaultValue={{
              //   label: obj.single.single_ans[0],
              //   value: obj.single.single_ans[0],
              // }}
              placeholder="Επιλέξτε την απάντησή σας"
              loadingMessage={() => "Φόρτωση..."}
              noOptionsMessage={() => "Κανένα αποτέλεσμα"}
              isSearchable={false}
            />
          </div>
        </>
      );
    } else if (obj.single != null && obj.single.attach === true) {
      const answers = obj.single.single_ans.map((ans) => ({
        label: ans,
        value: ans,
      }));
      console.log("answers", answers);
      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{obj.single.single_quest[0]}</p>

          <div className="col-xl-6 p-2">
            <Select
              instanceId={obj._id}
              options={answers}
              onChange={(inputValue) =>
                handleAnswers(inputValue, obj.single.single_quest[0])
              }
              defaultValue={() => obj.single.single_ans[0]}
              loadingMessage={() => "Φόρτωση..."}
              noOptionsMessage={() => "Κανένα αποτέλεσμα"}
              placeholder="Επιλέξτε την απάντησή σας"
              isSearchable={false}
            />
          </div>
          <div className="col-xl-6 p-2">
            <div class="mb-3">
              <label htmlFor="formFile" className="form-label">
                Μεταφόρτωση αρχείου
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
        </>
      );
    } else if (obj.multiple != null) {
      const answers = obj.multiple.multiple_ans.map((ans) => ({
        label: ans,
        value: ans,
      }));
      console.log("answers", answers);

      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{obj.multiple.multiple_quest[0]}</p>

          <div className="col-xl-6 p-2">
            <Select
              instanceId={obj._id}
              options={answers}
              onChange={(inputValue) =>
                handleAnswers(inputValue, obj.multiple.multiple_quest[0])
              }
              defaultValue={obj.multiple.multiple_ans[0]}
              loadingMessage={() => "Φόρτωση..."}
              noOptionsMessage={() => "Κανένα αποτέλεσμα"}
              placeholder="Επιλέξτε την/τις απάντησή/απαντήσεις σας"
              isSearchable={false}
              isMulti
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row text-center p-2">
        <p className="fs-4">Βήμα 2</p>
        <p>Απάντηση ερωτήσεων</p>
      </div>
      <div className="row justify-content-center p-2">
        {objects.length > 0 ? (
          renderQuestions(objects[question])
        ) : (
          <p>no questions</p>
        )}
      </div>
      <div className="row p-2 justify-content-end">
        {question == 0 || (
          <button
            onClick={() => setQuestion((question) => question - 1)}
            className=" m-2 btn bg-primary btn-small"
          >
            Προηγούμενη ερώτηση
          </button>
        )}
        {question == objects.length - 1 || (
          <button
            onClick={() => setQuestion((question) => question + 1)}
            className=" m-2 btn bg-primary btn-small"
            // disabled={question > quest.length ? true : false}
          >
            Επόμενη ερώτηση
          </button>
        )}
      </div>
      {question == objects.length - 1 && (
        <div className="row p-2 justify-content-end">
          <button
            onClick={() => {
              props.prevStep(), props.setWidth(props.width - 34);
            }}
            className=" m-2 btn bg-primary btn-small"
          >
            Προηγούμενο
          </button>
          <button
            onClick={() =>
              objects.length == quest.length
                ? (props.nextStep(),
                  props.setWidth(props.width + 34),
                  props.setAnswers(quest, answear))
                : toast.notify(
                    "Συμπληρώστε όλες τις ερωτήσεις για να προχωρήσετε",
                    {
                      duration: 5,
                      type: "success",
                      title: "Service Store",
                    }
                  )
            }
            className=" m-2 btn bg-primary btn-small"
          >
            Επόμενο
          </button>
        </div>
      )}
      <ToastContainer
        align={"left"}
        position={"bottom"}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default StepTwo;
