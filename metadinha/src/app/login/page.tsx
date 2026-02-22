"use client";

import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
  const isLogged = document.cookie.includes("auth=true");
  if (isLogged) {
    router.push("/");
  }
}, []);

  function validarEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  setErro("");

  if (!email || !senha) {
    setErro("Preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    setErro("Digite um e-mail válido.");
    return;
  }

  // 🔐 Criar cookie de autenticação
  document.cookie = "auth=true; path=/; max-age=86400"; // 1 dia

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

        
        <input
          type="email"
          placeholder="you@gmail.com"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        
        <input
          type="password"
          placeholder="Senha"
          className={styles.input}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        
        {erro && <p className={styles.errorMsg}>{erro}</p>}

        
        <button onClick={handleLogin} className={styles.signinBtn}>
          Entrar
        </button>

        <div className={styles.links}>
          <a href="/cadastro">Cadastre-se</a>
        </div>
      </div>
    </main>
  );
}
