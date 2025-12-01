"use client";

import React from "react";
import styles from "./../../anunciar/anunciar.module.css";

export default function Step2({ data, update, next, back }: any) {
  const valid = data.localizacao && data.valor;

  return (
    <div className={styles.card}>
      <h2>Detalhes do espaço</h2>

      <label className={styles.sub}>Localização</label>
      <input
        className={styles.gridItem}
        value={data.localizacao || ""}
        onChange={(e) => update({ localizacao: e.target.value })}
      />

      <label className={styles.sub}>Valor por noite</label>
      <input
        className={styles.gridItem}
        value={data.valor || ""}
        onChange={(e) => update({ valor: e.target.value })}
      />

      <div className={styles.footerBtns} style={{ marginTop: 22 }}>
        <button className={styles.btnSecondary} onClick={back}>Anterior</button>

        <button
          className={styles.btnPrimary}
          onClick={next}
          disabled={!valid}
          style={{ opacity: valid ? 1 : 0.4 }}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}