"use client";
import styles from "./quartocasal.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";

export default function QuartoCasal() {
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
            <h1 className={styles.title}>Quarto casal confortável</h1>
            <p className={styles.location}>📍 Caruaru, PE</p>
          </div>
        </div>

        <section className={styles.layout}>
          <div className={styles.colEsq}>
            <div className={styles.imageWrapper}>
              <Image
                src="/quartocasal.webp"
                alt="Quarto casal"
                width={900}
                height={450}
                className={styles.image}
              />
            </div>

            <h2 className={styles.sectionTitle}>Sobre este espaço</h2>
            <p className={styles.description}>
              Um quarto espaçoso e aconchegante, ideal para casais que desejam
              conforto e privacidade. Ambiente climatizado, cama queen-size e
              excelente iluminação natural.
            </p>

            <h2 className={styles.sectionTitle}>Comodidades</h2>
            <ul className={styles.comodidades}>
              <li>🛏️ Cama queen-size</li>
              <li>📺 TV de tela plana</li>
              <li>❄️ Ar condicionado</li>
              <li>🚿 Banheiro privativo</li>
              <li>📶 Wifi</li>
              <li>🅿️ Estacionamento gratuito</li>
            </ul>

            <h2 className={styles.sectionTitle}>Localização</h2>
            <p className={styles.locationText}>
              Av. Boa Vista, 1180 — Caruaru — PE
            </p>
          </div>

          {/* CARD RESERVA FIXO */}
          <aside className={styles.cardReserva}>
            <strong className={styles.preco}>R$ 150</strong>
            <span className={styles.pessoa}>por noite</span>

            <label>Check-in</label>
            <input type="date" />

            <label>Check-out</label>
            <input type="date" />

            <label>Número de hóspedes</label>
            <select>
              <option>1 casal</option>
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
