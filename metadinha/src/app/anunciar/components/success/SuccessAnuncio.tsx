"use client"

import styles from "./SuccessAnuncio.module.css"
import { useRouter } from "next/navigation"

interface Props{
 resetForm: ()=>void
}

export default function SuccessAnuncio({resetForm}:Props){

 const router = useRouter()

 function irBuscar(){
  router.push("/buscar")
 }

 function criarNovo(){
  resetForm()
 }

 return(

 <div className={styles.container}>

  <div className={styles.card}>

   <div className={styles.icon}>
    🎉
   </div>

   <h2 className={styles.title}>
    Seu anúncio foi publicado!
   </h2>

   <p className={styles.description}>
    Agora seu imóvel já pode aparecer na busca do Metadinha
    e outros usuários poderão dividir a hospedagem com você.
   </p>

   <div className={styles.buttons}>

    <button
     className={styles.primaryButton}
     onClick={irBuscar}
    >
     Ir para buscar hospedagens
    </button>

    <button
     className={styles.secondaryButton}
     onClick={criarNovo}
    >
     Criar novo anúncio
    </button>

   </div>

  </div>

 </div>

 )
}