import React from 'react';

import Header from './components/Header'
import Navbar from './components/Navbar'
import RecipeCard from './components/RecipeCard'
import RandomQuotes from './components/RandomQuotes'
import Footer from './components/Footer'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="">
        <Header />
        <Navbar />
        <RandomQuotes />
      </div>
      <div className="">
        <RecipeCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
