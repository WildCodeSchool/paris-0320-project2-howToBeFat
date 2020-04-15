import React from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavbarDesktop from './components/NavbarDesktop'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarDesktop />
      <Navbar />
    </div>
  );
}

export default App;
