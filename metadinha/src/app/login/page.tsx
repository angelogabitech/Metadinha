"use client";

import Image from "next/image";
import styles from "./login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function validarEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // limpa mensagens antigas
    setErro("");

    // valida campos vazios
    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    // valida formato de email
    if (!validarEmail(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

    // se passar em tudo, redireciona
    router.push("/");
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/metadinha.png"
          width={80}
          height={80}
          alt="Logo"
          className={styles.logo}
        />

        <h1 className={styles.title}>Bem vindo ao Metadinha</h1>
        <p className={styles.subtitulo}>Faça o Login Para Continuar</p>

        <button className={styles.googleBtn}>
          <Image src="/google.logo.webp" width={20} height={20} alt="Google" />
          Continue com o Google
        </button>

        <div className={styles.divisor}>
          <span>OR</span>
        </div>

        {/* INPUT EMAIL */}
        <input
          type="email"
          placeholder="you@gmail.com"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* INPUT SENHA */}
        <input
          type="password"
          placeholder="Senha"
          className={styles.input}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {/* MOSTRA ERRO */}
        {erro && <p style={{ color: "red", marginBottom: "10px" }}>{erro}</p>}

        {/* BOTÃO ENTRAR */}
        <button onClick={handleLogin} className={styles.signinBtn}>
          Entrar
        </button>

        <div className={styles.links}>
          <a href="#">Esqueceu a Senha</a>
          <a href="/cadastro">Cadastre-se</a>
        </div>
      </div>
    </main>
  );
}
