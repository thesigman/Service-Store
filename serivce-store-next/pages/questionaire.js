import Layout from "../components/Layout/layout";
import Head from 'next/head'
import { useState, useEffect } from "react";
import styles from '../components/MultiStepForm/form.module.scss'
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";


export default function Questionaire(props) {
  return (
    <Layout user={props}>
      {/* {!props.isAuthenticated && <p>You have to login First</p> || */}
        <div className={['pagecenter'].join(' ')}>
          <div className={styles.container}>
            <div>
              <div>
                <div className={[styles.login].join(' ')}>
                  <div className="container-fluid">
                    <div className={[styles.formcontentwrapper, 'bg-white', 'col'].join(' ')}>
                      <div className={[styles.formcontent].join(' ')}>
                        <MultiStepForm></MultiStepForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* } */}
    </Layout>
  )
}