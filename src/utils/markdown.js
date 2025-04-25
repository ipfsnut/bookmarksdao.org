// Utility functions for rendering markdown

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