"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import styles from "../sidebar.module.css";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  function isActive(route: string) {
    return pathname === route
      ? `${styles.itemMenu} ${styles.itemMenuAtivo}`
      : styles.itemMenu;
  }

  function navigate(route: string) {
    router.push(route);
  }

  function logout() {
    router.push("/login");
  }

  return (
    <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Image src="/metadinhalogo.png" alt="logo" width={150} height={150} />
        </div>

      <nav className={styles.menu}>
        <button className={isActive("/")} onClick={() => navigate("/")}>
          Início
        </button>

        <button
          className={isActive("/buscar")}
          onClick={() => navigate("/buscar")}
        >
          Buscar
        </button>

        <button
          className={isActive("/perfil")}
          onClick={() => navigate("/perfil")}
        >
          Perfil
        </button>

        <button
          className={isActive("/anunciar")}
          onClick={() => navigate("/anunciar")}
        >
          Anunciar+
        </button>
      </nav>

      <div className={styles.infoBox}>
        <strong>💡 Como funciona?</strong>
        <p>
          Encontre pessoas para dividir custos de hospedagem em hotéis e
          pousadas!
        </p>
      </div>

      <div className={styles.footerArea}>
        <div className={styles.profileUser}>
          <div className={styles.avatar}>S</div>

          <div className={styles.userInfo}>
            <strong>Samuel</strong>
            <span>samuelroberty95@gmail.com</span>
          </div>
        </div>

        <button className={styles.logout} onClick={logout}>
          Sair
        </button>
      </div>
    </aside>
  );
}
