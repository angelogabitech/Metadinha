"use client";
import Image from "next/image";
import styles from "./page.module.css"; // CSS exclusivo da Home

export default function Home() {
  function buscarquartos() {
    window.location.href = "/buscar";
  }

  return (
    
    <main className={styles.content}>
      <section className={styles.hero}>
        <h1>
          Viaje <span className={styles.highlight}>juntos</span>, gaste metade
        </h1>
        <p>Encontre sua metadinha de viagem e divida os custos de hospedagem.</p>

        <div className={styles["search-box"]}>
          <div className={styles.field}>
            <label>Onde?</label>
            <input type="text" placeholder="Cidade, estado..." />
          </div>

          <div className={styles.field}>
            <label>Check-in</label>
            <input type="date" />
          </div>

          <div className={styles.field}>
            <label>Check-out</label>
            <input type="date" />
          </div>

          <div className={styles.field}>
            <label>Hóspedes</label>
            <select>
              <option>1 pessoa</option>
              <option>2 pessoas</option>
              <option>3 pessoas</option>
              <option>4 pessoas</option>
              <option>5 pessoas</option>
              <option>6 pessoas</option>
              <option>7 pessoas</option>
            </select>
          </div>

          <button className={styles["btn-search"]} onClick={buscarquartos}>
            Buscar quartos
          </button>
        </div>
      </section>

      <section className={styles.pq}>
        <h2>Por que escolher a Metadinha?</h2>
        <p className={styles.subtitle}>
          A plataforma que conecta viajantes para experiências inesquecíveis e econômicas.
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
