"use client"

import styles from "../../anunciar.module.css"
import { AnuncioFormData } from "../../types/anuncio.types"

interface Props{
 formData: AnuncioFormData
 updateField:(field:keyof AnuncioFormData,value:any)=>void
}

const tiposImovel = [

 { nome:"Apartamento", icone:"🏢" },
 { nome:"Casa", icone:"🏠" },
 { nome:"Quarto", icone:"🛏️" },
 { nome:"Kitnet", icone:"🏬" },
 { nome:"Loft", icone:"🏙️" },
 { nome:"Cobertura", icone:"🌇" },
 { nome:"Flat", icone:"🏨" },
 { nome:"Pousada", icone:"🏡" },
 { nome:"Chácara", icone:"🌳" },
 { nome:"Sítio", icone:"🌲" },
 { nome:"Casa na praia", icone:"🏖️" },
 { nome:"Cabana", icone:"🪵" }

]

const comodidades = [

 "Wi-Fi",
 "Ar condicionado",
 "Ventilador",
 "TV",
 "Smart TV",
 "Cozinha",
 "Fogão",
 "Micro-ondas",
 "Geladeira",
 "Máquina de lavar",
 "Garagem",
 "Piscina",
 "Churrasqueira",
 "Varanda",
 "Área de lazer",
 "Elevador",
 "Permitido animais",
 "Espaço para trabalho"

]

export default function Step2({formData,updateField}:Props){

 function toggleComodidade(item:string){

  if(formData.comodidades.includes(item)){

   updateField(
    "comodidades",
    formData.comodidades.filter(c=>c!==item)
   )

  }else{

   updateField(
    "comodidades",
    [...formData.comodidades,item]
   )

  }

 }

 return(

 <div>

  <h2 className={styles.stepTitle}>
   Detalhes da hospedagem
  </h2>

  <p className={styles.sectionLabel}>
   Tipo de imóvel
  </p>

  <div className={styles.optionsGrid}>

   {tiposImovel.map((tipo)=>{

    const active = formData.tipoImovel === tipo.nome

    return(

     <div
      key={tipo.nome}
      onClick={()=>updateField("tipoImovel",tipo.nome)}
      className={`${styles.optionCard} ${active ? styles.optionActive : ""}`}
     >

      <div className={styles.optionIcon}>
       {tipo.icone}
      </div>

      <span>
       {tipo.nome}
      </span>

     </div>

    )

   })}

  </div>

  <p className={styles.sectionLabel}>
   Como deseja alugar?
  </p>

  <div className={styles.optionsGrid}>

   <div
    onClick={()=>updateField("modoHospedagem","inteiro")}
    className={`${styles.optionCard} ${formData.modoHospedagem==="inteiro" ? styles.optionActive : ""}`}
   >

    <div className={styles.optionIcon}>🏠</div>

    Hospedagem completa

   </div>

   <div
    onClick={()=>updateField("modoHospedagem","dividido")}
    className={`${styles.optionCard} ${formData.modoHospedagem==="dividido" ? styles.optionActive : ""}`}
   >

    <div className={styles.optionIcon}>🤝</div>

    Dividir hospedagem

   </div>

  </div>

  {formData.modoHospedagem === "dividido" && (

   <>
   <p className={styles.sectionLabel}>
    Quantas pessoas podem dividir?
   </p>

   <input
    type="number"
    min={2}
    max={10}
    value={formData.maxCompanheiros}
    onChange={(e)=>updateField("maxCompanheiros",Number(e.target.value))}
   />
   </>

  )}

  <p className={styles.sectionLabel}>
   Capacidade do imóvel
  </p>

  <div className={styles.capacityGrid}>

   <div>
    <span>Hóspedes</span>
    <input
     type="number"
     value={formData.hospedes}
     onChange={(e)=>updateField("hospedes",Number(e.target.value))}
    />
   </div>

   <div>
    <span>Quartos</span>
    <input
     type="number"
     value={formData.quartos}
     onChange={(e)=>updateField("quartos",Number(e.target.value))}
    />
   </div>

   <div>
    <span>Camas</span>
    <input
     type="number"
     value={formData.camas}
     onChange={(e)=>updateField("camas",Number(e.target.value))}
    />
   </div>

   <div>
    <span>Banheiros</span>
    <input
     type="number"
     value={formData.banheiros}
     onChange={(e)=>updateField("banheiros",Number(e.target.value))}
    />
   </div>

  </div>

  <p className={styles.sectionLabel}>
   Comodidades
  </p>

  <div className={styles.tagsGrid}>

   {comodidades.map((item)=>{

    const active = formData.comodidades.includes(item)

    return(

     <div
      key={item}
      onClick={()=>toggleComodidade(item)}
      className={`${styles.tag} ${active ? styles.tagActive : ""}`}
     >
      {item}
     </div>

    )

   })}

  </div>

 </div>

 )
}