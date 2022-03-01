import {
  faChartBar, faCogs, faFile, faList, faPenSquare,
  faTrash, faUser, faUsers,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArcElement, CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import React from "react";
import { Doughnut, Line } from 'react-chartjs-2';
import AdminLayout from "./adminLayout";





const AdminPage = (props) => {
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    ArcElement,
    CategoryScale
  );
  const data = {
    labels: ["Clients", "Providers", "Admins"],
    datasets: [
      {
        label: "My First Dataset",
        data: [40, 55, 5],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const data2 = {
    labels: [
      65, 120, 81, 75, 79, 92, 69, 74, 85, 83, 100, 250, 98, 76, 66, 93, 88, 71,
    ],
    datasets: [
      {
        label: "Api resonse time in ms",
        data: [
          65, 120, 81, 75, 79, 92, 69, 74, 85, 83, 100, 250, 98, 76, 66, 93, 88,
          71,
        ],
        // fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
  };
  const config2 = { type: "line", data: data2, options: {} };

  return (
    <AdminLayout user={props}>
      {(!props.isAuthenticated && <p>You have to login First</p>) || (
        <div className="container-fluid p-3 overflow-auto">
          <div className="row p-2">
            <div className="col-sm-3">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    icon
                    {/* <FontAwesomeIcon icon="{faArrowDown}"></FontAwesomeIcon> */}
                  </h5>
                  <h5 className="card-title">User registrations</h5>
                  <p className="card-text">100</p>
                  <span className="text-muted"> something else </span>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <FontAwesomeIcon
                      className="text-success"
                      icon={faUser}
                    ></FontAwesomeIcon>
                  </h5>
                  <h5 className="card-title">Users online</h5>
                  <p className="card-text">10</p>
                  <span className="text-muted">
                    {/* {moment().locale("el").format("MMMM")} */}
                    something else
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faList}
                    ></FontAwesomeIcon>
                  </h5>
                  <h5 className="card-title">Number of Projects</h5>
                  <p className="card-text">20</p>
                  <span className="text-muted">something else</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faFile}
                    ></FontAwesomeIcon>
                  </h5>
                  <h5 className="card-title">number of agreements</h5>
                  <p className="card-text">5</p>
                  <span className="text-muted">something else</span>
                </div>
              </div>
            </div>
          </div>
          {/* end of first row*/}
          {/* 2nd row */}
          <div className="row p-2">
            <div className="col-md-8">
              <div className="card shadow p-3 mb-5 border-light rounded">
                <h5 className="card-title">
                  Users{" "}
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faUsers}
                  ></FontAwesomeIcon>
                </h5>

                <span className="text-muted">users</span>
                <div className="card-body overflow-auto">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr className="align-middle">
                        <th scope="col">#</th>
                        <th scope="col">usernames</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key="1">
                        <td>1</td>
                        <td>client_kapsalis</td>
                        <td>thanoskapsalis@gmail.com</td>
                        <td>Client</td>
                        <td>
                          <FontAwesomeIcon
                            className="text-warning"
                            icon={faPenSquare}
                          ></FontAwesomeIcon>
                          /
                          <FontAwesomeIcon
                            className="text-danger"
                            icon={faTrash}
                          ></FontAwesomeIcon>
                        </td>
                      </tr>
                      <tr key="2">
                        <td>2</td>
                        <td>provider_dhmhtrhs</td>
                        <td>providerdhmhtrhs@gmail.com</td>
                        <td>Provider</td>
                        <td>
                          <FontAwesomeIcon
                            className="text-warning"
                            icon={faPenSquare}
                          ></FontAwesomeIcon>
                          /
                          <FontAwesomeIcon
                            className="text-danger"
                            icon={faTrash}
                          ></FontAwesomeIcon>
                        </td>
                      </tr>
                      {/* map oti xreiazetai */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <h5 className="card-title">Titlos gia chart</h5>
                <div className="card-body overflow-auto">
                  <Doughnut data={data} options={config}></Doughnut>
                </div>
              </div>
            </div>
          </div>
          {/* end of 2nd row */}

          {/* 3rd row */}
          <div className="row p-2">
            <div className="col-md-6">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <h5 className="card-title">
                  Settings{" "}
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faWrench}
                  ></FontAwesomeIcon>
                </h5>
                <div className="card-body">
                  <div className="row p-2">
                    <div className="col-lg-6">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue={"default"}>
                          Open this select menu
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue={"default"}>
                          Open this select menu
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-md-6">
                      <button className="btn btn-primary">
                        Update settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <h5 className="card-title">Kati allo</h5>
                <div className="card-body overflow-auto">Kati allo</div>
              </div>
            </div>
          </div>
          {/* end of 3rd row */}

          {/* 4th row */}
          <div className="row p-2">
            <div className="col-md-6">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <h5 className="card-title">
                  Api status{" "}
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faCogs}
                  ></FontAwesomeIcon>
                </h5>
                <div className="card-body">
                  <div className="list-group">
                    <div className="list-group-item">
                      <h6 className="list-group-item-heading m-0">
                        Website and API
                        <button
                          type="button"
                          className="btn btn-sm text-dark"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          ?
                        </button>
                      </h6>
                      <p className="list-group-item-text">
                        <span className="badge bg-success">Operational</span>
                      </p>
                    </div>

                    <div className="list-group-item">
                      <h6 className="list-group-item-heading m-0">
                        SSH
                        <button
                          type="button"
                          className="btn btn-sm text-dark"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          ?
                        </button>
                      </h6>
                      <p className="list-group-item-text">
                        <span className="badge bg-danger">Not Operational</span>
                      </p>
                    </div>

                    <div className="list-group-item">
                      <h6 className="list-group-item-heading m-0">
                        Database Server
                        <button
                          type="button"
                          className="btn btn-sm text-dark"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          ?
                        </button>
                      </h6>
                      <p className="list-group-item-text">
                        <span className="badge bg-success">Operational</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <h5 className="card-title">
                  Api response time{" "}
                  <FontAwesomeIcon
                    className="text-danger"
                    icon={faChartBar}
                  ></FontAwesomeIcon>
                </h5>
                <div className="card-body overflow-auto">
                  <Line data={data2} options={config2}></Line>
                  <span className="text-muted">something else</span>
                </div>
              </div>
            </div>
          </div>
          {/* end of 4th row */}
          {/* start of 5th row */}
          <div className="row p-2">
            <div className="col-md-6">
              <div className="card shadow p-3 mb-5 border-light rounded">
                <h5 className="card-title">8a ephreazei th roh twn request</h5>

                <span className="text-muted">roh twn request</span>
                <div className="card-body overflow-auto">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr className="align-middle">
                        <th scope="col">#</th>
                        <th scope="col">project Name</th>
                        <th scope="col">started</th>
                        <th scope="col">status</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    <tbody>{/* map oti xreiazetai */}</tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow p-3 mb-5 rounded border-light">
                <h5 className="card-title">EDIT ROH</h5>
                <div className="card-body overflow-auto">
                  {/* <BarChart chartData="{getChartData}" />  */}
                  edit roh
                </div>
              </div>
            </div>
          </div>
          {/* end of 5th row */}
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminPage;
