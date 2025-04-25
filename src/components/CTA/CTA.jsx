import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Join the BookmarksDAO Community</h2>
        <p>Be part of the future of decentralized book curation and discovery.</p>
        
        <div className="substack-container">
          <iframe 
            src="https://bookmarksdao.substack.com/embed" 
            width="480" 
            height="320" 
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px'
            }}
            frameBorder="0" 
            scrolling="no"
            title="BookmarksDAO Newsletter Signup"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
