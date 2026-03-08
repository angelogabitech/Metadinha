"use client";

import { useState } from "react";
import styles from "./ReviewAnuncio.module.css";
import { AnuncioFormData } from "../../types/anuncio.types";
import { calcularPrecoPorPessoa } from "@/utils/preco";

interface Props {
  formData: AnuncioFormData;
  voltar: () => void;
  publicar: () => void;
}

export default function ReviewAnuncio({ formData, voltar, publicar }: Props) {
  const [loading, setLoading] = useState(false);
  const precoPorPessoa =
    formData.modoHospedagem === "dividido"
      ? calcularPrecoPorPessoa(formData.preco, formData.maxCompanheiros)
      : formData.preco;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revisar seu anúncio</h2>

      <div className={styles.card}>
        {/* IMAGEM */}

        <div className={styles.imageBox}>
          {formData.imagens?.[0] ? (
            <img src={formData.imagens[0]} />
          ) : (
            <div className={styles.noImage}>Sem imagem</div>
          )}
        </div>

        {/* INFORMAÇÕES */}

        <div className={styles.info}>
          <h3 className={styles.anuncioTitle}>{formData.titulo}</h3>

          <p className={styles.location}>
            {formData.cidade}, {formData.estado}
          </p>

          <div className={styles.grid}>
            <div>
              <span>Tipo de imóvel</span>
              <strong>{formData.tipoImovel}</strong>
            </div>

            <div>
              <span>Modo de hospedagem</span>
              <strong>
                {formData.modoHospedagem === "dividido"
                  ? "Dividir hospedagem"
                  : "Hospedagem completa"}
              </strong>
            </div>

            <div>
              <span>Hóspedes</span>
              <strong>{formData.hospedes}</strong>
            </div>

            <div>
              <span>Preço por pessoa</span>
              <strong>R$ {precoPorPessoa}</strong>
            </div>
          </div>

          <div className={styles.section}>
            <span>Datas disponíveis</span>

            <strong>
              {formData.dataInicio?.toLocaleDateString("pt-BR")} —{" "}
              {formData.dataFim?.toLocaleDateString("pt-BR")}
            </strong>
          </div>

          <div className={styles.section}>
            <span>Regras</span>

            <p>{formData.regras || "Nenhuma regra informada"}</p>
          </div>
        </div>
      </div>

      {/* BOTÕES */}

      <div className={styles.buttons}>
        <button className={styles.backButton} onClick={voltar}>
          Voltar
        </button>

        <button
          className={styles.publishButton}
          onClick={() => {
            setLoading(true);

            setTimeout(() => {
              publicar();
            }, 1500);
          }}
        >
          {loading ? "Publicando..." : "Publicar anúncio"}
        </button>
      </div>
    </div>
  );
}
