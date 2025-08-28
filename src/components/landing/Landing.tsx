import { useEffect, useState } from 'preact/hooks';
import styles from './Landing.module.css';


const phrases = [
  "Samir Gossain is a DESIGNER",
  "Samir Gossain is a DEVELOPER",
  "Samir Gossain is a STRATEGIST",
  "Samir Gossain is a TINKERER",
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
      {/* wordmark / small-caps top-left */}
      <a href="/" class={styles.brand} aria-label="mcchillin home">
        SAMIR GOSSAIN
      </a>

      {/* main rotating headline */}
      <h1 class={styles.hero} aria-live="polite" aria-atomic="true">
        <span key={phrases[idx]} class={styles.fade}>{phrases[idx]}</span>
      </h1>

      {/* bottom teaser banner that hints the scrolling bio */}
      <button
        class={styles.teaser}
        onClick={() => {
          const el = document.querySelector('#bio');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        aria-label="Scroll to bio"
      >
        <span class={styles.teaserInner}>
          <span>↓ BIO • ABOUT • WORK • CONTACT •</span>
          <span aria-hidden="true" class={styles.marqueeClone}>↓ BIO • ABOUT • WORK • CONTACT •</span>
        </span>
      </button>
    </section>
  );
}
