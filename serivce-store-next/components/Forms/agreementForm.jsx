import React, { Component } from "react";
import moment from "moment";
import { EditText, EditTextarea } from "react-edit-text";

class AgreementForm extends Component {
  state = {};
  handleSave = (value) => {
    console.log(value);
    console.log(value.value);
    console.log(value.previousValue);
  };
  render() {
    moment.locale("el");
    return (
      <div>
        <div className="card text-center m-2 p-2">
          <div className="card-body">
            <h4 className="card-title">ΣΥΜΒΑΣΗ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΩΝ</h4>
            <div className="card-text">
              <div style={{ whiteSpace: "nowrap" }}>
                <label className="mr-2">Στο/η(ν)</label>
                <EditText
                  id="location"
                  name="location"
                  placeholder="τοποθεσία"
                  inline
                  style={{ width: "100px" }}
                  onSave={this.handleSave}
                />
                <label className="mr-2">
                  σήμερα, την {moment().format("dddd")} {moment().format("LL")},
                  μεταξύ των κάτωθι συμβαλλομένων:
                </label>
              </div>
              <div style={{ whiteSpace: "wrap" }}>
                <label className="mr-2">α) του/της</label>
                <EditText
                  id="providerName"
                  name="providerName"
                  placeholder="name"
                  inline
                  style={{ width: "100px" }}
                  onSave={this.handleSave}
                />
              </div>
              <div style={{ whiteSpace: "wrap" }}>
                <label className="mr-2">β) του/της</label>
                <EditText
                  id="clientName"
                  name="clientName"
                  placeholder="name"
                  inline
                  style={{ width: "100px" }}
                  onSave={this.handleSave}
                />
              </div>
              <div style={{ whiteSpace: "wrap" }}>
                <label className="mr-2">
                  συμφωνήθηκαν και έγιναν αμοιβαία αποδεκτά τα εξής:
                </label>
              </div>
              <div style={{ whiteSpace: "wrap" }}>
                <h5 className="mr-2">ΠΡΟΟΪΜΙΟ</h5>
              </div>
              <div style={{ whiteSpace: "wrap" }}>
                <label className="mr-2">
                  Ο ΠΕΛΑΤΗΣ έχει ανάγκη για την εκπόνηση μελέτης απολογισμού
                  χρήσης και σκοπιμότητας της Υποδομής Διαλειτουργικότητας
                  «GovHub», η οποία παρέχει σε προσωπικό των Δήμων πρόσβαση σε
                  κεντρικά πληροφοριακά συστήματα και κυβερνητικές υποδομές.
                </label>
              </div>
              <div style={{ whiteSpace: "nowrap" }}>
                <label className="mr-2">
                  Ο ΠΑΡΟΧΟΣ διαθέτει στελέχη με ειδική τεχνογνωσία στα παραπάνω
                  ζητήματα, και είναι σε θέση να εκτελέσει το έργο υπό τους
                  όρους που περιγράφονται στην παρούσα.
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <button className="btn bg-primary">accept</button>
          </div>
        </div>
        {/* <form>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="">Στην</label>
              </div>
              <div className="col">
                <input type="text" className="form-control" />
              </div>

              <div className="col">
                <label htmlFor="">σήμερα, την </label>
              </div>
              <div className="col">
                {moment().lang("el").format("dddd")}{" "}
                {moment().lang("el").format("LL")}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn bnt-primary">accept</button>
        </form> */}
      </div>
    );
  }
}

export default AgreementForm;
