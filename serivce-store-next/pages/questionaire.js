import Layout from "../components/Layout/layout";
import Head from 'next/head'
import { useState, useEffect } from "react";
import FormCard from "../components/MultiStepForm/FormCard";
import styles from '../components/MultiStepForm/form.module.scss'
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

import FormCompleted from "../components/MultiStepForm/FormCompleted"

export default function Questionaire() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <Layout>
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
    </Layout>
  )
}