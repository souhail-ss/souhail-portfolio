import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <div className={styles.root} aria-hidden>
      <div className={`${styles.spot} ${styles.spotA}`} />
      <div className={`${styles.spot} ${styles.spotB}`} />
    </div>
  );
}
