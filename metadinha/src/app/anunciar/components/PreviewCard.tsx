"use client";

import styles from "../anunciar.module.css";
import { AnuncioFormData } from "../types/anuncio.types";
import { calcularPrecoPorPessoa } from "@/utils/preco";

interface Props {
  formData: AnuncioFormData;
}

export default function PreviewCard({ formData }: Props) {
  const precoPorPessoa =
    formData.modoHospedagem === "dividido"
      ? calcularPrecoPorPessoa(formData.preco, formData.maxCompanheiros)
      : formData.preco;

  return (
    <div className={styles.previewCard}>
      <div className={styles.previewImage}>
        {formData.imagens[0] ? (
          <img src={formData.imagens[0]} />
        ) : (
          <div className={styles.noImage}>Adicione imagens</div>
        )}

        <button className={styles.favoriteBtn}>♡</button>

        {formData.tipoImovel && (
          <div className={styles.propertyTag}>{formData.tipoImovel}</div>
        )}
      </div>

      <div className={styles.previewContent}>
        <h3 className={styles.previewTitle}>
          {formData.titulo || "Título do anúncio"}
        </h3>

        <p className={styles.previewLocation}>
          {formData.cidade || "Cidade"}, {formData.estado || "Estado"}
        </p>

        <p className={styles.previewType}>
          {formData.modoHospedagem === "dividido"
            ? "Hospedagem compartilhada"
            : "Hospedagem completa"}
        </p>

        <div className={styles.previewFooter}>
          <span>👥 Até {formData.hospedes || 1} pessoas</span>

          <div className={styles.previewPrice}>
            <strong>R$ {precoPorPessoa || "--"}</strong>

            <span>por pessoa/noite</span>
          </div>
        </div>

        <button className={styles.previewButton}>Ver Detalhes</button>
      </div>
    </div>
  );
}
