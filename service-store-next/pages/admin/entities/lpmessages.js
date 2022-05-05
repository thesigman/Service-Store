import moment from "moment";
import Link from "next/link";
import AdminLayout from "../adminLayout";

const Apm = () => {
  const messages = [
    {
      _id: "561651089403123",
      name: "Forgiven",
      email: "test1@email.com",
      ip: "67.185.171.129",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      subject: "Random subject",
      date: new Date(Date.parse("2021-06-10T12:48:54")),
    },
    {
      _id: "6546848941563125",
      name: "Panagiotis",
      email: "panagiotis@email.com",
      ip: "67.185.171.129",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      subject: "Random subject 2",
      date: new Date(Date.parse("2021-08-09T14:38:23")),
    },
    {
      _id: "545645212316231",
      name: "Dimitris",
      email: "dimitris@email.com",
      ip: "67.185.171.129",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      subject: "Random subject 3",
      date: new Date(Date.parse("2021-10-10T17:23:00")),
    },
    {
      _id: "85416513210320",
      name: "Koalla.gr",
      email: "koalla@email.com",
      ip: "64.125.181.19",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      subject: "Xaxa wraia platforma",
      date: new Date(Date.parse("2022-04-13T11:48:17")),
    },
  ];
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return (
    <AdminLayout>
      <div className="vh-100 overflow-auto">
        <div className="row mt-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/admin/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Μηνύματα αρχικής σελίδας
              </li>
            </ol>
          </nav>
        </div>
        {messages.map((object) => (
          <div
            className={
              messages.indexOf(object) % 2 == 0
                ? "row p-2 justify-content-center border-top border-bottom"
                : "row p-2 justify-content-center bg-light border-top border-bottom"
            }
            key={object._id}
          >
            <div className="col-lg-2">
              <div className="row p-2">
                <div className="col">{object.name}</div>
              </div>
              <div className="row p-2">
                <div className="col">{object.email}</div>
              </div>
              <div className="row p-2">
                <div className="col">{object.ip}</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <strong>Subject: </strong> {object.subject}
                </div>
              </div>
              <hr />
              <div className="row">{object.message}</div>
            </div>
            <div className="col-lg-2">
              <div className="row py-2">
                {moment(object.date).format("LLLL")}
              </div>
              <div className="row py-2">
                <div className="col-md-6">
                  <button
                    className="btn btn-outline-danger rounded-pill"
                    onClick={() => console.log("delete")}
                  >
                    Διαγραφή
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Apm;
