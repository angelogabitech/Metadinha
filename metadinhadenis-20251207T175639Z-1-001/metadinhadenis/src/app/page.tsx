"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import Sidebar from "./components/sidebar";

export default function Home() {
  function buscarquartos() {
    window.location.href = "/buscar";
  }

  return (
    <main className={styles.content}>
      <Sidebar />
      <section className={styles.hero}>
  <h1 className={styles.revealText}>
    {Array.from("Viaje juntos, gaste metade").map((char, i) => (
      <span
        key={i}
        className={styles.char}
        style={{ "--delay": `${i * 0.05}s` } as React.CSSProperties}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </h1>

  <p className={styles.fadeSubtitle}>
    Encontre sua metadinha de viagem e divida os custos de hospedagem.
  </p>
</section>

     
       

        <div className={styles.searchBox}>
  <div className={styles.formGroup}>
    <input required type="text" className={styles.inputFloating} />
    <label className={styles.labelFloating}>Onde?</label>
  </div>

  <div className={styles.formGroup}>
    <input required type="date" className={styles.inputFloating} />
    <label className={styles.labelFloating}>Check-in</label>
  </div>

  <div className={styles.formGroup}>
    <input required type="date" className={styles.inputFloating} />
    <label className={styles.labelFloating}>Check-out</label>
  </div>

  <div className={styles.formGroup}>
    <select className={styles.inputFloating}>
      <option>1 pessoa</option>
      <option>2 pessoas</option>
      <option>3 pessoas</option>
      <option>4 pessoas</option>
      <option>5 pessoas</option>
      <option>6 pessoas</option>
      <option>7 pessoas</option>
    </select>
    <label className={styles.labelFloating}>Hóspedes</label>
  </div>

  <button className={styles.btnSearch} onClick={buscarquartos}>
    Buscar quartos
  </button>
</div>


      <section className={styles.pq}>
        <h2>Por que escolher a Metadinha?</h2>
        <p className={styles.subtitle}>
          A plataforma que conecta viajantes para experiências inesquecíveis e
          econômicas.
        </p>

        <div className={styles.cards}>
          <div className={`${styles.card} fade-item`}>
            <Image src="/shield.png" alt="icon" width={48} height={48} />
            <h3>Segurança garantida</h3>
            <p>Perfis verificados e avaliações reais</p>
          </div>

          <div className={`${styles.card} fade-item`}>
            <Image src="/group.png" alt="icon" width={48} height={48} />
            <h3>Comunidade ativa</h3>
            <p>Milhares de viajantes compartilhando experiências</p>
          </div>

          <div className={`${styles.card} fade-item`}>
            <Image src="/suport.png" alt="icon" width={48} height={48} />
            <h3>Suporte completo</h3>
            <p>Atendimento 24h</p>
          </div>

          <div className={`${styles.card} fade-item`}>
            <Image src="/estrelaa.png" alt="icon" width={48} height={48} />
            <h3>Experiências únicas</h3>
            <p>Conheça pessoas incríveis e faça amizades para a vida</p>
          </div>
        </div>
      </section>
    </main>
  );
}
