"use client";

import React, { useState } from "react";
import styles from "./anunciar.module.css";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Anunciar() {
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [erro, setErro] = useState("");

  function salvarParcial(dados: any) {
    localStorage.setItem("anuncio_temp", JSON.stringify(dados));
  }

  function handleProximo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setErro("");

    if (!titulo.trim() || !localizacao.trim()) {
      setErro("Preencha os campos obrigatórios antes de continuar.");
      return;
    }

    salvarParcial({
      titulo,
      descricao,
      cidade: localizacao,
      endereco,
    });

    router.push("/anunciar2");
  }

  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.content}>
        <header className={styles.topbar}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => router.back()}
            aria-label="Voltar"
          >
            <span className={styles.backIcon}>←</span>
          </button>

          <div className={styles.titleGroup}>
            <h1>Anunciar propriedade</h1>
            <p>Compartilhe seu espaço com a comunidade Metadinha</p>
          </div>
        </header>

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.active}`}>1</div>
          <div className={styles.line}></div>
          <div className={styles.step}>2</div>
          <div className={styles.line}></div>
          <div className={styles.step}>3</div>
        </div>

        <section className={styles.formSection}>
          <h2>Informações básicas</h2>

          {erro && <p className={styles.errorMsg}>{erro}</p>}

          <label className={styles.labelField}>Título do anúncio *</label>
          <input
            type="text"
            placeholder="Ex: Quarto aconchegante em Copacabana"
            className={styles.inputField}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label className={styles.labelField}>Descrição</label>
          <textarea
            placeholder="Descreva seu espaço, localização e o que torna especial..."
            className={styles.textareaField}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <div className={styles.row}>
            <div className={styles.col}>
              <label className={styles.labelField}>Localização *</label>
              <input
                type="text"
                placeholder="Ex: Rio de Janeiro, RJ"
                className={styles.inputField}
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              />
            </div>

            <div className={styles.col}>
              <label className={styles.labelField}>Endereço</label>
              <input
                type="text"
                placeholder="Rua, número - Bairro"
                className={styles.inputField}
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.nextBtn} onClick={handleProximo}>
            Próximo
          </button>
        </section>
      </main>
    </div>
  );
}
