"use client";
import React, { useState } from "react";
import styles from "./anunciar3.module.css";
import Sidebar from "../components/sidebar";
import Link from "next/link";

const COMODIDADES = [
  "Wifi",
  "Ar Condicionado",
  "Cozinha Compartilhada",
  "Area Comum",
  "Piscina",
  "Academia",
  "Estacionamento",
  "Lavanderia",
  "Cafe Da Manha",
  "Jardim",
  "Churrasqueira",
  "Tv",
  "Netflix",
  "Bicicletas",
];

export default function Anunciar3() {
  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  function toggle(item: string) {
    setSelecionadas((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  }

  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        {/* BACK BUTTON */}
        <Link href="/anunciar2" className={styles.backButton}>
          ←
        </Link>

        {/* HEADER */}
        <h1 className={styles.title}>Anunciar propriedade</h1>
        <p className={styles.sub}>Compartilhe seu espaço com a comunidade Metadinha</p>

        {/* STEPS */}
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.done}`}>✓</div>
          <div className={`${styles.step} ${styles.done}`}>✓</div>
          <div className={`${styles.step} ${styles.active}`}>3</div>
        </div>

        {/* CARD */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Comodidades e finalizar</h2>
          <p className={styles.sub}>Escolha as comodidades disponíveis</p>

          {/* GRID DE COMODIDADES */}
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

          {/* BOTÕES */}
          <div className={styles.buttons}>
            <Link href="/anunciar2" className={styles.btnSecondary}>
              Anterior
            </Link>

            <button
              className={styles.btnPrimary}
              onClick={() =>
                alert("Selecionadas: " + selecionadas.join(", "))
              }
            >
              Criar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
