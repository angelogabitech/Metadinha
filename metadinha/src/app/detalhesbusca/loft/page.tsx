"use client";
import styles from "./loft.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";

export default function Loft() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <Sidebar />
      <main className={styles.container}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          ← Voltar
        </button>

        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Loft compartilhado no Rio</h1>
            <p className={styles.location}>📍 Rio de Janeiro, RJ</p>
          </div>
        </div>

        <section className={styles.layout}>
          <div className={styles.colEsq}>
            <div className={styles.imageWrapper}>
              <Image
                src="/imovel.jpeg"
                alt="Loft compartilhado"
                width={900}
                height={450}
                className={styles.image}
              />
            </div>

            <h2 className={styles.sectionTitle}>Sobre este espaço</h2>
            <p className={styles.description}>
              Loft moderno e econômico, com ambientes compartilhados e ótima
              localização, próximo à praia de Copacabana. Ideal para jovens
              viajantes e estudantes.
            </p>

            <h2 className={styles.sectionTitle}>Comodidades</h2>
            <ul className={styles.comodidades}>
              <li>📶 Wifi</li>
              <li>🛋️ Sala compartilhada</li>
              <li>🍳 Cozinha equipada</li>
              <li>🔒 Armário individual</li>
              <li>🌆 Vista urbana</li>
            </ul>

            <h2 className={styles.sectionTitle}>Localização</h2>
            <p className={styles.locationText}>
              Rua Atlântica, 900 — Copacabana — Rio de Janeiro — RJ
            </p>
          </div>

          <aside className={styles.cardReserva}>
            <strong className={styles.preco}>R$ 75</strong>
            <span className={styles.pessoa}>por noite</span>

            <label>Check-in</label>
            <input type="date" />

            <label>Check-out</label>
            <input type="date" />

            <label>Número de hóspedes</label>
            <select>
              <option>1 pessoa</option>
              <option>2 pessoas</option>
              <option>3 pessoas</option>
            </select>

            <button onClick={() => router.push("/perfil")} className={styles.btnReserva}>
              Reservar agora
              </button>
          

          </aside>
        </section>
      </main>
    </div>
  );
}
