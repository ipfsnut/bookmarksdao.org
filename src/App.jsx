import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Whitepaper from './components/Whitepaper/Whitepaper';
import CTA from './components/CTA/CTA';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Whitepaper />
      <CTA />
    </div>
  );
}

export default App;