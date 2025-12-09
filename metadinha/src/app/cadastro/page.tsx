"use client";

import React, { useState } from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function validarEmail(valor: string) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }


  function senhaFortaleza(valor: string) {
   
    return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(valor);
  }

  function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro("Preencha todos os campos para continuar.");
      return;
    }

    
    if (!validarEmail(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

  
    if (!senhaFortaleza(senha)) {
      setErro(
        "Senha fraca. Use pelo menos 6 caracteres, com letras e números."
      );
      return;
    }

    router.push("/");
  }

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

        <form className={styles.form} onSubmit={handleCadastro}>
          
          {erro && <p className={styles.errorMsg}>{erro}</p>}

          <div className={styles.formGroup}>
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.btn}>
            Criar Conta
          </button>

          <p className={styles.loginLink}>
            Já possui conta? <Link href="/login">Entrar</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
