import React from "react";
import styles from "./anunciar.module.css"; 
import Sidebar from "../components/sidebar"; 
import Link from "next/link";


  
export default function Anunciar() {
  return (


    <div className={styles.container}>
      <Sidebar />

      {/* Main Content */}
      <main className={styles.content}>
        <header className={styles.topbar}>
             <Link href="/" className={styles.backBtn}>
          ←
        </Link>

          <div className={styles.titleGroup}>
            <h1>Anunciar propriedade</h1>
            <p>Compartilhe seu espaço com a comunidade Metadinha</p>
          </div>
        </header>

        {/* Steps */}
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.active}`}>1</div>
          <div className={styles.line}></div>
          <div className={styles.step}>2</div>
          <div className={styles.line}></div>
          <div className={styles.step}>3</div>
        </div>

        {/* Form */}
        <section className={styles.formSection}>
          <h2>Informações básicas</h2>

          <label className={styles.labelField}>Título do anúncio *</label>
          <input 
            type="text" 
            placeholder="Ex: Quarto aconchegante em Copacabana" 
            className={styles.inputField}
          />

          <label className={styles.labelField}>Descrição</label>
          <textarea 
            placeholder="Descreva seu espaço, localização e o que torna especial..." 
            className={styles.textareaField}
          />

          <div className={styles.row}>
            <div className={styles.col}>
              <label className={styles.labelField}>Localização *</label>
              <input 
                type="text" 
                placeholder="Ex: Rio de Janeiro, RJ" 
                className={styles.inputField}
              />
            </div>

            <div className={styles.col}>
              <label className={styles.labelField}>Endereço</label>
              <input 
                type="text" 
                placeholder="Rua, número - Bairro" 
                className={styles.inputField}
              />
            </div>
          </div>

     <Link className={styles.nextBtn} href="/anunciar2">
   Próximo
  </Link>
        </section>
      </main>
    </div>
  );
}
