"use client";

import styles from "./anunciar.module.css";

import { useAnunciarForm } from "./hooks/useAnunciarForm";

import ProgressBar from "./components/ProgressBar";
import PreviewCard from "./components/PreviewCard";

import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import ReviewAnuncio from "./components/review/ReviewAnuncio";
import SuccessAnuncio from "./components/success/SuccessAnuncio";

export default function Anunciar() {
  const { step, formData, errorMessage, updateField, nextStep, prevStep, setStep } =
    useAnunciarForm();

  function renderStep() {
    switch (step) {
      case 1:
        return <Step1 formData={formData} updateField={updateField} />;

      case 2:
        return <Step2 formData={formData} updateField={updateField} />;

      case 3:
        return <Step3 formData={formData} updateField={updateField} />;

      case 4:
        return <Step4 formData={formData} updateField={updateField} />;

      case 5:
        return (
          <ReviewAnuncio
            formData={formData}
            voltar={prevStep}
            publicar={() => setStep(6)}
          />
        );

      case 6:
        return (
          <SuccessAnuncio
            resetForm={() => {
              localStorage.removeItem("anuncio_draft");
              window.location.reload();
            }}
          />
        );

      default:
        return null;
    }
  }

  return (
    <div className={styles.container}>
      <ProgressBar step={step} />

      {errorMessage && <div className={styles.errorBox}>{errorMessage}</div>}

      <div className={styles.content}>
        <div className={styles.form}>{renderStep()}</div>

        <div className={styles.preview}>
          <PreviewCard formData={formData} />
        </div>
      </div>

      <div className={styles.buttons}>
        {step > 1 && (
          <button className={styles.backButton} onClick={prevStep}>
            Voltar
          </button>
        )}

        {step < 5 && (
          <button
            type="button"
            className={styles.nextButton}
            onClick={nextStep}
          >
            Próximo
          </button>
        )}
      </div>
    </div>
  );
}
