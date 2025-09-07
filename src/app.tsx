import { useState } from 'preact/hooks';
import ChromaProvider from './components/ChromaProvider';
import Landing from './components/landing/Landing';
import Bio from './components/bio/Bio';

export function App() {
  const [showContent, setShowContent] = useState(false);
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
          marginTop: '90vh', // Start slightly before the landing viewport ends
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}>
          <Bio />
        </div>
      </div>
    </ChromaProvider>
  );
}
