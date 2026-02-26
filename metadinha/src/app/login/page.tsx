"use client";
import styles from "./login.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  const [aba, setAba] = useState<"login" | "cadastro">("login");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
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

  function senhaForte(valor: string) {
    return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(valor);
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

    document.cookie = "auth=true; path=/; max-age=86400";
    router.push("/");
  }

  function handleCadastro(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setErro("");

    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (!senhaForte(senha)) {
      setErro("Senha fraca. Use letras e números.");
      return;
    }
  {/*  Cookies */}
    document.cookie = "auth=true; path=/; max-age=86400";
    router.push("/");
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img
          src="/metadinha.png"
          width={80}
          height={80}
          alt="Logo"
          className={styles.logo}
        />

        {/*  BOTÕES TIPO ABA */}
        <div className={styles.tabs}>
            <div
              className={`${styles.indicator} ${
                aba === "cadastro" ? styles.moveRight : ""
              }`}
            />

            <button
              onClick={() => setAba("login")}
              className={`${styles.tabBtn} ${
                aba === "login" ? styles.activeText : ""
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setAba("cadastro")}
              className={`${styles.tabBtn} ${
                aba === "cadastro" ? styles.activeText : ""
              }`}
            >
              Cadastro
            </button>
          </div>


        {aba === "login" ? (
          <>
            <h1 className={styles.title}>Bem vindo ao Metadinha</h1>
            <p className={styles.subtitulo}>
              Faça o Login Para Continuar
            </p>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Crie sua conta</h1>
            <p className={styles.subtitulo}>
              Cadastre-se para continuar
            </p>
          </>
        )}

        <div className={styles.divisor}>
          <span>OR</span>
        </div>

        {aba === "cadastro" && (
          <input
            type="text"
            placeholder="Nome completo"
            className={styles.input}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="email@exemplo.com"
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

        {aba === "login" ? (
          <button onClick={handleLogin} className={styles.signinBtn}>
            Entrar
          </button>
        ) : (
          <button onClick={handleCadastro} className={styles.signinBtn}>
            Criar Conta
          </button>
        )}
      </div>
    </main>
  );
}
