"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "../sidebar.module.css";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  function logout() {
    document.cookie = "auth=; path=/; max-age=0";
    router.push("/login");
  }

  function isActive(route: string) {
    return pathname === route
      ? `${styles.itemMenu} ${styles.itemMenuAtivo}`
      : styles.itemMenu;
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/metadinhalogo.png" alt="logo" width={150} height={150} />
      </div>

      <nav className={styles.menu}>
        <button className={isActive("/")} onClick={() => router.push("/")}>
          Início
        </button>

        <button className={isActive("/buscar")} onClick={() => router.push("/buscar")}>
          Buscar
        </button>

        <button className={isActive("/perfil")} onClick={() => router.push("/perfil")}>
          Perfil
        </button>

        <button className={isActive("/anunciar")} onClick={() => router.push("/anunciar")}>
          Anunciar+
        </button>
      </nav>

      <div className={styles.infoBox}>
        <strong>💡 Como funciona?</strong>
        <p>
          Encontre pessoas para dividir custos de hospedagem em hotéis e pousadas!
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