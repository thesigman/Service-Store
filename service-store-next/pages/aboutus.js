import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background: transparent !important;
        }
      `}</style>
      {/* <div
        className="container-fluid py-3"
        style={{ backgroundColor: "white;" }}
      > */}
      <div className="container-fluid">
        <video
          autoPlay
          muted
          loop
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "-1",
            opacity: "0.6",
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <Navbar page="aboutus" background={""} />
      </div>
      {/* ----------------------------- telos conainer video ----------------------*/}
      {/* ----------------------------- arxh hero container -----------------------*/}
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          minHeight: "100vh",
          zIndex: "1",
        }}
      >
        <div
          className="row text-center text-uppercase g-2"
          // style={{ minHeight: "100vh", zIndex: "1" }}
        >
          <h1
            className="display-6 fw-bold"
            style={{ color: "#0e2e46!important" }}
          >
            OUR MISSION:
          </h1>
          <h1
            className="display-2 fw-bold"
            style={{ color: "#0e2e46!important" }}
          >
            We bring businesses together
          </h1>
          <h1
            className="display-2 fw-bold"
            style={{ color: "#0e2e46!important" }}
          >
            on the journey of
          </h1>
          <h1
            className="display-2 fw-bold"
            style={{ color: "#0e2e46!important" }}
          >
            digital transformation
          </h1>
        </div>
      </div>

      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">DX</h1>
        </div>
        <div className="row m-2 p-2 justify-content-md-evenly">
          <div className="col-md-5 p-2">
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">ψηφιακός μετασχηματισμός</h5>Ο όρος
                ψηφιακός μετασχηματισμός (digital transformation) περιλαμβάνει
                όλες τις αλλαγές που υιοθετεί μια επιχείρηση για να αξιοποιήσει
                τα πλεονεκτήματα που της προσφέρουν το διαδίκτυο, τα ψηφιακά
                μέσα και οι νέες τεχνολογίες. Είναι μια συνεχής διαδικασία που
                δημιουργεί ευκαιρίες για τις επιχειρήσεις, αλλά απαιτεί
                εκπαίδευση και υποδομές.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">Our Story</h1>
        </div>
        <div className="row m-2 p-2 justify-content-md-evenly">
          <div className="col-md-3 p-2">
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">Story</h5>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">Our Values</h1>
        </div>
        <div className="row m-2 p-2 justify-content-md-evenly">
          <div className="col-md-3 p-2">
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">Values</h5>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="row py-2 text-center">
          <h1 className="display-4">Our Team</h1>
        </div>
        <div className="row m-2 p-2 justify-content-md-evenly">
          <div className="col-md-3 p-2">
            <div className="card shadow shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title">Team</h5>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
