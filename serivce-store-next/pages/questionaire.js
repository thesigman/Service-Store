import Layout from "../components/Layout/layout";
import Head from 'next/head'
import { useState,useEffect } from "react";
import FormCard from "../components/MultiStepForm/FormCard";
import styles from '../components/MultiStepForm/form.module.scss'
import {
  BillingInfo,
  ConfirmPurchase,
  PersonalInfo,
} from "../components/MultiStepForm/Forms";

import FormCompleted from "../components/MultiStepForm/FormCompleted"

export default function Questionaire() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return(
    <Layout>
        <div className={styles.container}>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
      <h1>Formik Multi Step Form</h1>

      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 2 && <FormCompleted />}
      </FormCard>
    </div>
    </Layout>
  )
}