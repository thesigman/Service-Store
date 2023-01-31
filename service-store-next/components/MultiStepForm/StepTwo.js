import { useState, useEffect } from "react";
import { devteam2 } from "../../pages/api/axiosConfiguration";
import Select from "react-select";
import { toast, ToastContainer } from "react-nextjs-toast";
import styles from "./test.module.scss";

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

  const [terms, setTerms] = useState([]);

  useEffect(async () => {
    const response = await devteam2.post(
      "/services/characteristics",
      props.selectedService2
    );
    setObjects(response.data);
    console.log("response data", response.data);
  }, []);

  useEffect(async () => {
    const term = await devteam2.get("/terms");
    setTerms(term.data);
    console.log("term data", term.data);
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

  const findSubstrings = (string, substrings) => {
    const termsInString = new Array();

    for (const i in substrings) {
      if (
        string.toLowerCase().indexOf(substrings[i].term.toLowerCase()) != -1
      ) {
        termsInString.push(substrings[i]);
      }
    }

    if (termsInString.length > 1) {
      for (const i in termsInString) {
        for (const j in termsInString) {
          if (
            termsInString[i].term
              .toLowerCase()
              .indexOf(termsInString[j].term.toLowerCase()) != -1
          ) {
            termsInString.splice(i, 1);
          } else if (
            termsInString[j].term
              .toLowerCase()
              .indexOf(termsInString[i].term.toLowerCase()) != -1
          ) {
            termsInString.splice(j, 1);
          }
        }
      }
    }
    return termsInString;
  };

  const replaceWithTooltip = (string, subTerm, tooltip, isQuestion) => {
    if (typeof string === "string") {
      const getIndex1 = string.toLowerCase().indexOf(subTerm.toLowerCase());
      const getIndex2 =
        string.toLowerCase().indexOf(subTerm.toLowerCase()) + subTerm.length;
      const chars = [" ", "-", "/", ".", ",", ";", "?"];
      const tooltipStyle = styles.tooltipright;
      const tooltipTextStyle = styles.tooltiprighttext;

      if (isQuestion) {
        tooltipStyle = styles.tooltip;
        tooltipTextStyle = styles.tooltiptext;
      }

      if (
        (chars.some((elem) => string[getIndex1 - 1] === elem) ||
          getIndex1 === 0) &&
        (chars.some((elem) => string[getIndex2] === elem) ||
          getIndex2 === string.length)
      ) {
        return (
          <>
            <span>{string.substring(0, getIndex1)} </span>
            <div className={["p-1", tooltipStyle].join(" ")}>
              {string.substring(getIndex1, getIndex2)}
              <span
                className={["p-1", tooltipTextStyle].join(" ")}
                data-container="body"
              >
                {tooltip}
              </span>
            </div>
            <span>{string.substring(getIndex2, string.length)}</span>
          </>
        );
      } else {
        return string;
      }
    }
  };

  /* const createFinalStrings = (quest1, ans1) => {
    const result4 = new Array();
    console.log("answers", ans1);

    for (const i in ans1) {
      result4[i] = terms.some((element) =>
        ans1[i].toLowerCase().includes(element.term.toLowerCase())
      );
    }

    result4[result4.length] = terms.some((element) =>
      quest1.toLowerCase().includes(element.term.toLowerCase())
    );

    const result4Checker = (result4) => result4.some(Boolean);
    //const newQuestString4 = obj.multiple.multiple_quest[0];
    //const newAnsStrings4 = obj.multiple.multiple_ans;
    const newQuestString4 = quest1;
    const newAnsStrings4 = ans1;

    if (result4Checker) {
      const questStringsFound = findSubstrings(quest1, terms);
      for (const j in questStringsFound) {
        newQuestString4 = replaceWithTooltip(
          quest1,
          questStringsFound[j].term,
          questStringsFound[j].expl
        );
      }

      for (const j in newAnsStrings4) {
        if (result4[j] === true) {
          const termsFound = findSubstrings(ans1[j], terms);
          for (const k in termsFound)
            newAnsStrings4[j] = replaceWithTooltip(
              ans1[j],
              termsFound[k].term,
              termsFound[k].expl
            );
        }
      }
    }
    return { newQuest: newQuestString4, newAnswers: newAnsStrings4 };
  }; */

  const renderQuestions = (obj) => {
    if (obj.text != null) {
      const result1 = terms.some((element) =>
        obj.text.text.includes(element.term)
      );
      console.log("cat1");

      const newQuestString = obj.text.text;

      if (result1) {
        const stringsFound = findSubstrings(obj.single.single_quest[0], terms);

        for (const i in stringsFound) {
          newQuestString = replaceWithTooltip(
            obj.text.text,
            stringsFound[i].term,
            stringsFound[i].expl,
            true
          );
        }
      }

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
      const result2 = new Array();

      for (const i in obj.single.single_ans) {
        result2[i] = terms.some((element) =>
          obj.single.single_ans[i]
            .toLowerCase()
            .includes(element.term.toLowerCase())
        );
      }

      result2[result2.length] = terms.some((element) =>
        obj.single.single_quest[0]
          .toLowerCase()
          .includes(element.term.toLowerCase())
      );

      const result2Checker = (result2) => result2.some(Boolean);
      const newQuestString2 = obj.single.single_quest[0];
      const newAnsStrings2 = obj.single.single_ans;

      if (result2Checker) {
        const questStringsFound = findSubstrings(
          obj.single.single_quest[0],
          terms
        );
        for (const i in questStringsFound) {
          newQuestString2 = replaceWithTooltip(
            obj.single.single_quest[0],
            questStringsFound[i].term,
            questStringsFound[i].expl,
            true
          );
        }
        for (const i in newAnsStrings2) {
          if (result2[i] === true) {
            const termsFound = findSubstrings(obj.single.single_ans[i], terms);
            for (const j in termsFound) {
              newAnsStrings2[i] = replaceWithTooltip(
                obj.single.single_ans[i],
                termsFound[j].term,
                termsFound[j].expl,
                false
              );
            }
          }
        }
      }
      const answers = newAnsStrings2.map((ans) => ({
        label: ans,
        value: ans,
      }));
      console.log("answers", answers);

      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{newQuestString2}</p>

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
      const result3 = new Array();

      for (const i in obj.single.single_ans) {
        result3[i] = terms.some((element) =>
          obj.single.single_ans[0][i]
            .toLowerCase()
            .includes(element.term.toLowerCase())
        );
      }
      result3[result3.length] = terms.some((element) =>
        obj.single.single_quest[0]
          .toLowerCase()
          .includes(element.term.toLowerCase())
      );

      const result3Checker = (result3) => result3.some(Boolean);
      const newQuestString3 = obj.single.single_quest[0];
      const newAnsStrings3 = obj.single.single_ans;

      if (result3Checker) {
        const questStringsFound = findSubstrings(
          obj.single.single_quest[0],
          terms
        );
        for (const i in questStringsFound) {
          newQuestString3 = replaceWithTooltip(
            obj.single.single_quest[0],
            questStringsFound[i].term,
            questStringsFound[i].expl,
            true
          );
        }
        for (const i in newAnsStrings3) {
          if (result3[i] === true) {
            const termsFound = findSubstrings(obj.single.single_ans[i], terms);
            for (const j in termsFound)
              newAnsStrings3[i] = replaceWithTooltip(
                obj.single.single_ans[i],
                termsFound[j].term,
                termsFound[j].expl,
                true
              );
          }
        }
      }
      const answers = newAnsStrings3.map((ans) => ({
        label: ans,
        value: ans,
      }));
      console.log("answers", answers);

      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{newQuestString3}</p>

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
      const result4 = new Array();

      for (const i in obj.multiple.multiple_ans) {
        result4[i] = terms.some((element) =>
          obj.multiple.multiple_ans[i]
            .toLowerCase()
            .includes(element.term.toLowerCase())
        );
      }

      result4[result4.length] = terms.some((element) =>
        obj.multiple.multiple_quest[0]
          .toLowerCase()
          .includes(element.term.toLowerCase())
      );

      const result4Checker = (result4) => result4.some(Boolean);
      const newQuestString4 = obj.multiple.multiple_quest[0];
      const newAnsStrings4 = obj.multiple.multiple_ans;

      if (result4Checker) {
        const questStringsFound = findSubstrings(
          obj.multiple.multiple_quest[0],
          terms
        );
        for (const j in questStringsFound) {
          newQuestString4 = replaceWithTooltip(
            obj.multiple.multiple_quest[0],
            questStringsFound[j].term,
            questStringsFound[j].expl,
            true
          );
        }

        for (const j in newAnsStrings4) {
          if (result4[j] === true) {
            const termsFound = findSubstrings(
              obj.multiple.multiple_ans[j],
              terms
            );
            for (const k in termsFound)
              newAnsStrings4[j] = replaceWithTooltip(
                obj.multiple.multiple_ans[j],
                termsFound[k].term,
                termsFound[k].expl,
                false
              );
          }
        }
      }

      /*      const finalQuestion = createFinalStrings(
        obj.multiple.multiple_quest[0],
        obj.multiple.multiple_ans
      ).newQuest;
      const finalAnswers = createFinalStrings(
        obj.multiple.multiple_quest[0],
        obj.multiple.multiple_ans
      ).newAnswers; */
      const answers = newAnsStrings4.map((ans) => ({
        label: ans,
        value: ans,
      }));
      console.log("answers", answers);

      return (
        <>
          <p>questionid: {obj.QuestID}</p>
          <p className="fs-5">{newQuestString4}</p>

          <div className="col-xl-6 p-2" styles={{ zIndex: 1 }}>
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
