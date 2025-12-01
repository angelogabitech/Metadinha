"use client";

import React, { useState } from "react";
import styles from "./anunciar.module.css";
import Step1 from "./../components/anunciar/step1";
import Step2 from "./../components/anunciar/step2";
import Step3 from "./../components/anunciar/step3";

export default function Page() {
  const [stepAtual, setStepAtual] = useState(1);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    localizacao: "",
    valor: "",
    comodidades: [] as string[]
  });

  const atualizarCampo = (campos: Partial<typeof formData>) => {
    setFormData({ ...formData, ...campos });
  };

  const podeAvancarStep1 = !!(formData.titulo && formData.descricao);
  const podeAvancarStep2 = !!(formData.localizacao && formData.valor);
  const podeEnviarStep3 = formData.comodidades.length > 0;

  return (
    <main className={styles.content}>
      {/* HEADER SUPERIOR */}
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => stepAtual > 1 && setStepAtual(stepAtual - 1)}>
          ←
        </button>

        <div className={styles.titleGroup}>
          <h1>Anunciar propriedade</h1>
          <p>Compartilhe seu espaço com a comunidade Metadinha</p>
        </div>
      </header>

      {/* BARRA DE STEPS */}
      <div className={styles.stepsBar}>
        <div className={`${styles.stepCircle} ${stepAtual > 1 ? styles.stepCircleActive : ""}`}>
          {stepAtual > 1 ? "✓" : "1"}
        </div>

        <div className={`${styles.stepCircle} ${stepAtual > 2 ? styles.stepCircleActive : ""}`}>
          {stepAtual > 2 ? "✓" : "2"}
        </div>

        <div className={`${styles.stepCircle} ${stepAtual === 3 ? styles.stepCircleActive : ""}`}>
          3
        </div>
      </div>

      {/* RENDERIZAR STEPS */}
      {stepAtual === 1 && (
        <Step1
          data={formData}
          change={atualizarCampo}
          next={() => podeAvancarStep1 && setStepAtual(2)}
          bloquear={!podeAvancarStep1}
        />
      )}

      {stepAtual === 2 && (
        <Step2
          data={formData}
          change={atualizarCampo}
          back={() => setStepAtual(1)}
          next={() => podeAvancarStep2 && setStepAtual(3)}
          bloquear={!podeAvancarStep2}
        />
      )}

      {stepAtual === 3 && (
        <Step3
          data={formData}
          change={atualizarCampo}
          back={() => setStepAtual(2)}
          submit={() => podeEnviarStep3 && alert("Anúncio criado com sucesso!")}
          bloquear={!podeEnviarStep3}
        />
      )}
    </main>
  );
}