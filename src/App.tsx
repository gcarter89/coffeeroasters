import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

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
            <Home />
        </main>
        <Footer />
      </>
  );
}

export default App;
