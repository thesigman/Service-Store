import { Fragment } from "react";

import Layout from "../components/Layout/layout";
import Head from "next/head";
import Link from "next/link";

const Settings = (props) => {
  return (
    <Layout user={props}>
      <div className="vh-100">
        <Head>
          <title>Service Store - e-Πορτοφόλι</title>
          <meta name="description" content="Greek DX services platform" />
        </Head>
        {(!props.isAuthenticated && <p>You have to login First</p>) || (
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
                    Ρυθμίσεις
                  </li>
                </ol>
              </nav>
            </div>

            <div className="row">
              <h2> Ρυθμίσεις </h2>
            </div>

            <div className="row p-2">
              <div className="col-xl-6">
                <div className="card shadow">
                  <div className="card-body">
                    <p className="fs-5">Κάρτα ρυθμίσεων</p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  );
};

export default Settings;
