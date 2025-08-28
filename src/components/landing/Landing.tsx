import { useEffect, useState } from 'preact/hooks';
import styles from './Landing.module.css';

const phrases = [
  'Samir is a full-stack TypeScript developer',
  'Samir loves design',
  'Samir is a strategic thinker',
  'Samir can tinker for hours',
];

export default function Landing() {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let char = 0;
    let timeoutId: number;

    const typePhrase = () => {
      if (char < phrases[idx].length) {
        // add one more character
        setText((t) => t + phrases[idx][char]);
        char++;
        timeoutId = window.setTimeout(typePhrase, 60); // typing speed (ms per char)
      } else {
        // pause after finishing phrase
        timeoutId = window.setTimeout(() => {
          // move to next phrase
          setIdx((i) => (i + 1) % phrases.length);
          setText(''); // instantly clear
        }, 1600); // pause duration (ms)
      }
    };

    typePhrase();

    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <section class={styles.wrap} aria-label="Intro">
      {/* wordmark / small, uppercased, top-left */}
      <a href="/" class={styles.brand} aria-label="Samir Gossain — home">
        SAMIR GOSSAIN
      </a>

      {/* hero headline with typing effect */}
      <h1 class={styles.hero} aria-live="polite" aria-atomic="true">
        <span class={styles.fade}>{text}</span>
        <span class={styles.caret} aria-hidden="true" />
      </h1>
    </section>
  );
}
