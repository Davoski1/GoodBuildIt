import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractivePreview } from './components/InteractivePreview';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ScholarshipPage } from './pages/ScholarshipPage';

const MainPage: React.FC<{ registrationUrl: string }> = ({ registrationUrl }) => (
  <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
    {/* Ambient background glows */}
    <div className="ambient-glow" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
    <div className="ambient-glow" style={{ top: '420px', right: '-150px', width: '450px', height: '450px' }} />

    <Header />
    <main>
      <Hero registrationUrl={registrationUrl} />
      <InteractivePreview />
      <Features />
    </main>
    <Footer />
  </div>
);

export const App: React.FC = () => {
  // Extract and construct attribution referral URL
  const registrationUrl = useMemo(() => {
    const baseFormUrl = 'https://fjpal2fsois0.jp.larksuite.com/share/base/form/shrjpFUIbnSZZXBtVj6Kcvlo1Mf';

    if (typeof window === 'undefined') return baseFormUrl;

    const urlParams = new URLSearchParams(window.location.search);
    const promoterRef = urlParams.get('ref') || urlParams.get('promoter') || '';

    if (promoterRef) {
      try {
        localStorage.setItem('goodbuild_referrer', promoterRef);
      } catch (e) {
        // Safe localStorage fallback
      }
      return `${baseFormUrl}?prefill_Referral%20code=${encodeURIComponent(promoterRef)}&hide_Referral%20code=1`;
    }

    try {
      const savedRef = localStorage.getItem('goodbuild_referrer');
      if (savedRef) {
        return `${baseFormUrl}?prefill_Referral%20code=${encodeURIComponent(savedRef)}&hide_Referral%20code=1`;
      }
    } catch (e) {
      // Safe localStorage fallback
    }

    return baseFormUrl;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage registrationUrl={registrationUrl} />} />
      <Route path="/scholarship" element={<ScholarshipPage registrationUrl={registrationUrl} />} />
    </Routes>
  );
};

export default App;
