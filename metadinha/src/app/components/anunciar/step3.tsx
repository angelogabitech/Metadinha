"use client";

import React, { useState } from "react";
import styles from "./../../anunciar/anunciar.module.css";

export default function Step3({ data, update, back, submit }: any) {
  const options = [
    "Wifi","Ar Condicionado","Cozinha Compartilhada","Área Comum",
    "Piscina","Academia","Estacionamento","Lavanderia","Café da Manhã",
    "Jardim","Churrasqueira","Tv","Netflix","Bicicletas"
  ];

  const toggle = (item: string) => {
    const set = new Set(data.comodidades || []);
    set.has(item) ? set.delete(item) : set.add(item);
    update({ comodidades: Array.from(set) });
  };

  return (
    <div className={styles.card}>
      <h2>Comodidades e finalizar</h2>
      <p className={styles.sub}>Comodidades disponíveis</p>

      <div className={styles.grid}>
        {options.map((item) => {
          const selected = (data.comodidades || []).includes(item);
          return (
            <button
              key={item}
              className={selected ? styles.gridItemSelected : styles.gridItem}
              onClick={() => toggle(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className={styles.footerBtns}>
        <button className={styles.btnSecondary} onClick={back}>Anterior</button>
        <button className={styles.btnPrimary} onClick={submit}>Criar anúncio</button>
      </div>
    </div>
  );
}
