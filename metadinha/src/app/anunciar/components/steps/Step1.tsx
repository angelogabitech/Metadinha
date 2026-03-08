"use client"

import styles from "../../anunciar.module.css"
import { AnuncioFormData } from "../../types/anuncio.types"

interface Props {
  formData: AnuncioFormData
  updateField: (field: keyof AnuncioFormData, value: any) => void
}

export default function Step1({ formData, updateField }: Props) {

  return (
    <div>

      <h2 style={{marginBottom:20}}>Informações do anúncio</h2>

      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:16
      }}>

        <input
          placeholder="Título do anúncio"
          value={formData.titulo}
          onChange={(e)=>updateField("titulo", e.target.value)}
        />

        <input
          placeholder="Cidade"
          value={formData.cidade}
          onChange={(e)=>updateField("cidade", e.target.value)}
        />

        <input
          placeholder="Estado"
          value={formData.estado}
          onChange={(e)=>updateField("estado", e.target.value)}
        />

        <input
          placeholder="CEP"
          value={formData.cep}
          onChange={(e)=>updateField("cep", e.target.value)}
        />

        <input
          placeholder="Rua ou localização"
          value={formData.rua}
          onChange={(e)=>updateField("rua", e.target.value)}
        />

      </div>

    </div>
  )
}