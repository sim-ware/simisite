import { useEffect, useState } from 'preact/hooks';
import styles from './Landing.module.css';
import WordmarkHeader from '../WordmarkHeader';


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
        setText((t) => t + phrases[idx][char]); 
        char++;
        timeoutId = window.setTimeout(typePhrase, 60); 
      } else {
        timeoutId = window.setTimeout(() => {
          setIdx((i) => (i + 1) % phrases.length); 
          setText(''); 
        }, 1600); 
      }
    };

    typePhrase();

    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <>
      <div style={{ 
        backgroundColor: '#39f', 
        height: '90dvh', 
        paddingTop: '24.5dvh', 
        paddingLeft: '2.5dvw' 
      }}>
        <WordmarkHeader text="SIM-WARE" paddingLeft="0"/>

        <h1 
          style={{ 
            paddingTop: '10.5dvh',
            fontSize: 'clamp(1.688rem,6.642vw + .359rem,7.25rem)',
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: '-.045em',
          }} 
          class="chroma-text"
        >
          <span class={styles.fade}>{text}</span>
          <span class={styles.caret}/>
        </h1>
      </div>
    </>
  );
}
