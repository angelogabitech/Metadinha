"use client";
import styles from "./quartosimples.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";


export default function QuartoSimples() {
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
            <h1 className={styles.title}>Quarto aconchegante em Caruaru</h1>
            <p className={styles.location}>📍 Caruaru, PE</p>
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <section className={styles.layout}>
          {/* COLUNA DA ESQUERDA */}
          <div className={styles.colEsq}>
            <div className={styles.imageWrapper}>
              <Image
                src="/quartosimples.webp"
                alt="Quarto simples"
                width={900}
                height={450}
                className={styles.image}
              />
            </div>

            <h2 className={styles.sectionTitle}>Sobre este espaço</h2>
            <p className={styles.description}>
              Um espaço compacto, ideal para viajantes em busca de praticidade.
              Possui cama confortável, ventilação, internet e fácil acesso a
              mercados, padarias e transporte público.
            </p>

            <h2 className={styles.sectionTitle}>Comodidades</h2>
            <ul className={styles.comodidades}>
              <li>📶 Wifi</li>
              <li>❄️ Ar Condicionado</li>
              <li>🛏️ Cama de casal</li>
              <li>🚿 Banheiro compartilhado</li>
              <li>🍳 Cozinha compartilhada</li>
            </ul>

            <h2 className={styles.sectionTitle}>Localização</h2>
            <p className={styles.locationText}>
              Rua das Palmeiras, 210 — Centro, Caruaru — PE
            </p>
          </div>

         
          <aside className={styles.cardReserva}>
            <strong className={styles.preco}>R$ 120</strong>
            <span className={styles.pessoa}>por pessoa / noite</span>

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
