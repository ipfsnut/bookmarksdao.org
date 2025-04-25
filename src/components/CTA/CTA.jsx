import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Join the BookmarksDAO Community</h2>
        <p>Be part of the future of decentralized book curation and discovery.</p>
        
        <div className="substack-container">
          <p>Subscribe to our newsletter to stay updated on our progress.</p>
          <a 
            href="https://bookmarksdao.substack.com" 
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on Substack
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
