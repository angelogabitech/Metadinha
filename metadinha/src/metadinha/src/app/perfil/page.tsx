"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./perfil.module.css";

export default function Perfil() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("reservas");
  const [isEditing, setIsEditing] = useState(false);

  const [reservas, setReservas] = useState<any[]>([]);
  const [anuncios, setAnuncios] = useState<any[]>([]);

  useEffect(() => {
    const dadosReservas = localStorage.getItem("reservas");
    const dadosAnuncios = localStorage.getItem("anuncios");

    if (dadosReservas) setReservas(JSON.parse(dadosReservas));
    if (dadosAnuncios) setAnuncios(JSON.parse(dadosAnuncios));
  }, []);

  function cancelarReserva(id: string) {
    const atualizadas = reservas.map((r) =>
      r.id === id ? { ...r, status: "Cancelada" } : r,
    );
    setReservas(atualizadas);
    localStorage.setItem("reservas", JSON.stringify(atualizadas));
  }

  function excluirReserva(id: string) {
    const atualizadas = reservas.filter((r) => r.id !== id);
    setReservas(atualizadas);
    localStorage.setItem("reservas", JSON.stringify(atualizadas));
  }

  function cancelarAnuncio(id: string) {
    const atualizados = anuncios.map((a) =>
      a.id === id ? { ...a, status: "Inativo" } : a,
    );
    setAnuncios(atualizados);
    localStorage.setItem("anuncios", JSON.stringify(atualizados));
  }

  return (
    <main className={styles.container}>
      {/* HEADER */}
      <div className={styles.profileHeader}>
        <div className={styles.profileLeft}>
          <div className={styles.avatar}>S</div>
          <div>
            <h2>Samuel</h2>
            <p className={styles.memberSince}>Membro desde Aug 2025</p>
            <div className={styles.stats}>
              <span>
                <strong>{anuncios.length}</strong> propriedades
              </span>
              <span>
                <strong>0</strong> avaliações
              </span>
            </div>
          </div>
        </div>

        <button
          className={styles.primaryButton}
          onClick={() => setIsEditing(true)}
        >
          Editar Perfil
        </button>
      </div>

      {/* TABS */}
      {!isEditing && (
        <>
          <div className={styles.mobileTabsWrapper}>
            <div className={styles.tabs}>
              <div
                className={styles.indicator}
                style={{
                  transform:
                    activeTab === "reservas"
                      ? "translateX(0%)"
                      : activeTab === "anuncios"
                      ? "translateX(100%)"
                      : "translateX(200%)",
                }}
              />
              <button
                className={`${styles.tab} ${
                  activeTab === "reservas" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("reservas")}
              >
                Minhas Reservas
              </button>

              <button
                className={`${styles.tab} ${
                  activeTab === "anuncios" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("anuncios")}
              >
                Meus Anúncios
              </button>

              <button
                className={`${styles.tab} ${
                  activeTab === "avaliacoes" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("avaliacoes")}
              >
                Avaliações
              </button>
            </div>
          </div>

          <div
            key={activeTab}
            className={`${styles.contentBox} ${styles.fadeSwitch}`}
          >
            {/* RESERVAS */}
            {activeTab === "reservas" && (
              <>
                <h2>Minhas Reservas</h2>

                <div className={styles.reservaGrid}>
                  {reservas.map((r) => (
                    <div key={r.id} className={styles.reservaCard}>
                      <div className={styles.imageWrapper}>
                        <img
                          src="/quartocasal.webp"
                          alt="Imagem reserva"
                          className={styles.cardImage}
                        />
                      </div>
                      <div className={styles.cardInfo}>
                        <h3>Reserva #{r.id}</h3>
                        <p>
                          {r.checkin} - {r.checkout}
                        </p>
                        <p>Status: {r.status}</p>
                        <strong>
                          R$ {(r.total ?? 0).toLocaleString("pt-BR")}
                        </strong>

                        <div className={styles.cardActions}>
                          {r.status !== "Cancelada" && (
                            <button
                              className={styles.dangerButton}
                              onClick={() => cancelarReserva(r.id)}
                            >
                              Cancelar
                            </button>
                          )}

                          <button
                            className={styles.secondaryButton}
                            onClick={() => excluirReserva(r.id)}
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ANÚNCIOS */}
            {activeTab === "anuncios" && (
              <>
                <div className={styles.headerLine}>
                  <h2>Meus Anúncios</h2>

                  <button
                    className={styles.primaryButton}
                    onClick={() => router.push("/anunciar")}
                  >
                    + Novo Anúncio
                  </button>
                </div>

                <div className={styles.anuncioGrid}>
                  {anuncios.map((a) => (
                    <div key={a.id} className={styles.anuncioCard}>
                      <div className={styles.imageWrapper}>
                        <img
                          src="/quartocasal.webp"
                          alt="Imagem anúncio"
                          className={styles.cardImage}
                        />
                      </div>
                      <div className={styles.cardInfo}>
                        <h3>{a.titulo}</h3>
                        <p>📍 {a.cidade}</p>
                        <strong>R$ {a.preco} /noite</strong>

                        <div className={styles.cardActions}>
                          <button
                            className={styles.secondaryButton}
                            onClick={() => cancelarAnuncio(a.id)}
                          >
                            Desativar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* AVALIAÇÕES */}
            {activeTab === "avaliacoes" && (
              <div className={styles.emptyBox}>
                <p>Você ainda não recebeu avaliações.</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* EDITAR PERFIL */}
      {isEditing && (
        <section className={styles.editSection}>
          <h2>Editar Perfil</h2>

          <form className={styles.editForm}>
            <div className={styles.inputGroup}>
              <label>Nome</label>
              <input type="text" defaultValue="Samuel" />
            </div>

            <div className={styles.inputGroup}>
              <label>Telefone</label>
              <input type="text" defaultValue="(11) 99999-9999" />
            </div>

            <div className={styles.inputGroupFull}>
              <label>Biografia</label>
              <textarea
                className={styles.textarea}
                placeholder="Conte um pouco sobre você..."
              />
            </div>

            <div className={styles.formActions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </button>

              <button type="submit" className={styles.primaryButton}>
                Salvar
              </button>
            </div>
          </form>
        </section>
      )}
    </main>
  );
}
