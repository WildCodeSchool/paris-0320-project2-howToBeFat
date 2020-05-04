import React from 'react';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './components/Accueil'
import FullRecipeCard from './components/FullRecipeCard'
import RecipeSearch from './components/RecipeSearch'
// import Beers from './components/Beers'
// import Calculator from './components/Calculator'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Calculator from './components/Calculator';

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
        <Route path="/RecipeSearch" component={RecipeSearch} />
         {/* <Route path="/Beers" component={/Beers} />
         <Route path="Calculator" component={/Calculator} /> */}
      </Switch>
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
