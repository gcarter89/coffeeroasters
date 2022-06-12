import React, { useEffect, useState } from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Plan from './components/plan/Plan';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function handleHamburgerClick(event:React.MouseEvent) {
        setHamburgerOpen(!hamburgerOpen)
    }

    useEffect(() => {
        hamburgerOpen ? document.body.classList.add('hamburger') : document.body.classList.remove('hamburger');
    },[hamburgerOpen])

  return (
      
      <>
        <Header handleHamburgerClick={handleHamburgerClick} hamburgerOpen={hamburgerOpen} />
        <main>
            {hamburgerOpen && <Menu handleHamburgerClick={handleHamburgerClick} />}
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
