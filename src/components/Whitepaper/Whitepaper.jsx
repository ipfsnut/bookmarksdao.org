import React, { useState, useEffect } from 'react';
import { loadWhitepaperFromIPFS } from '../../utils/ipfs';
import { renderMarkdown } from '../../utils/markdown';
import './Whitepaper.css';

const Whitepaper = () => {
  const [whitepaperContent, setWhitepaperContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const whitepaperCID = "bafkreidktpi2aadolykdam2r2doq6z42nwrdqfheaznrjbmpicqpezucwe";
  
  useEffect(() => {
    const fetchWhitepaper = async () => {
      try {
        setIsLoading(true);
        const text = await loadWhitepaperFromIPFS(whitepaperCID);
        setWhitepaperContent(renderMarkdown(text));
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading whitepaper:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchWhitepaper();
  }, []);
  
  useEffect(() => {
    if (whitepaperContent) {
      generateTableOfContents();
    }
  }, [whitepaperContent]);
  
  const generateTableOfContents = () => {
    const headers = document.querySelectorAll('#whitepaper-content h1, #whitepaper-content h2');
    const tocList = document.getElementById('toc-list');
    
    if (!tocList) return;
    
    tocList.innerHTML = '';
    
    headers.forEach(header => {
      const id = header.id || header.textContent.replace(/[^a-z0-9]/gi, '-').toLowerCase();
      header.id = id;
      
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = header.textContent;
      
      if (header.tagName === 'H2') {
        listItem.style.paddingLeft = '1rem';
      }
      
      listItem.appendChild(link);
      tocList.appendChild(listItem);
      
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetElement = document.getElementById(id);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    document.getElementById('whitepaper-nav').style.display = 'block';
  };
  
  return (
    <section className="whitepaper" id="whitepaper">
      <div className="container">
        <div className="section-header">
          <h2>Whitepaper</h2>
          <p>Explore our detailed vision for the BookmarksDAO protocol.</p>
          <a 
            href={`ipfs://${whitepaperCID}`} 
            className="ipfs-link"
          >
            <i className="fas fa-network-wired"></i> Direct IPFS link
          </a>
        </div>
        
        <div className="whitepaper-container">
          <div className="whitepaper-flex-container">
            <div className="whitepaper-nav" id="whitepaper-nav">
              <h4>Table of Contents</h4>
              <ul id="toc-list">
                {/* Will be populated by JavaScript */}
              </ul>
            </div>
            
            <div className="whitepaper-content">
              {isLoading && (
                <div className="whitepaper-loading" id="whitepaper-loading">
                  Loading whitepaper from IPFS...
                </div>
              )}
              
              {error && (
                <div className="whitepaper-loading" id="whitepaper-loading">
                  Error loading whitepaper from IPFS. Please try again later.<br/>
                  <small>
                    You can also access it directly at <a 
                      href={`https://ipfs.io/ipfs/${whitepaperCID}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      IPFS Gateway
                    </a>
                  </small>
                </div>
              )}
              
              <div 
                id="whitepaper-content" 
                dangerouslySetInnerHTML={{ __html: whitepaperContent }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;