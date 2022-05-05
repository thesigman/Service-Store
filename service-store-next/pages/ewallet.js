import { Component, Fragment } from "react";
import Layout from "../components/Layout/layout";
import Head from "next/head";
import Link from "next/link";
import { toast, ToastContainer } from "react-nextjs-toast";
import { devteam2 } from "./api/axiosConfiguration";
import TransactionsCard from "../components/Card/transactionsCard";
import BalanceCard from "../components/Card/balanceCard";

class Ewallet extends Component {
  state = {
    user: {},
    balance: Number,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(window.sessionStorage.getItem("application_user")),
    });
    this.setState({ balance: 158 });

    // devteam2
    //   .post("/requests/cid/", {
    //     cid: "61017675b47117629c1a8b67",
    //   })
    //   .then(
    //     (response) => {},
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }

  //   balance and accounts  card  props-> balance kai tous logariasmous
  //   mesa pinakas
  //   transaction card props->ta transactions
  handleDeposit = (ammount) => {
    let balance = this.state.balance;
    balance = parseFloat(balance) + parseFloat(ammount);
    this.setState({ balance });

    //toast notification
    toast.notify("Balance updated", {
      duration: 5,
      type: "success",
      title: "Service Store",
    });
  };
  render() {
    return (
      <>
        <Head>
          <title>Service Store - e-Πορτοφόλι</title>
          <meta name="description" content="Greek DX services platform" />
        </Head>
        <Layout user={this.props}>
          {(!this.props.isAuthenticated && <p>You have to login First</p>) || (
            <Fragment>
              <div className="row">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      {/* <a href="#">Αρχική</a> */}
                      <Link href="/home">
                        <a>Αρχική</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      e-Πορτοφόλι
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="row">
                <h2> Το e-πορτοφόλι μου </h2>
              </div>

              <div className="row pb-2">
                <div className="col-lg-8">
                  <BalanceCard
                    balance={parseFloat(this.state.balance)}
                    handleDeposit={this.handleDeposit}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-9">
                  <TransactionsCard />
                </div>
              </div>

              {/* toast */}
              <ToastContainer align={"left"} position={"bottom"} />
            </Fragment>
          )}
        </Layout>
      </>
    );
  }
}

export default Ewallet;
