import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

const App = () => (
  <div className="bg-darkBackground text-white">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
