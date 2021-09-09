// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-edit-text/dist/index.css";
import ProtectedRoute from "../components/ProtectedRoute/protectedRoute";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
