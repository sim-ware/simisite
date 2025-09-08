import { useState, useEffect } from 'preact/hooks';
import ChromaProvider from './components/ChromaProvider';
import Landing from './components/landing/Landing';
import Bio from './components/bio/Bio';

function useIsMobile(maxWidth = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [maxWidth]);

  return isMobile;
}

export function App() {
  const [showContent, setShowContent] = useState(false);
  const isMobile = useIsMobile();
  return (
    <ChromaProvider>
      <div style={{ position: 'relative' }}>
        {/* Fixed Landing Component with Extended Background */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1,
          background: 'radial-gradient(circle at top left, #1e3a8a, #0f172a)',
          overflow: 'hidden'
        }}>
          <Landing onDeleteStart={() => setShowContent(true)} showContent={showContent} />
        </div>
        
        {/* Scrollable Bio Component */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          marginTop: isMobile ? '80vh' : '90vh', // Match the landing component height
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}>
          <Bio />
        </div>
      </div>
    </ChromaProvider>
  );
}
