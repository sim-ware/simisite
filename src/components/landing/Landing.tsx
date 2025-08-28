import { useEffect, useState } from 'preact/hooks';
import styles from './Landing.module.css';

const phrases = [
  'Samir is a full-stack TypeScript developer',
  'Samir loves design',
  'Samir is a strategic thinker',
  'Samir can tinker for hours',
];

export default function Landing() {
  const [idx, setIdx] = useState(0);

  // rotate headline every 2.5s
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section class={styles.wrap} aria-label="Intro">
      {/* wordmark / small, uppercased, top-left */}
      <a href="/" class={styles.brand} aria-label="Samir Gossain — home">
        SAMIR GOSSAIN
      </a>

      {/* main rotating headline */}
      <h1 class={styles.hero} aria-live="polite" aria-atomic="true">
        <span key={phrases[idx]} class={styles.fade}>{phrases[idx]}</span>
      </h1>
    </section>
  );
}
