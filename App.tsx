import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Growth from './components/Growth';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-windek-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Growth />
        <Contact />
      </main>
    </div>
  );
}

export default App;
