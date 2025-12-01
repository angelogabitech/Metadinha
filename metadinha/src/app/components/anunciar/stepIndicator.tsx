import styles from "@/app/anunciar/anunciar.module.css"

export default function StepsIndicator({ step }: { step: number }) {
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${step === 1 ? styles.active : ""}`}>1</div>
      <div className={styles.line}></div>
      <div className={`${styles.step} ${step === 2 ? styles.active : ""}`}>2</div>
      <div className={styles.line}></div>
      <div className={`${styles.step} ${step === 3 ? styles.active : ""}`}>3</div>
    </div>
  );
}