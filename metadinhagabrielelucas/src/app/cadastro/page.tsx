"use client";
import React from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Cadastro() {
return (
<div className={styles.container}>
<motion.div
className={styles.card}
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
>

<div className={styles.logoBox}>
   <Image
          src="/metadinha.png"
          width={80}
          height={80}
          alt="Logo"
          className={styles.logo}
        />
</div>

<h1 className={styles.title}>Crie sua conta</h1>
<p className={styles.subtitle}>
Bem-vindo à plataforma Metadinha. Cadastre-se para continuar.
</p>


<form className={styles.form}>
<div className={styles.formGroup}>
<label>Nome completo</label>
<input type="text" placeholder="Seu nome" />
</div>


<div className={styles.formGroup}>
<label>E-mail</label>
<input type="email" placeholder="email@exemplo.com" />
</div>


<div className={styles.formGroup}>
<label>Senha</label>
<input type="password" placeholder="••••••••" />
</div>


 <Link href="/" className={styles.btn}>
          Criar Conta
        </Link>

<p className={styles.loginLink}>
Já possui conta? <Link href="/login">Entrar</Link>
</p>
</form>
</motion.div>
</div>
);
}