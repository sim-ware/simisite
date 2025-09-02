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
    <>
      <div style={{ backgroundColor: '#39f', height: '90dvh', paddingTop: '24.5dvh', paddingLeft: '2.5dvw' }}>

        {/* wordmark / small, uppercased, top-left */}
        <p style={{ letterSpacing: '0.035em', fontWeight: 700, color: '#e0e7ff', fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)" }}>SIM-WARE</p>

        {/* hero headline with typing effect */}
        <h1 style={{ paddingTop: '10.5dvh'}} class={styles.hero}>
          <span class={styles.fade}>{text}</span>
          <span class={styles.caret}/>
        </h1>
      </div>
    </>
  );
}
