"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { calcularPrecoPorPessoa } from "@/utils/preco";

import styles from "../../anunciar.module.css";
import { AnuncioFormData } from "../../types/anuncio.types";

interface Props {
  formData: AnuncioFormData;
  updateField: (field: keyof AnuncioFormData, value: any) => void;
}

export default function Step4({ formData, updateField }: Props) {
  const precoPorPessoa =
    formData.modoHospedagem === "dividido"
      ? calcularPrecoPorPessoa(formData.preco, formData.maxCompanheiros)
      : null;

  return (
    <div>
      <h2 className={styles.stepTitle}>Preço e disponibilidade</h2>

      {/* PREÇO */}

      <div className={styles.stepSection}>
        <p className={styles.sectionLabel}>Preço total por noite</p>

        <input
          className={styles.priceInput}
          type="number"
          placeholder="R$"
          value={formData.preco}
          onChange={(e) => updateField("preco", Number(e.target.value))}
        />

        {formData.modoHospedagem === "dividido" && (
          <div className={styles.priceBox}>
            <span>Cada pessoa pagará</span>

            <strong>R$ {precoPorPessoa || 0}</strong>
          </div>
        )}

        <div className={styles.priceHint}>
          💡 Anúncios com preço claro recebem mais reservas.
        </div>
      </div>

      {/* CALENDÁRIO */}

      <div className={styles.stepSection}>
        <p className={styles.sectionLabel}>Datas disponíveis</p>

        <div className={styles.calendarBox}>
          <DayPicker
            mode="range"
            selected={{
              from: formData.dataInicio,
              to: formData.dataFim,
            }}
            onSelect={(range) => {
              updateField("dataInicio", range?.from);
              updateField("dataFim", range?.to);
            }}
          />
        </div>
      </div>

      {/* REGRAS */}

      <div className={styles.stepSection}>
        <p className={styles.sectionLabel}>Regras da hospedagem</p>

        <textarea
          className={styles.rulesInput}
          placeholder="Ex: Não fumar, sem festas, silêncio após 22h..."
          value={formData.regras}
          onChange={(e) => updateField("regras", e.target.value)}
        />
      </div>
    </div>
  );
}
