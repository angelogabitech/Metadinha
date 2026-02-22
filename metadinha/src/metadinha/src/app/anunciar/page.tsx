"use client";

import React, { useState } from "react";
import styles from "./anunciar.module.css";
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

  function handleProximo() {
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
    <main className={styles.container}>
      {/* PROGRESSO */}
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
        <div className={styles.stepNumbers}>
          <span className={styles.activeStep}>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>

      {/* LAYOUT PRINCIPAL */}
      <div className={styles.layout}>
        {/* FORMULÁRIO */}
        <section className={styles.formSection}>
          <h1>Comece pelo básico</h1>
          <p className={styles.subtitle}>
            Conte um pouco sobre seu espaço.
          </p>

          {erro && <p className={styles.errorMsg}>{erro}</p>}

          <div className={styles.inputGroup}>
            <label>Título do anúncio *</label>
            <input
              type="text"
              placeholder="Ex: Quarto aconchegante em Copacabana"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Descrição</label>
            <textarea
              placeholder="Descreva seu espaço..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Localização *</label>
              <input
                type="text"
                placeholder="Rio de Janeiro, RJ"
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Endereço</label>
              <input
                type="text"
                placeholder="Rua, número - Bairro"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* PREVIEW LATERAL */}
        <aside className={styles.previewSection}>
          <div className={styles.previewCard}>
            <h3>Prévia do anúncio</h3>
            <div className={styles.previewImage}></div>
            <h4>{titulo || "Seu título aparecerá aqui"}</h4>
            <p>{localizacao || "Localização"}</p>
          </div>
        </aside>
      </div>

      {/* FOOTER FIXO */}
      <div className={styles.footer}>
        <button
          className={styles.backBtn}
          onClick={() => router.back()}
        >
          Voltar
        </button>

        <button
          className={styles.nextBtn}
          onClick={handleProximo}
        >
          Próximo
        </button>
      </div>
    </main>
  );
}