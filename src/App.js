import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Accueil from './components/Accueil'
import Calculator from './components/Calculator';
import Footer from './components/Footer'
import FullRecipeCard from './components/FullRecipeCard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import RecipeSearch from './components/RecipeSearch'
import SearchBeer from './components/SearchBeer'

import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Accueil}></Route>
        <Route path="/FullRecipeCard" component={FullRecipeCard} />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/RecipeSearch" component={RecipeSearch} />
        <Route path="/SearchBeer" component={SearchBeer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
