import { Component } from "react";
import Switch from "../Switch/switch";

class AgreementTitle extends Component {
  // state = { };

  render() {
    const { title, description, saveAgreement } = this.props;

    return (
      <>
        <div className="row justify-content-end">
          <button className="btn bg-success m-2">
            Αποθήκευση πρότασης και υπογραφή
          </button>
          <button className="btn bg-warning m-2" onClick={saveAgreement}>
            Προσωρινή Αποθήκευση
          </button>
        </div>
        <div className="row justify-content-between">
          <div className="col-2">
            <h2> {title}</h2>
          </div>
          <div className="col align-self-center">
            <Switch
              // onChange={this.handleChange}
              label={"Αποδεκτός"}
              // checked={true}
              //answered={answered}
              // checked={answered}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col align-self-end">
            <p>{description}</p>
          </div>
          <button className="btn btn-small m-2 bg-primary">
            Προηγούμενος τομέας
          </button>
          <button className="btn btn-small m-2 bg-secondary">
            Επόμενος τομέας
          </button>
        </div>
      </>
    );
  }
}

export default AgreementTitle;
