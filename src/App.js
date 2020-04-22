import React from 'react';

import Header from './components/Header'
import Navbar from './components/Navbar'

import Acceuil from './components/Acceuil'
import FullRecipeCard from './components/FullRecipeCard'
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
        <Route exact path="/" component={Acceuil}></Route>
        <Route path="/FullRecipeCard" component={FullRecipeCard} />
      </Switch>
    </div>
  );
}

export default App;
