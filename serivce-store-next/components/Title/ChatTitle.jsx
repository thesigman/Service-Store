import Link from "next/link";
import { useRouter } from "next/router";

const ChatTitle = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="row justify-content-between">
        <div className="col">
          <h2>ChatRoom με {props.title}</h2>
          <span>Πρόταση για {props.name}</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-9"></div>
        <Link href="/agreement">
          <button
            className="btn btn-primary bg-primary140 m-2"
            // onClick={() => {
            //   router.push({
            //     pathname: "/agreement",
            //     query: { pid: "post.id" },
            //   });
            // }}
            onClick={() => {
              window.sessionStorage.setItem(
                "offerid",
                JSON.stringify(props.offerid)
              );
            }}
          >
            Μετάβαση στη σύμβαση
          </button>
        </Link>
      </div>
    </>
  );
};

export default ChatTitle;
