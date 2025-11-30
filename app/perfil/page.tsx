"use client";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import styles from "./perfil.module.css";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState("reservas");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <main className={styles.conteudo}>
        
        {/* VIEW DO PERFIL */}
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

                  <span className={styles.badge}>Usuário</span>
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
                    <strong>1</strong> propriedade
                  </span>

                  <span className={styles.statItem}>
                       <Image
      src="/estrela.jpg"
      width={20}
      height={20}
      alt="Estrela"
      className={styles.iconImg}
    />
                    <strong>0</strong> avaliações
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
              className={`${styles.tabButton} ${activeTab === "reservas" ? styles.active : ""}`}
              onClick={() => setActiveTab("reservas")}
            >
              Minhas Reservas
            </button>

            <button
              className={`${styles.tabButton} ${activeTab === "anuncios" ? styles.active : ""}`}
              onClick={() => setActiveTab("anuncios")}
            >
              Meus Anúncios
            </button>

            <button
              className={`${styles.tabButton} ${activeTab === "avaliacoes" ? styles.active : ""}`}
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

                <div className={styles.emptyBox}>
                   <Image
      src="/calendar.jpg"
      width={20}
      height={20}
      alt="Calendário"
      className={styles.iconImg}
    />
                  <p className={styles.emptyText}>Você ainda não fez nenhuma reserva.</p>
                  <p className={styles.emptySub}>
                    Explore as propriedades e faça sua primeira reserva!
                  </p>
                </div>
              </div>
            )}

            {activeTab === "anuncios" && (
              <div className={styles.tabContent}>
                <h2>Meus Anúncios</h2>

                <div className={styles.emptyBox}>
                   <Image
            src="/casa.jpg"
            width={60}
            height={60}
            alt="Nenhum anúncio"
            className={styles.emptyIcon}
          />
                  <p className={styles.emptyText}>Você ainda não criou nenhum anúncio.</p>
                  <p className={styles.emptySub}>Publique um imóvel para começar!</p>
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
                  <p className={styles.emptyText}>Você ainda não recebeu avaliações.</p>
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

              <div className={styles.formGroup}>
                <label>Idiomas</label>
                <div className={styles.inputAdd}>
                  <input type="text" placeholder="Adicionar idioma" />
                  <button type="button" className={styles.addBtn}>+</button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Interesses</label>
                <div className={styles.inputAdd}>
                  <input type="text" placeholder="Adicionar interesse" />
                  <button type="button" className={styles.addBtn}>+</button>
                </div>
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
