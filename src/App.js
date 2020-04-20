import React from 'react';

import Header from './components/Header'
import Navbar from './components/Navbar'
import RecipeCard from './components/RecipeCard'
import BeerCard from './components/BeerCard'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <Navbar />
      </div>
      <body className="body">
        <RecipeCard />
        <BeerCard />
      </body>
    </div>
  );
}

export default App;
