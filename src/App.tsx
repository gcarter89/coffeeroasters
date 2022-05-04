import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function handleHamburgerClick(event:React.MouseEvent) {
        event.preventDefault()
        setHamburgerOpen(!hamburgerOpen)
    }

  return (
      
      <>
        <Header handleHamburgerClick={handleHamburgerClick} hamburgerOpen={hamburgerOpen} />
        <div>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Create Your Plan</h4>
        </div>
        <main>

        </main>
      </>
  );
}

export default App;
