import React from 'react';
import './Features.css';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="icon"><i className={`fas ${icon}`}></i></div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: 'fa-book',
      title: 'Community Curation',
      description: 'Content rises based on genuine community appreciation, not algorithms or paid promotion.'
    },
    {
      icon: 'fa-coins',
      title: 'Creator Rewards',
      description: 'Bookmark creators receive direct rewards when their content is valued by the community.'
    },
    {
      icon: 'fa-search',
      title: 'Discovery Mechanism',
      description: 'Find great books through a transparent, community-driven curation system.'
    },
    {
      icon: 'fa-sync-alt',
      title: 'Weekly Cycles',
      description: 'Dynamic leaderboards refresh weekly, ensuring content discovery stays fresh.'
    },
    {
      icon: 'fa-trophy',
      title: 'Curator Recognition',
      description: 'Early discoverers of great content earn recognition and potential future rewards.'
    },
    {
      icon: 'fa-link',
      title: 'On-Chain Transparency',
      description: 'All lock-ins visible onchain from day 1, creating a culture of transparency from day 1.'
    }
  ];
  
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Why BookmarksDAO?</h2>
          <p>BookmarksDAO is reimagining how we discover, curate, and reward written content in the web3 era.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
