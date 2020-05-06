import React from 'react';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Accueil from './components/Accueil'
import FullRecipeCard from './components/FullRecipeCard'
import SearchBeer from './components/SearchBeer'
import './App.css';
import { Route, Switch } from 'react-router-dom'

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
        <Route path="/SearchBeer" component ={SearchBeer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
