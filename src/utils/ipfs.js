// Utility functions for loading content from IPFS

export const loadWhitepaperFromIPFS = async (cid) => {
  const ipfsGateways = [
    "https://ipfs.io/ipfs/",
    "https://gateway.pinata.cloud/ipfs/",
    "https://cloudflare-ipfs.com/ipfs/",
    "https://dweb.link/ipfs/"
  ];
  
  for (const gateway of ipfsGateways) {
    try {
      console.log(`Trying to load from ${gateway}${cid}`);
      const response = await fetch(`${gateway}${cid}`);
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      console.warn(`Failed to load from ${gateway}`, error);
    }
  }
  
  throw new Error("Failed to load from all IPFS gateways");
};

export const renderMarkdown = (markdownText) => {
  // Simple markdown to HTML conversion
  let html = markdownText
    // Convert headers
    .replace(/^# (.*$)/gm, '<h1 id="$1">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 id="$1">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 id="$1">$1</h3>')
    
    // Convert bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // Convert lists
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    
    // Convert paragraphs (any line that doesn't start with a special character)
    .replace(/^(?!<h|<li|<ul|<ol|<p|<\/)(.*$)/gm, '<p>$1</p>')
    
    // Wrap lists
    .replace(/(<li>.*<\/li>\n)+/g, function(match) {
      if (match.includes('<li>1.')) {
        return '<ol>' + match + '</ol>';
      } else {
        return '<ul>' + match + '</ul>';
      }
    });
  
  return html;
};

export const addDownloadButton = (cid) => {
  const downloadBtn = document.createElement('a');
  downloadBtn.href = `https://ipfs.io/ipfs/${cid}`;
  downloadBtn.download = "BookmarksDAO-Whitepaper.txt";
  downloadBtn.className = "button secondary";
  downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Whitepaper';
  downloadBtn.style.marginTop = "1rem";
  downloadBtn.style.display = "inline-block";
  
  const whitepaperContent = document.querySelector('.whitepaper-content');
  if (whitepaperContent) {
    whitepaperContent.prepend(downloadBtn);
  }
};