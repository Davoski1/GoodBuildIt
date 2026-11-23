import React from 'react';
import { Header } from '../components/Header';

interface ScholarshipPageProps {
  communityConfirmed: boolean;
  onCommunityConfirmation: () => void;
}

const whatsappCommunityUrl = 'https://chat.whatsapp.com/Fnj14GKHLsh2wNkGCQjRmZ?s=cl&p=a&iam=2';

export const ScholarshipPage: React.FC<ScholarshipPageProps> = ({
  communityConfirmed,
  onCommunityConfirmation,
}) => {
  const [communityInviteOpened, setCommunityInviteOpened] = React.useState(false);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Ambient background glows */}
      <div className="ambient-glow" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="ambient-glow" style={{ top: '480px', right: '-150px', width: '480px', height: '480px' }} />

      {/* SITE HEADER */}
      <Header scholarshipOnly />

      {/* TOP SUB-NAVIGATION */}
      <div className="container" style={{ maxWidth: '1060px', paddingTop: '16px', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              className="pill-badge"
              style={{
                background: '#E8F8F0',
                color: '#1F9D6B',
                borderColor: 'rgba(31,157,107,0.25)',
                fontSize: '11px',
                padding: '4px 12px'
              }}
            >
              ● Now Live • Ends 10 Dec
            </span>
            <span
              className="pill-badge"
              style={{
                fontSize: '11px',
                padding: '4px 12px',
                color: 'var(--violet-ink)',
                background: 'var(--surface)'
              }}
            >
              FUTMINNA Edition
            </span>
          </div>
        </div>
      </div>

      <section style={{ padding: '16px 0 8px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div
            className="card-gb"
            style={{
              padding: '24px',
              border: '1px solid var(--hairline)',
              background: 'var(--surface)',
              textAlign: 'center',
            }}
          >
            <span className="pill-badge" style={{ marginBottom: '10px', background: '#f0f7f2', color: '#3e7254', borderColor: '#dce9df' }}>
              STEP 1 · COMMUNITY
            </span>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(20px, 3.5vw, 26px)', fontWeight: 800, color: 'var(--violet-ink)', marginBottom: '8px' }}
            >
              Join our WhatsApp community
            </h2>
            <p style={{ maxWidth: '560px', margin: '0 auto 16px', color: 'var(--grey-600)', fontSize: '14px', lineHeight: 1.55 }}>
              Get scholarship updates and applicant support. Join first, then return here to continue.
            </p>
            <a
              href={whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setCommunityInviteOpened(true)}
              className="btn-primary"
              style={{ backgroundColor: '#397a55', boxShadow: '0 3px 10px rgba(57,122,85,0.16)' }}
            >
              Join WhatsApp ↗
            </a>
            {communityConfirmed ? (
              <p role="status" style={{ marginTop: '12px', color: '#477558', fontWeight: 600, fontSize: '13px' }}>
                Community step confirmed. Registration is unlocked.
              </p>
            ) : communityInviteOpened ? (
              <div style={{ marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={onCommunityConfirmation}
                  className="btn-primary"
                  style={{ backgroundColor: 'var(--violet)', boxShadow: 'none', padding: '11px 20px', fontSize: '14px' }}
                >
                  I’ve joined — continue
                </button>
                <p style={{ marginTop: '7px', color: 'var(--grey-600)', fontSize: '11px' }}>
                  Membership isn’t verified automatically.
                </p>
              </div>
            ) : (
              <p style={{ marginTop: '10px', color: 'var(--grey-600)', fontSize: '12px' }}>
                Registration opens after you join and confirm.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section style={{ padding: '30px 0 50px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
          
          <div style={{ marginBottom: '20px' }}>
            <span
              className="pill-badge"
              style={{
                backgroundColor: 'var(--surface)',
                boxShadow: '0 2px 8px rgba(89, 46, 129, 0.08)',
              }}
            >
              <span style={{ color: 'var(--pink)', fontSize: '14px' }}>🎓</span>
              <span>Official Student Sprint</span>
              <span style={{ color: 'var(--grey-400)' }}>•</span>
              <span className="font-mono" style={{ fontSize: '12px', color: 'var(--violet)' }}>
                GoodBuild × GoodCash
              </span>
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(34px, 5.5vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--violet-ink)',
              marginBottom: '20px',
            }}
          >
            Build a GoodDollar app. <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #592E81 0%, #FF85D9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Win a ₦150,000 Scholarship.
            </span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: 'var(--grey-600)',
              maxWidth: '680px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            The FUTMinna scholarship program by GoodBuild and GoodCash. Create a decentralized application or game powered by GoodDollar (G$) on Celo and compete for the ₦150,000 scholarship prize.
          </p>

          <figure
            style={{
              width: 'min(100%, 480px)',
              margin: '0 auto 40px',
              padding: '10px',
              background: 'var(--surface)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-pop)',
            }}
          >
            <img
              src="goodbuild-scholarship-poster.png"
              alt="GoodBuild and GoodCash FUTMinna student scholarship poster announcing a ₦150,000 prize"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
              }}
            />
            <figcaption style={{ padding: '10px 8px 2px', color: 'var(--grey-600)', fontSize: '12px' }}>
              Official GoodBuild × GoodCash scholarship poster
            </figcaption>
          </figure>

          {/* 2-COLUMN FUNNEL HERO: SCHOLARSHIP PRIZE CARD (LEFT) + REGISTRATION FUNNEL CARD (RIGHT) */}
          <div className="scholarship-grid">
            
            {/* LEFT: Scholarship Showcase Anchor Card */}
            <div className="card-gb scholarship-prize-card">
              <div style={{ padding: '36px 30px', textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <span className="pill-badge" style={{ fontSize: '11px', background: 'var(--violet-soft)', color: 'var(--violet)', padding: '4px 10px' }}>
                      Primary Prize Award
                    </span>
                    <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey-600)' }}>
                      Celo Blockchain
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--grey-600)', fontWeight: 700, marginBottom: '6px' }}>
                    Student Scholarship Award
                  </div>

                  <div
                    className="font-display"
                    style={{
                      fontSize: 'clamp(40px, 5vw, 54px)',
                      fontWeight: 800,
                      color: 'var(--violet-ink)',
                      lineHeight: 1.05,
                      marginBottom: '16px'
                    }}
                  >
                    ₦150,000
                  </div>

                  <p style={{ color: 'var(--grey-600)', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px' }}>
                    One ₦150,000 scholarship directly awarded to the best GoodDollar app or game created by FUTMinna students. Community peer votes determine the Top 5 shortlist, and GoodBuild × GoodCash judges pick the final winner.
                  </p>

                  <div style={{ background: 'var(--tint)', borderRadius: '14px', padding: '16px', border: '1px solid var(--violet-mist)', marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      Eligible Project Tracks
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="font-mono" style={{ fontSize: '11px', background: '#FFF', color: 'var(--violet)', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--violet-mist)' }}>🎮 Mini Games</span>
                      <span className="font-mono" style={{ fontSize: '11px', background: '#FFF', color: 'var(--violet)', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--violet-mist)' }}>💸 G$ Peer Payments</span>
                      <span className="font-mono" style={{ fontSize: '11px', background: '#FFF', color: 'var(--violet)', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--violet-mist)' }}>☕ Creator Tip Jars</span>
                      <span className="font-mono" style={{ fontSize: '11px', background: '#FFF', color: 'var(--violet)', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--violet-mist)' }}>🔄 Savings Circles</span>
                      <span className="font-mono" style={{ fontSize: '11px', background: '#FFF', color: 'var(--violet)', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--violet-mist)' }}>🛒 Campus Marketplaces</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: Funnel Pre-Registration Action Card */}
            <div className="card-gb scholarship-funnel-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
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
                    ● Phase 1 • Pre-Registration
                  </span>
                  <span className="font-mono" style={{ fontSize: '12px', color: 'var(--grey-600)' }}>
                    FUTMinna Track
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
                  Register to Build & Compete
                </h3>

                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--grey-600)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  Complete your entry details to join the official FUTMinna scholarship cohort and receive information about the next steps.
                </p>

                {/* Funnel Roadmap Steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px', fontSize: '13px', color: 'var(--ink)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--violet-soft)', color: 'var(--violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '11px', flexShrink: 0 }}>
                      1
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--violet-ink)' }}>Fill Pre-Registration Form</strong>
                      <span style={{ color: 'var(--grey-600)', fontSize: '12px' }}>Links your student profile and locks in your track eligibility.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--violet-soft)', color: 'var(--violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '11px', flexShrink: 0 }}>
                      2
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--violet-ink)' }}>Verify Real Identity with GoodDollar</strong>
                      <span style={{ color: 'var(--grey-600)', fontSize: '12px' }}>Free one-time face-verification to ensure sybil-proof fair ranking.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--violet-soft)', color: 'var(--violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '11px', flexShrink: 0 }}>
                      3
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--violet-ink)' }}>Prompt, Deploy & Compete</strong>
                      <span style={{ color: 'var(--grey-600)', fontSize: '12px' }}>Ship with GoodBuild on Celo and earn peer approvals for the ₦150k prize.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Funnel Redirect Button */}
              <div>
                {communityConfirmed ? (
                  <a
                    href="#/registration"
                    className="btn-primary"
                    style={{
                    width: '100%',
                    padding: '16px 24px',
                    fontSize: '16px',
                    fontWeight: 700,
                    borderRadius: '14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                    }}
                  >
                    <span>Start Pre-Registration Form</span>
                    <span style={{ fontSize: '18px' }}>→</span>
                  </a>
                ) : (
                  <p style={{ textAlign: 'center', color: 'var(--grey-600)', fontSize: '13px' }}>
                    Join the WhatsApp community above to unlock registration.
                  </p>
                )}
                
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '11px',
                    color: 'var(--grey-400)',
                    marginTop: '10px',
                    lineHeight: 1.5
                  }}
                >
                  Takes under 60 seconds • Begin your scholarship application
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOW TO ENTER: 3 RULES SECTION */}
      <section style={{ padding: '60px 0', background: 'var(--surface)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <span className="pill-badge" style={{ marginBottom: '12px' }}>Competition Format</span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 4vw, 34px)',
                fontWeight: 800,
                color: 'var(--violet-ink)',
                letterSpacing: '-0.02em',
              }}
            >
              Three Rules. One ₦150,000 Winner.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Rule 1 */}
            <div className="card-gb" style={{ padding: '30px', position: 'relative' }}>
              <div className="font-mono" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--violet-mist)', marginBottom: '14px' }}>
                01
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--violet-ink)', marginBottom: '10px' }}>
                Get Verified with GoodDollar
              </h3>
              <p style={{ color: 'var(--grey-600)', fontSize: '14px', lineHeight: 1.6 }}>
                Complete GoodDollar's free face verification check once. It guarantees each student is a unique human builder, maintaining fair voting and prize integrity.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="card-gb" style={{ padding: '30px', position: 'relative' }}>
              <div className="font-mono" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--violet-mist)', marginBottom: '14px' }}>
                02
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--violet-ink)', marginBottom: '10px' }}>
                Build with GoodBuild
              </h3>
              <p style={{ color: 'var(--grey-600)', fontSize: '14px', lineHeight: 1.6 }}>
                Describe your dApp or game idea in natural English chat. GoodBuild automatically writes the smart contracts, generates the web interface, and deploys to Celo from your wallet.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="card-gb" style={{ padding: '30px', position: 'relative' }}>
              <div className="font-mono" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--violet-mist)', marginBottom: '14px' }}>
                03
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--violet-ink)', marginBottom: '10px' }}>
                Make G$ Meaningful
              </h3>
              <p style={{ color: 'var(--grey-600)', fontSize: '14px', lineHeight: 1.6 }}>
                Your project must incorporate GoodDollar (G$) utility into its core functionality: in-game currency, community micro-tipping, savings pooling, or peer transactions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* RULES & ELIGIBILITY DETAILS */}
      <section style={{ padding: '60px 0 30px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="card-gb" style={{ padding: '36px 30px', border: '1.5px solid var(--violet-mist)' }}>
            <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--violet-ink)', marginBottom: '18px' }}>
              Scholarship Eligibility & Guidelines
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--grey-600)' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--violet)', fontWeight: 'bold' }}>•</span>
                <span><strong>Exclusivity:</strong> Open to verified Federal University of Technology, Minna (FUTMinna) students aged 18+.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--violet)', fontWeight: 'bold' }}>•</span>
                <span><strong>Shortlist Selection:</strong> Verified peer voters award approvals. The Top 5 projects by approvals make the official shortlist.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--violet)', fontWeight: 'bold' }}>•</span>
                <span><strong>Grand Winner Announcement:</strong> GoodBuild × GoodCash judges evaluate the Top 5 shortlist after submissions close on 10 Dec and award the full ₦150,000 scholarship.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--violet)', fontWeight: 'bold' }}>•</span>
                <span><strong>Verification:</strong> The chosen winner will be asked to present active FUTMinna student credentials prior to payout disbursement.</span>
              </li>
            </ul>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: 'var(--grey-600)' }}>Ready to begin your journey?</span>
              {communityConfirmed ? (
                <a
                  href="#/registration"
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Proceed to Entry Form →
                </a>
              ) : (
                <span style={{ fontSize: '13px', color: 'var(--grey-600)' }}>
                  Join and confirm in the WhatsApp step above to continue.
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STYLES FOR THE SCHOLARSHIP PAGE */}
      <style>{`
        .scholarship-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
          margin-bottom: 30px;
          text-align: left;
        }

        @media (min-width: 860px) {
          .scholarship-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }

        .scholarship-prize-card {
          border: 1.5px solid var(--violet-mist);
          background: #FFFFFF;
          box-shadow: var(--shadow-pop);
          border-radius: var(--radius-card);
        }

        .scholarship-funnel-card {
          padding: 34px 28px;
          border: 1.5px solid var(--violet-mist);
          background: #FFFFFF;
          box-shadow: var(--shadow-pop);
          border-radius: var(--radius-card);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};
