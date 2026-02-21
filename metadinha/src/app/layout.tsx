"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./components/sidebar";
import BottomNav from "./components/bottomNav";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <html lang="pt-br">
      <body>
        {!isLogin ? (
          <>
            <div className="app-layout">
              <Sidebar />
              <main className="page-content">{children}</main>
            </div>
            <BottomNav />
          </>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
