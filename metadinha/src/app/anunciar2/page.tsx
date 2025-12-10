"use client";

import React, { useState } from "react";
import styles from "./anunciar2.module.css";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Anunciar() {
  const router = useRouter();

  const [tipo, setTipo] = useState("");
  const [quarto, setQuarto] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [preco, setPreco] = useState("");
  const [erro, setErro] = useState("");

  function salvarEtapa2(dados: any) {
    const parcial = JSON.parse(localStorage.getItem("anuncio_temp") || "{}");

    const atualizado = {
      ...parcial,
      ...dados,
    };

    localStorage.setItem("anuncio_temp", JSON.stringify(atualizado));
  }

  function handleProximo() {
    setErro("");

    if (!tipo || !quarto || !capacidade || !preco) {
      setErro("Preencha todos os campos obrigatórios antes de continuar.");
      return;
    }

    salvarEtapa2({
      tipo,
      quarto,
      pessoas: capacidade,
      preco: Number(preco),
    });

    router.push("/anunciar3");
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Link href="/anunciar" className={styles.backButton}>
          ←
        </Link>

        <h1 className={styles.title}>Anunciar propriedade</h1>
        <p className={styles.sub}>
          Compartilhe seu espaço com a comunidade Metadinha
        </p>

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.done}`}>✓</div>
          <div className={`${styles.step} ${styles.active}`}>2</div>
          <div className={styles.step}>3</div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Detalhes da propriedade</h2>

          {erro && <p className={styles.errorMsg}>{erro}</p>}

          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tipo de propriedade *</label>
              <select
                className={styles.formSelect}
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Selecione o tipo</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Suíte</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tipo de quarto *</label>
              <select
                className={styles.formSelect}
                value={quarto}
                onChange={(e) => setQuarto(e.target.value)}
              >
                <option value="">Selecione o tipo</option>
                <option>Individual</option>
                <option>Casal</option>
                <option>Compartilhado</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Capacidade máxima *</label>
              <select
                className={styles.formSelect}
                value={capacidade}
                onChange={(e) => setCapacidade(e.target.value)}
              >
                <option value="">Selecione</option>
                <option>1 pessoa</option>
                <option>2 pessoas</option>
                <option>3 pessoas</option>
                <option>4 pessoas</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Preço por pessoa/noite (R$) *
              </label>
              <input
                className={styles.formInput}
                type="number"
                step="0.01"
                placeholder="0.00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.btnSecondary}
              onClick={() => router.back()}
            >
              Anterior
            </button>

            <button className={styles.btnPrimary} onClick={handleProximo}>
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
