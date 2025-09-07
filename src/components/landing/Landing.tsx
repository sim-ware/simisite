import { useEffect, useState } from 'preact/hooks';
import styles from './Landing.module.css';
// import WordmarkHeader from '../WordmarkHeader';


const phrases = [
  "is a full-stack TypeScript engineer.",
  "is a React & Node craftsman.",
  "is a rapid-prototype machine for early-stage startups.",
  "is a TDD true believer.",
  "is a builder of clean, well-tested APIs.",
  "is a product-minded software developer.",
  "is a performance-tuning problem solver.",
  "is a calm firefighter for messy codebases.",
  "is a pragmatic architect for v1s and beyond.",
  "is a developer who ships delightful UX.",
  "is a pairing-friendly mentor.",
  "is a cloud-savvy dev (AWS & GCP).",
  "is a integrations whisperer.",
  "is a security-and-accessibility advocate.",
  "is a remote-ready teammate you can rely on.",
  "is a developer who writes like an English grad.",
  "is a clear communicator who makes complexity simple.",
  "is a bilingual problem solver (FR/ES).",
  "is a lifelong learner with startup grit.",
  "is a detail-obsessed tester with taste.",
  "is a LEGO-powered systems thinker.",
  "is a FromSoftware-level bug slayer.",
  "is a Nintendo-grade fun mechanic maker.",
  "is a cat-approved coder.",
  "is a guitarist who ships in rhythm.",
  "is a loving chef who seasons code to taste.",
  "is a builder who can play for days.",
];


export default function Landing({ onDeleteStart, showContent }: { onDeleteStart?: () => void, showContent?: boolean }) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let char = 0;
    let timeoutId: number;

    const typePhrase = () => {
      if (char < phrases[idx].length) {
        setText((t) => t + phrases[idx][char]); 
        char++;
        timeoutId = window.setTimeout(typePhrase, 60); 
      } else {
        // Finished typing, wait then start deleting
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
          onDeleteStart?.(); // Trigger the fade-in effect
        }, 1600); 
      }
    };

    typePhrase();

    return () => clearTimeout(timeoutId);
  }, [idx]);

  // Separate effect for deleting
  useEffect(() => {
    if (!isDeleting) return;

    let timeoutId: number;

    const deleteText = () => {
      if (text.length > 0) {
        setText((t) => t.slice(0, -1));
        timeoutId = window.setTimeout(deleteText, 30);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setText(''); // Ensure clean start
        setIdx((i) => (i + 1) % phrases.length);
      }
    };

    deleteText();

    return () => clearTimeout(timeoutId);
  }, [isDeleting, text]);

  return (
    <>
      <div style={{ 
        background: 'radial-gradient(circle at top left, #1e3a8a, #0f172a)',
        height: '90dvh', 
        paddingTop: '24.5dvh', 
        paddingLeft: '2.5dvw' 
      }}>
        {/* <WordmarkHeader text="SIM-WARE" paddingLeft="0"/> */}
        <p class="chroma-text" style={{
          paddingTop: '3.5dvh', 
          letterSpacing: '0.035em', 
          fontWeight: 700, 
          fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)",
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}>
          SIM-WARE
        </p>

        <h1 
          style={{ 
            paddingTop: '10.5dvh',
            fontSize: 'clamp(1.688rem,6.642vw + .359rem,7.25rem)',
            lineHeight: 1.5,
            fontWeight: 700,
            letterSpacing: '-.045em',
            minHeight: '2.5em',
          }} 
          class="chroma-text"
        >
          Samir <span class={styles.fade}>{text}</span>
          <span class={styles.caret}/>
        </h1>
      </div>
    </>
  );
}
