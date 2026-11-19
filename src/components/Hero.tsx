import React from 'react';

interface HeroProps {
  registrationUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ registrationUrl }) => {
  return (
    <section style={{ padding: '40px 0 60px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>
        
        {/* Top Pill Badge */}
        <div style={{ marginBottom: '24px' }}>
          <span
            className="pill-badge"
            style={{
              backgroundColor: 'var(--surface)',
              boxShadow: '0 2px 8px rgba(89, 46, 129, 0.08)',
            }}
          >
            <span style={{ color: 'var(--pink)', fontSize: '14px' }}>✦</span>
            <span>Official Build Sprint</span>
            <span style={{ color: 'var(--grey-400)' }}>•</span>
            <span className="font-mono" style={{ fontSize: '12px', color: 'var(--violet)' }}>
              AI dApps on Celo
            </span>
          </span>
        </div>

        {/* Hero Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(36px, 6vw, 62px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: 'var(--violet-ink)',
            marginBottom: '20px',
          }}
        >
          Join the GoodBuild <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #592E81 0%, #FF85D9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hackathon.
          </span>
        </h1>

        <p
          style={{
            fontSize: '17px',
            color: 'var(--grey-600)',
            maxWidth: '660px',
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}
        >
          Build smart contracts and launch decentralized applications using natural language prompts on Celo.
          Register below to receive your hackathon brief, tracks, and submission portal.
        </p>

        {/* 2-Column Hero Grid: $1,000,000 Poster (Left) + Registration Card (Right) */}
        <div id="early-access" className="hero-grid-container">
          
          {/* LEFT: $1,000,000 Poster Card */}
          <div className="card-gb animate-float hero-poster-card">
            <img
              src="goodbuild_million_poster.jpg"
              alt="$1,000,000 Say it. Sign it. Ship it."
              className="hero-poster-img"
            />
          </div>

          {/* RIGHT: Registration Card */}
          <div className="card-gb hero-action-card">
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <span
                  className="pill-badge"
                  style={{
                    fontSize: '11px',
                    padding: '4px 12px',
                    background: '#E8F8F0',
                    color: '#1F9D6B',
                    border: '1px solid rgba(31,157,107,0.2)',
                  }}
                >
                  ● Registrations Active
                </span>
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey-600)' }}>
                  Cohort-01
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--violet-ink)',
                  lineHeight: 1.25,
                  marginBottom: '12px',
                }}
              >
                Hackathon Participant Registration
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: 'var(--grey-600)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Register to receive your official track assignments, verified starter templates, and Celo development credits. Submitting takes less than 60 seconds.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '28px',
                  fontSize: '13px',
                  color: 'var(--ink)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#1F9D6B', fontWeight: 'bold' }}>✓</span>
                  <span>Direct Access to $1,000,000 Ecosystem Bounty Track</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#1F9D6B', fontWeight: 'bold' }}>✓</span>
                  <span>Official Celo Builder Onboarding & Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#1F9D6B', fontWeight: 'bold' }}>✓</span>
                  <span>Immediate Hackathon Portal & Submission Redirect</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div>
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  fontSize: '16px',
                  fontWeight: 700,
                  borderRadius: '14px',
                }}
              >
                <span>Register for Hackathon</span>
                <span style={{ fontSize: '18px' }}>→</span>
              </a>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '11px',
                  color: 'var(--grey-400)',
                  marginTop: '10px',
                }}
              >
                Opens official entry registry • Instant confirmation
              </p>
            </div>
          </div>

        </div>

        {/* Security & Speed Trust Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            color: 'var(--grey-600)',
            fontSize: '12px',
            marginTop: '20px',
          }}
        >
          <span>🔒 100% Self-Custodial</span>
          <span>•</span>
          <span>⚡ Audited Building Blocks</span>
          <span>•</span>
          <span>🚀 Instant Subdomain</span>
        </div>

      </div>

      <style>{`
        .hero-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
          margin-bottom: 24px;
          text-align: left;
        }

        @media (min-width: 820px) {
          .hero-grid-container {
            grid-template-columns: 1fr 1.15fr;
            gap: 32px;
          }
        }

        .hero-poster-card {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          border-radius: var(--radius-card);
          overflow: hidden;
          border: 1.5px solid var(--violet-mist);
          background: #fdfaff;
          box-shadow: var(--shadow-pop);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-poster-img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
          display: block;
          border-radius: inherit;
        }

        .hero-action-card {
          padding: 28px 22px;
          border: 1.5px solid var(--violet-mist);
          background: #ffffff;
          box-shadow: var(--shadow-pop);
          border-radius: var(--radius-card);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (min-width: 640px) {
          .hero-action-card {
            padding: 36px 30px;
          }
        }
      `}</style>
    </section>
  );
};
