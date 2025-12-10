"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  function isActive(route:string) {
    return pathname === route ? styles.itemMenuAtivo : styles.itemMenu;
  }

  function logout() {
    window.location.href = "/login";
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <Image src="/metadinhalogo.png" alt="logo" width={150} height={150} />
        </div>
      </div>
      <nav className={styles.menu}>
        <Link href="/" className={isActive("/")}>
          Início
        </Link>
        <Link href="/buscar" className={isActive("/buscar")}>
          Buscar
        </Link>
        <Link href="/perfil" className={isActive("/perfil")}>
          Perfil
        </Link>
        <Link href="/anunciar" className={isActive("/anunciar")}>
          Anunciar+
        </Link>
      </nav>
      <div className={styles.infoBox}>
        <strong>💡 Como funciona?</strong>
        <p>
          Encontre pessoas para dividir custos de hospedagem em hotéis e
          pousadas!
        </p>
      </div>

      <div className={styles.profileUser}>
        <div className={styles.avatar}>S</div>
        <div>
          <strong>Samuel</strong>
          <span>samuelroberty95@gmail.com</span>
        </div>
      </div>

      <Link className={styles.logout} href="/login">
        Sair
      </Link>
    </aside>
  );
}
