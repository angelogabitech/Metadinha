import React from "react";
import styles from "./anunciar2.module.css"; 
import Sidebar from "../components/sidebar"; 
import Link from "next/link";

export default function Anunciar() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Link href="/anunciar" className={styles.backButton}>
          ←
        </Link>
        <h1 className={styles.title}>Anunciar propriedade</h1>
        <p className={styles.sub}>Compartilhe seu espaço com a comunidade Metadinha</p>

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.done}`}>✓</div>
          <div className={`${styles.step} ${styles.active}`}>2</div>
          <div className={styles.step}>3</div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Detalhes da propriedade</h2>

          <div className={styles.grid}>

        
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tipo de propriedade *</label>
              <select className={styles.formSelect}>
                <option>Selecione o tipo</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Suíte</option>
              </select>
            </div>

          
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tipo de quarto *</label>
              <select className={styles.formSelect}>
                <option>Selecione o tipo</option>
                <option>Individual</option>
                <option>Casal</option>
                <option>Compartilhado</option>
              </select>
            </div>

            {/* Capacidade */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Capacidade máxima *</label>
              <select className={styles.formSelect}>
                <option>1 pessoa</option>
                <option>2 pessoas</option>
                <option>3 pessoas</option>
                <option>4 pessoas</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Preço por pessoa/noite (R$) *</label>
              <input className={styles.formInput} type="number" step="0.01" placeholder="0.00" />
            </div>

          </div>

          <div className={styles.buttons}>
            <button className={styles.btnSecondary}>Anterior</button>
          <Link className={ styles.btnPrimary} href="/anunciar3">
   Próximo
  </Link>
          </div>
          

        </div>
      </div>
    </div>
  );
}
