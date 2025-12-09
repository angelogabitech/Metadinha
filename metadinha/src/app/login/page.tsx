"use client";

import Image from "next/image";
import styles from "./login.module.css";
import Link from "next/link";

export default function Login() {
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
        />
        <input type="password" placeholder="Senha" className={styles.input} />

        <Link href="/" className={styles.signinBtn}>
          Entrar
        </Link>

        <div className={styles.links}>
          <a href="#">Esqueceu a Senha</a>
          <a href="/cadastro">Cadastre-se</a>
        </div>
      </div>
    </main>
  );
}
