// {
//   /* STATELESS COMPOENNT */
// }

// const StepThree = (props) => {
//   return (
//     <div className="container-fluid">
//       <div className="row text-center p-2">
//         <p className="fs-4">Βήμα 3</p>
//       </div>
//       <div className="row text-center p-2">
//         <p className="fs-5">Επιβεβαίωση επιλογών</p>
//       </div>

//       <div className="row">
//         <div className="col-xl-6">Όνομα: {props.name}</div>
//       </div>

//       <div className="row p-2 justify-content-end">
//         <button
//           onClick={() => {
//             props.prevStep(), props.setWidth((width) => width - 34);
//           }}
//           className=" m-2 btn bg-primary btn-small"
//         >
//           Προηγούμενο
//         </button>
//         <button
//           onClick={() => {
//             props.nextStep(), props.setWidth((width) => width + 34);
//           }}
//           className=" m-2 btn bg-primary btn-small"
//         >
//           Καταχώρηση
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StepThree;

{
  /* CLASS COMPONENT */
}
const StepThree = (props) => {
  console.log(props.answears);
  return (
    <div className="container-fluid">
      <div className="row text-center p-2">
        <p className="fs-4">Βήμα 3</p>
      </div>
      <div className="row text-center p-2">
        <p className="fs-5">Επιβεβαίωση επιλογών</p>
      </div>

      <div className="row p-2">
        <div className="col-xl-6">Όνομα: {props.name}</div>
      </div>

      <div className="row p-2">
        <div className="table-responsive">
          <table className="table table-sm table-bordered border-dark caption-top p-2 m-2">
            <caption>Στοιχεία που απαντήσατε στις ερωτήσεις</caption>
            <tbody>
              {props.answears.quest.map((item, index) => (
                <tr key={props.answears.quest[index]}>
                  <td>{item}</td>
                  <td>{props.answears.answear[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row p-2">
        <p className="fs-6">
          Εάν συμφωνείτε με τα στοιχεία προχωρήστε στη καταχώρηση του αιτήματος
        </p>
      </div>
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
          onClick={() => {
            props.nextStep(),
              props.setWidth(props.width + 34),
              props.sendRequest();
          }}
          className=" m-2 btn bg-primary btn-small"
        >
          Καταχώρηση
        </button>
      </div>
    </div>
  );
};

export default StepThree;
