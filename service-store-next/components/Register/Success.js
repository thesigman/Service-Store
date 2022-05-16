import Link from "next/link";
import Image from "next/image";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoDark from "/public/logo_dark.png";

const Success = ({ username }) => {
  return (
    <div className="container-fluid m-2 p-2">
      <div className="row p-2 justify-content-center">
        <div className="col-6">
          <Link href="/">
            <a>
              <Image src={logoDark} alt="logo dark" responsive="true" />
            </a>
          </Link>
        </div>
      </div>
      <div className="row p-2">
        <p className="fs-3 text-center">Συγχαρητήρια, {username}!</p>
      </div>

      <div className="row p-2">
        <div className="row text-center">
          <p className="text-muted">
            Ολοκληρώσατε την εγγραφή σας, μπορείτε να ξεκινήσετε να
            χρησιμοποιείτε το ServiceStore!
          </p>
        </div>
      </div>

      <div className="row p-2">
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link href="/Plogin">
            <button className="btn bg-primary" type="button">
              Ξεκινήστε τώρα
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
