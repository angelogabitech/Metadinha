"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./bottomNav.module.css";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { icon: "🏠", label: "Home", route: "/" },
    { icon: "🔍", label: "Buscar", route: "/buscar" },
    { icon: "➕", label: "Anunciar", route: "/anunciar" },
    { icon: "👤", label: "Perfil", route: "/perfil" },
  ];

  const hideNavbar = pathname.startsWith("/anunciar");

  if (hideNavbar) return null;

  return (
    <nav className={styles.bottomNav}>
      {items.map((item) => (
        <div
          key={item.route}
          onClick={() => router.push(item.route)}
          className={`${styles.navItem} ${
            pathname === item.route ? styles.active : ""
          }`}
        >
          <div className={styles.iconWrapper}>
            <span>{item.icon}</span>
            {item.route === "/buscar" && (
              <span className={styles.badge}>2</span>
            )}
          </div>
          <small>{item.label}</small>
        </div>
      ))}
    </nav>
  );
}