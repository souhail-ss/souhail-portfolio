import styles from './AnimatedBackground.module.css';

const blobs = [
  { size: 650, top: '10%',  left: '5%',  color: 'rgba(99,102,241,0.40)',   delayX:  0, delayY:  7 },
  { size: 600, top: '50%',  left: '60%', color: 'rgba(79,70,229,0.35)',   delayX: 13, delayY:  4 },
  { size: 580, top: '70%',  left: '15%', color: 'rgba(67,56,202,0.38)',  delayX:  5, delayY: 18 },
  { size: 560, top: '15%',  left: '65%', color: 'rgba(55,48,163,0.40)',   delayX: 20, delayY:  9 },
  { size: 320, top: '45%',  left: '40%', color: 'rgba(199,210,254,0.07)', delayX:  8, delayY: 23 },
];

const blobClasses = [styles.b0, styles.b1, styles.b2, styles.b3, styles.b4];

export default function AnimatedBackground() {
  return (
    <div className={styles.root} aria-hidden>
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`${styles.blob} ${blobClasses[i]}`}
          style={{
            width:  b.size,
            height: b.size,
            top:    b.top,
            left:   b.left,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            animationDelay: `-${b.delayX}s, -${b.delayY}s`,
          }}
        />
      ))}
    </div>
  );
}
