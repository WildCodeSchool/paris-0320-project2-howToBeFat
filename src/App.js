import React from 'react';
import Navbar from './components/Navbar'
import NavbarDesktop from './components/NavbarDesktop'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarDesktop />
      <Navbar />
    </div>
  );
}

export default App;
