"use client";

import React from "react";
import styles from "./../../anunciar/anunciar.module.css";

export default function Step1({ data, update, next }: any) {
  const valid = data.titulo && data.descricao;

  return (
    <div className={styles.card}>
      <h2>Informações do anúncio</h2>

      <label className={styles.sub}>Título do espaço</label>
      <input
        className={styles.gridItem}
        value={data.titulo || ""}
        onChange={(e) => update({ titulo: e.target.value })}
      />

      <label className={styles.sub}>Descrição</label>
      <textarea
        className={styles.gridItem}
        value={data.descricao || ""}
        onChange={(e) => update({ descricao: e.target.value })}
      />

      <button
        className={styles.btnPrimary}
        onClick={next}
        disabled={!valid}
        style={{ opacity: valid ? 1 : 0.4, marginTop: 20 }}
      >
        Próximo
      </button>
    </div>
  );
}
