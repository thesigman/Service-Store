import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/navbar";

const afm = "1111111";
// let providers = [];
// function onGet() {
//   //console.log(this.state.value);
//   axios.get("http://localhost:5550/api/providers/").then(
//     (response) => {
//       console.log(response);
//       console.log(response.data);
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.config);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }

// function onGetwithRateParam() {
//   //console.log(this.state.value);

//   axios
//     .get(`http://localhost:5550/api/providers/${rate}`)
//     // .then(console.log(name))
//     .then(
//       (response) => {
//         // console.log(response);
//         console.log(response.data);

//         // const provider = { response.data};
//         // console.log(response.data instanceof Object);
//         // console.log(response.status);
//         // console.log(response.statusText);
//         // console.log(response.headers);
//         // console.log(response.config);
//         // console.log(`${response.data.typeOfRequestedJobs}`);
//         response.data.forEach((provider) => {
//           //console.log(provider);
//           providers.push(provider);
//           console.log(provider.afm);
//         });
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// function onGetwithTwoParam() {
//   const name = "third provider";
//   axios
//     .get(`http://localhost:5550/api/providers/${rate}/${name}`)
//     // .then(console.log(name))
//     .then(
//       (response) => {
//         // console.log(response);
//         console.log(response.data);
//         response.data.forEach((provider) => {
//           //console.log(provider);
//           console.log(provider.afm);
//         });
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// function onPost() {
//   //console.log(this.state.value);
//   axios
//     .post("http://localhost:5550/api/providers/", {
//       name: "fourth provider",
//       email: "example@email.com",
//       afm: 888888888,
//       rate: 3.5,
//       typeOfRequestedJobs: [
//         {
//           name: "1.1.1 Web Site",
//           supportedLanguages: ["English", "Greek"],
//           websiteCategory: ["personal"],
//           numberOfPages: 2,
//         },
//         {
//           name: "1.1.2 e-Shop",
//           connectWith: ["Skroutz"],
//         },
//         {
//           name: "1.1.3 Συντήρηση Web Site",
//           platform: ["WordPress"],
//           GoogleShopping: false,
//           connectWithBank: false,
//         },
//       ],
//     })
//     .then(
//       (response) => {
//         console.log(response);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// function onDelete() {
//   console.log("delete");
// }
// function onUpdate() {
//   console.log("update");
// }

class Home extends Component {
  state = {
    providers: [],
  };
  onGet() {
    //console.log(this.state.value);
    axios.get("http://localhost:5550/api/providers/").then(
      (response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);

        this.setState({ providers: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onGetwithRateParam = () => {
    //console.log(this.state.value);

    axios
      .get(`http://localhost:5550/api/providers/afm/${afm}`)
      // .then(console.log(name))
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);

          // const provider = { response.data};
          // console.log(response.data instanceof Object);
          // console.log(response.status);
          // console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          // console.log(`${response.data.typeOfRequestedJobs}`);

          this.setState({ providers: response.data });
          // response.data.forEach((provider) => {
          //   //console.log(provider);
          //   this.state.providers.push(provider);
          //   console.log("henlo");
          //   console.log(provider.afm);
          // });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  onGetwithTwoParam = () => {
    const name = "third provider";
    axios
      .get(`http://localhost:5550/api/providers/${rate}/${name}`)
      // .then(console.log(name))
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          response.data.forEach((provider) => {
            //console.log(provider);
            console.log(provider.afm);
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  onPost = () => {
    console.log("post");
    // //console.log(this.state.value);
    // axios
    //   .post("http://localhost:5550/api/providers/", {
    //     name: "fourth provider",
    //     email: "example@email.com",
    //     afm: 888888888,
    //     rate: 3.5,
    //     typeOfRequestedJobs: [
    //       {
    //         name: "1.1.1 Web Site",
    //         supportedLanguages: ["English", "Greek"],
    //         websiteCategory: ["personal"],
    //         numberOfPages: 2,
    //       },
    //       {
    //         name: "1.1.2 e-Shop",
    //         connectWith: ["Skroutz"],
    //       },
    //       {
    //         name: "1.1.3 Συντήρηση Web Site",
    //         platform: ["WordPress"],
    //         GoogleShopping: false,
    //         connectWithBank: false,
    //       },
    //     ],
    //   })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };

  onDelete = () => {
    console.log("delete");
  };
  onUpdate = () => {
    console.log("update");
  };
  render() {
    return (
      <>
        <Nav />
        <div className="container p-2 m-2">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => this.onGet()}
              >
                Get request
              </button>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => this.onGetwithRateParam()}
              >
                Get request with one param
              </button>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => this.onGetwithTwoParam()}
              >
                Get request with 2 params
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-info m-2"
                onClick={() => this.onPost()}
              >
                Post request
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-danger m-2"
                onClick={() => this.onDelete()}
              >
                Delete request
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-warning m-2"
                onClick={() => this.onUpdate()}
              >
                Update request
              </button>
            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>TypeOfCompany</th>
                  <th>AFM</th>
                  <th>TypeOfRequestedJobs</th>
                </tr>
              </thead>
              <tbody>
                {this.state.providers.map((provider) => (
                  <tr key={provider._id}>
                    <td>{provider.TypeOfCompany}</td>
                    <td>{provider.NameOfCompany}</td>
                    <td>{provider.AFM}</td>
                    <td>{provider.TypeOfRequestedJobs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

// export default function Home() {

//   //const { returnedProviders } = this.props;

//   return (
//     <div className="container p-2 m-2">
//       <div className="row">
//         <h2 className="p-4">Providers page</h2>
//       </div>
//       <div className="row">
//         <div className="col">
//           <button type="button" className="btn btn-primary m-2" onClick={onGet}>
//             Get request
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary m-2"
//             onClick={onGetwithRateParam}
//           >
//             Get request with one param
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary m-2"
//             onClick={onGetwithTwoParam}
//           >
//             Get request with 2 params
//           </button>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <button type="button" className="btn btn-info m-2" onClick={onPost}>
//             Post request
//           </button>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <button
//             type="button"
//             className="btn btn-danger m-2"
//             onClick={onDelete}
//           >
//             Delete request
//           </button>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <button
//             type="button"
//             className="btn btn-warning m-2"
//             onClick={onUpdate}
//           >
//             Update request
//           </button>
//         </div>
//       </div>
//       <div className="row">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>afm</th>
//               <th>Rate</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {this.state.movies.map((movie) => ( */}
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>
//                 <button
//                   // onClick={}
//                   className="btn btn-danger btn-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//             {/* ))} */}
//           </tbody>
//         </table>
//       </div>
//       {/* <div>
//       <Cards></Cards>
//       </div> */}
//       <div>
//         <div className="row">
//           <div>
//             <div className="col-sm-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Special title treatment</h5>
//                   {/* <img src="..." className="img-thumbnail" alt="..."></img> */}
//                   <p className="card-text">
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </p>
//                   <a href="#" className="btn btn-success btn-block">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
