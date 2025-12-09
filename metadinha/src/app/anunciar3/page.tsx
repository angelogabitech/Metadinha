"use client";

import React, { useState } from "react";
import styles from "./anunciar3.module.css";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const COMODIDADES = [
  "Wifi","Ar Condicionado","Cozinha Compartilhada","Area Comum",
  "Piscina","Academia","Estacionamento","Lavanderia","Cafe Da Manha",
  "Jardim","Churrasqueira","Tv","Netflix","Bicicletas",
];

export default function Anunciar3() {
  const router = useRouter();
  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const [erro, setErro] = useState("");

  function toggle(item: string) {
    setSelecionadas((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function finalizar() {
    setErro("");

    if (selecionadas.length === 0) {
      setErro("Selecione pelo menos uma comodidade.");
      return;
    }

    const step1 = JSON.parse(localStorage.getItem("anuncio_step1") || "{}");
    const step2 = JSON.parse(localStorage.getItem("anuncio_step2") || "{}");

    const anuncioFinal = {
      ...step1,
      ...step2,
      comodidades: selecionadas,
      criadoEm: new Date().toISOString(),
    };

    localStorage.setItem("novo_anuncio", JSON.stringify(anuncioFinal));

    alert("Anúncio criado com sucesso!");
    router.push("/perfil");
  }

  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        <Link href="/anunciar2" className={styles.backButton}>←</Link>

        <h1 className={styles.title}>Anunciar propriedade</h1>
        <p className={styles.sub}>Compartilhe seu espaço com a comunidade Metadinha</p>

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.done}`}>✓</div>
          <div className={`${styles.step} ${styles.done}`}>✓</div>
          <div className={`${styles.step} ${styles.active}`}>3</div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Comodidades</h2>

          {erro && <p className={styles.errorMsg}>{erro}</p>}

          <div className={styles.grid}>
            {COMODIDADES.map((item) => {
              const ativo = selecionadas.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  className={`${styles.box} ${ativo ? styles.boxActive : ""}`}
                  onClick={() => toggle(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className={styles.buttons}>
            <Link href="/anunciar2" className={styles.btnSecondary}>Anterior</Link>
            <button className={styles.btnPrimary} onClick={finalizar}>
              Criar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
