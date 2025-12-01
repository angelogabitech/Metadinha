import Sidebar from "./../components/sidebar";
import styles from "./anunciar.module.css";

export const metadata = {
  title: "Anunciar propriedade",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.reset}>{children}</div>;
}
