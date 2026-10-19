import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <div className={styles.root} aria-hidden>
      <div className={`${styles.spot} ${styles.spotA}`} />
      <div className={`${styles.spot} ${styles.spotB}`} />
      <div className={`${styles.spot} ${styles.spotC}`} />
      <div className={`${styles.spot} ${styles.spotD}`} />
      <div className={`${styles.spot} ${styles.spotE}`} />
      <div className={styles.ribbon} />
      <div className={styles.grain} />
      <div className={styles.vignette} />
    </div>
  );
}
