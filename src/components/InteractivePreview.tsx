import React from 'react';

export const InteractivePreview: React.FC = () => {
  return (
    <section style={{ padding: '20px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>
        
        <div
          className="card-gb"
          style={{
            padding: '18px',
            background: '#ffffff',
            border: '1.5px solid var(--violet-mist)',
            boxShadow: 'var(--shadow-pop)',
            position: 'relative',
          }}
        >
          {/* Mockup Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--hairline)',
              marginBottom: '18px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }}></span>
              <span
                className="font-mono"
                style={{
                  fontSize: '12px',
                  color: 'var(--grey-600)',
                  marginLeft: '12px',
                  background: 'var(--tint)',
                  padding: '4px 12px',
                  borderRadius: '8px',
                }}
              >
                goodbuildit.xyz/create
              </span>
            </div>

            <div
              className="pill-badge"
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                background: '#E8F8F0',
                color: '#1F9D6B',
                border: '1px solid rgba(31,157,107,0.2)',
              }}
            >
              ● Auto-Compiling
            </div>
          </div>

          {/* 2-Column Mockup Layout */}
          <div className="preview-grid-container">
            
            {/* LEFT: Prompt Input Simulation */}
            <div
              style={{
                background: 'var(--tint)',
                borderRadius: 'var(--radius-block)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--violet-mist)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--violet)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 'bold',
                    }}
                  >
                    AI
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--violet)' }}>GoodBuild Assistant</span>
                </div>

                <div
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    border: '1px solid rgba(89, 46, 129, 0.12)',
                    boxShadow: '0 4px 12px rgba(89, 46, 129, 0.05)',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ fontSize: '14px', color: 'var(--violet-ink)', fontWeight: 500, marginBottom: '8px' }}>
                    "Create a decentralized Tip Jar on Celo with GoodDollar (G$) support and a live leaderboard for top supporters."
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="font-mono" style={{ fontSize: '11px', background: 'var(--violet-soft)', color: 'var(--violet)', padding: '2px 8px', borderRadius: '6px' }}>ERC-20</span>
                    <span className="font-mono" style={{ fontSize: '11px', background: 'var(--violet-soft)', color: 'var(--violet)', padding: '2px 8px', borderRadius: '6px' }}>MiniPay</span>
                    <span className="font-mono" style={{ fontSize: '11px', background: 'var(--violet-soft)', color: 'var(--violet)', padding: '2px 8px', borderRadius: '6px' }}>Sepolia</span>
                  </div>
                </div>
              </div>

              {/* Wallet Connector Simulation */}
              <div
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '14px',
                  border: '1px dashed var(--violet-mist)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#592E81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
                  </svg>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>Sign from Connected Wallet</span>
                </div>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600 }}>Ready</span>
              </div>
            </div>

            {/* RIGHT: Generated Web App Live Card */}
            <div
              style={{
                background: 'white',
                borderRadius: 'var(--radius-block)',
                padding: '24px',
                border: '1px solid var(--violet-mist)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--grey-600)' }}>tipjar.goodbuildit.xyz</span>
                  <span style={{ background: '#E8F8F0', color: '#1F9D6B', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>LIVE DAPP</span>
                </div>

                <div style={{ textAlign: 'center', padding: '16px', background: 'var(--canvas)', borderRadius: '14px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--grey-600)', fontWeight: 600 }}>Total Contributions</div>
                  <div className="font-display" style={{ fontSize: '28px', fontWeight: 800, color: 'var(--violet-ink)', marginTop: '4px' }}>
                    1,450.00 <span style={{ fontSize: '16px', color: 'var(--pink)' }}>G$</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                  <button style={{ padding: '10px', borderRadius: '8px', background: 'var(--tint)', border: '1px solid var(--violet-mist)', fontSize: '12px', fontWeight: 600, color: 'var(--violet)', cursor: 'default' }}>
                    Tip 50 G$
                  </button>
                  <button style={{ padding: '10px', borderRadius: '8px', background: 'var(--violet)', border: 'none', fontSize: '12px', fontWeight: 600, color: 'white', cursor: 'default' }}>
                    Custom Amount
                  </button>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="terminal-card" style={{ padding: '12px 16px', fontSize: '11px' }}>
                <span style={{ color: '#FF85D9' }}>contract</span> TipJar <span style={{ color: '#A882DD' }}>is</span> Ownable &#123;<br />
                &nbsp;&nbsp;<span style={{ color: '#6EE7B7' }}>emit</span> TipReceived(msg.sender, amount);<br />
                &#125;
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .preview-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: stretch;
        }

        @media (min-width: 768px) {
          .preview-grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};
