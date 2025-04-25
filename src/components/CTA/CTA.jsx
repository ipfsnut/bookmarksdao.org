import React from 'react';
import './CTA.css';

const CTA = () => {
  // Function to directly open Substack in a new tab
  const openSubstack = () => {
    window.open('https://bookmarksdao.substack.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Join the BookmarksDAO Community</h2>
        <p>Be part of the future of decentralized book curation and discovery.</p>
        
        <div className="substack-container">
          <p>Subscribe to our newsletter to stay updated on our progress.</p>
          
          {/* Method 1: Regular anchor tag */}
          <a 
            href="https://bookmarksdao.substack.com" 
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              margin: '10px',
              padding: '12px 24px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Subscribe on Substack (Link)
          </a>
          
          {/* Method 2: Button with onClick handler */}
          <button 
            onClick={openSubstack}
            className="button"
            style={{
              margin: '10px',
              padding: '12px 24px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Subscribe on Substack (Button)
          </button>
          
          {/* Method 3: Direct text link as fallback */}
          <p style={{ marginTop: '15px' }}>
            Or visit our Substack directly at:{' '}
            <a 
              href="https://bookmarksdao.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              bookmarksdao.substack.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
