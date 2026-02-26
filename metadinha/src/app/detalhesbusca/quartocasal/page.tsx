"use client";
import styles from "./quartocasal.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuartoCasal() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [hospedes, setHospedes] = useState(2); // casal = 2 pessoas

  function gerarId() {
    return "res_" + Math.random().toString(36).substring(2, 10);
  }

  function calcularNoites(checkin: string, checkout: string) {
    if (!checkin || !checkout) return 0;

    const inicio = new Date(checkin);
    const fim = new Date(checkout);

    const diffTime = fim.getTime() - inicio.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return Math.max(diffDays, 0);
  }

  function reservar() {
    setLoading(true);
    
    if (!checkin || !checkout) {
      alert("Selecione as datas.");
      setLoading(false);
      return;
    }

    const noites = calcularNoites(checkin, checkout);

    if (noites <= 0) {
      alert("Check-out deve ser após o check-in.");
      setLoading(false);
      return;
    }

    const precoPessoa = 75;
    const total = noites * hospedes * precoPessoa;

    const novaReserva = {
      id: gerarId(),
      criadoEm: new Date().toLocaleDateString("pt-BR"),
      checkin,
      checkout,
      pessoas: hospedes,
      precoPessoa,
      total,
      status: "Confirmada",
    };

    setTimeout(() => {
      const reservasSalvas = JSON.parse(
        localStorage.getItem("reservas") || "[]"
      );

      reservasSalvas.push(novaReserva);
      localStorage.setItem("reservas", JSON.stringify(reservasSalvas));

      setLoading(false);
      router.push("/perfil");
    }, 1200);
  }

  return (
    <div className={styles.container}>
     

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
              <img
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
            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />

            <label>Check-out</label>
            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />

            <label>Número de hóspedes</label>
            <select
              value={hospedes}
              onChange={(e) => setHospedes(Number(e.target.value))}
            >
              <option value={2}>1 casal</option>
              <option value={4}>2 casais</option>
            </select>

            <button
              onClick={reservar}
              className={styles.btnReserva}
              disabled={loading}
            >
              {loading ? "Reservando..." : "Reservar agora"}
            </button>
          </aside>
        </section>
      </main>
    </div>
  );
}
