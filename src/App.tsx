import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Plan from './components/plan/Plan';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function handleHamburgerClick(event:React.MouseEvent) {
        event.preventDefault()
        setHamburgerOpen(!hamburgerOpen)
    }

  return (
      
      <>
        <Header handleHamburgerClick={handleHamburgerClick} hamburgerOpen={hamburgerOpen} />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="plan" element={<Plan />} />
                <Route path="about" element={<About />} />
            </Routes>            
        </main>
        <Footer />
      </>
  );
}

export default App;
