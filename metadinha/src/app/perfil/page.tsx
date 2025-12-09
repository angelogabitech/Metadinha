"use client";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import styles from "./perfil.module.css";
import Link from "next/link";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState("reservas");
  const [isEditing, setIsEditing] = useState(false);
  const mockReservas = [
    {
      id: "69349c5c",
      criadoEm: "06/12/2025",
      checkin: "09/12",
      checkout: "16/12",
      pessoas: 2,
      total: 1190,
      precoPessoa: 85,
      status: "Pendente",
    },
  ];
  const [reservas, setReservas] = useState(mockReservas);
  const [anuncios, setAnuncios] = useState([
    {
      id: "1",
      titulo: "Quarto Simples",
      cidade: "Caruaru",
      estado: "Pernambuco",
      tipo: "Hotel",
      pessoas: 8,
      preco: 120,
      status: "Ativo",
    },
  ]);

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <main className={styles.conteudo}>
        {/*  PERFIL */}
        {!isEditing && (
          <div className={styles.profileHeader}>
            <div className={styles.profileLeft}>
              <div className={styles.profileAvatar}>S</div>

              <div className={styles.profileInfo}>
                <h2>Samuel</h2>

                <div className={styles.profileMeta}>
                  <span className={styles.metaItem}>
                    <Image
                      src="/calendar.jpg"
                      width={20}
                      height={20}
                      alt="Calendário"
                      className={styles.iconImg}
                    />
                    Membro desde Aug 2025
                  </span>
                </div>

                <div className={styles.profileStats}>
                  <span className={styles.statItem}>
                    <Image
                      src="/casa.jpg"
                      width={20}
                      height={20}
                      alt="Casa"
                      className={styles.iconImg}
                    />
                    <strong>1 propriedade</strong>
                  </span>

                  <span className={styles.statItem}>
                    <Image
                      src="/estrela.jpg"
                      width={20}
                      height={20}
                      alt="Estrela"
                      className={styles.iconImg}
                    />
                    <strong>0 avaliações</strong>
                  </span>
                </div>
              </div>
            </div>

            <button
              className={styles.editProfileBtn}
              onClick={() => setIsEditing(true)}
            >
              <Image
                src="/edicao.jpg"
                width={20}
                height={20}
                alt="Editar"
                className={styles.iconImg}
              />
              Editar Perfil
            </button>
          </div>
        )}

        {/* NAV ABAS */}
        {!isEditing && (
          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "reservas" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("reservas")}
            >
              Minhas Reservas
            </button>

            <button
              className={`${styles.tabButton} ${
                activeTab === "anuncios" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("anuncios")}
            >
              Meus Anúncios
            </button>

            <button
              className={`${styles.tabButton} ${
                activeTab === "avaliacoes" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("avaliacoes")}
            >
              Avaliações
            </button>
          </div>
        )}

        {/* CONTEÚDO DAS ABAS */}
        {!isEditing && (
          <>
            {activeTab === "reservas" && (
              <div className={styles.tabContent}>
                <h2>Minhas Reservas</h2>
                {reservas.length === 0 ? (
                  <div className={styles.emptyBox}>
                    <Image
                      src="/calendar.jpg"
                      width={60}
                      height={60}
                      alt="Calendário"
                      className={styles.emptyIcon}
                    />
                    <p className={styles.emptyText}>
                      Você ainda não fez nenhuma reserva.
                    </p>
                    <p className={styles.emptySub}>
                      Explore as propriedades e faça sua primeira reserva!
                    </p>
                  </div>
                ) : (
                  <div className={styles.reservaList}>
                    {reservas.map((r) => (
                      <div key={r.id} className={styles.reservaCard}>
                        <div className={styles.reservaLeft}>
                          <h3>Reserva #{r.id}</h3>
                          <p className={styles.dataCriacao}>
                            Criada em {r.criadoEm}
                          </p>

                          <div className={styles.reservaInfoRow}>
                            <Image
                              src="/calendario.png"
                              width={18}
                              height={18}
                              alt="Calendário"
                            />
                            <span>
                              {r.checkin} - {r.checkout}
                            </span>

                            <Image
                              src="/Reservar.png"
                              width={18}
                              height={18}
                              alt="Pessoas"
                              className={styles.peopleIcon}
                            />
                            <span>{r.pessoas} pessoas</span>
                          </div>
                        </div>

                        <div className={styles.reservaRight}>
                          <p className={styles.total}>
                            Total:{" "}
                            <strong>
                              R$ {r.total.toLocaleString("pt-BR")}
                            </strong>
                          </p>
                          <p className={styles.precoPessoa}>
                            (R$ {r.precoPessoa.toFixed(2)}/pessoa)
                          </p>

                          <span className={styles.statusTag}>{r.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "anuncios" && (
              <div className={styles.tabContent}>
                {/* Cabeçalho com botão */}
                <div className={styles.headerLine}>
                  <h2>Meus Anúncios</h2>

                  <Link href="/anunciar" className={styles.newButton}>
                    <span>＋</span> Novo Anúncio
                  </Link>
                </div>

                {/* LISTA DE ANÚNCIOS */}
                <div className={styles.anuncioList}>
                  {anuncios.length === 0 && (
                    <div className={styles.emptyBox}>
                      <Image
                        src="/casa.jpg"
                        width={60}
                        height={60}
                        alt="Nenhum anúncio"
                        className={styles.emptyIcon}
                      />
                      <p className={styles.emptyText}>
                        Você ainda não criou nenhum anúncio.
                      </p>
                      <p className={styles.emptySub}>
                        Publique um imóvel para começar!
                      </p>
                    </div>
                  )}

                  {anuncios.map((a) => (
                    <div key={a.id} className={styles.cardAnuncio}>
                      {/* Etiqueta de status */}
                      <span className={styles.anuncioStatusTag}>{a.status}</span>

                      {/* Topo colorido */}
                      <div className={styles.cardTop}/>

                      {/* Conteúdo */}
                      <div className={styles.cardInfo}>
                        <h3>{a.titulo}</h3>

                        <p>
                          <Image
                            src="/local.png"
                            width={18}
                            height={18}
                            alt="Local"
                          />
                          {a.cidade}, {a.estado}
                        </p>

                        <p>
                          <Image
                            src="/Reservar.png"
                            width={18}
                            height={18}
                            alt="Pessoas"
                          />
                          Até {a.pessoas} pessoas
                        </p>

                        <strong>
                          R$ {a.preco}
                          <span> /noite</span>
                        </strong>

                        <div className={styles.cardActions}>
                          <button className={styles.viewBtn}>
                            <Image
                              src="/olho.png"
                              width={18}
                              height={18}
                              alt="Ver"
                            />
                          </button>

                          <button className={styles.editBtn}>
                            <Image
                              src="/edicao.jpg"
                              width={18}
                              height={18}
                              alt="Editar"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "avaliacoes" && (
              <div className={styles.tabContent}>
                <h2>Avaliações</h2>

                <div className={styles.emptyBox}>
                  <Image
                    src="/estrela.jpg"
                    width={60}
                    height={60}
                    alt="Nenhuma avaliação"
                    className={styles.emptyIcon}
                  />
                  <p className={styles.emptyText}>
                    Você ainda não recebeu avaliações.
                  </p>
                  <p className={styles.emptySub}>
                    Conclua estadias para ver avaliações aqui.
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {/* FORM EDITAR PERFIL */}
        {isEditing && (
          <section className={styles.editProfileSection}>
            <h2 className={styles.sectionTitle}>Editar Perfil</h2>

            <form className={styles.editForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Nome completo</label>
                  <input type="text" defaultValue="Samuel" />
                </div>

                <div className={styles.formGroup}>
                  <label>Telefone</label>
                  <input type="text" defaultValue="(11) 99999-9999" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Tipo de usuário</label>
                <select defaultValue="Apenas hóspede">
                  <option>Apenas hóspede</option>
                  <option>Anfitrião</option>
                  <option>Hóspede e Anfitrião</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Biografia</label>
                <textarea placeholder="Conte um pouco sobre você..."></textarea>
              </div>

              <div className={styles.formActions}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>

                <button type="submit" className={styles.saveBtn}>
                  Salvar alterações
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
