import { useEffect } from 'preact/hooks';

const injected = new Set<string>();
function InjectOnce({ id, css }: { id: string; css: string }) {
  useEffect(() => {
    if (injected.has(id)) return;
    const style = document.createElement('style');
    style.setAttribute('data-style-id', id);
    style.textContent = css;
    document.head.appendChild(style);
    injected.add(id);
  }, [id, css]);
  return null;
}

const CHROMA_CSS = `
/* Register a color custom property so it can animate smoothly */
@property --chroma {
  syntax: '<color>';
  inherits: true;
  initial-value: #FDE68A;
}

/* Animate the variable on a single root element */
.chroma-root {
  animation: chroma-cycle 18s linear infinite;
  /* Ensure the var exists even if animation is disabled */
  --chroma: #FDE68A;
}

/* Use this on text (or set color: var(--chroma) inline) */
.chroma-text { color: var(--chroma); }

/* Handy extras if you want borders/backgrounds to match */
.chroma-border { border-color: var(--chroma); }
.chroma-bg { background-color: var(--chroma); }

@keyframes chroma-cycle {
  0%   { --chroma: #FDE68A; } /* lemon */
  20%  { --chroma: #A7F3D0; } /* mint */
  40%  { --chroma: #BAE6FD; } /* sky */
  60%  { --chroma: #E9D5FF; } /* lavender */
  80%  { --chroma: #FBCFE8; } /* blush */
  100% { --chroma: #FDE68A; }
}

/* Respect reduced motion: freeze on the initial value */
@media (prefers-reduced-motion: reduce) {
  .chroma-root { animation: none; }
}
`;

export default function ChromaProvider({ children }: { children: preact.ComponentChildren }) {
  return (
    <div class="chroma-root">
      <InjectOnce id="chroma-styles" css={CHROMA_CSS} />
      {children}
    </div>
  );
}
