import React from 'react';

import Header from './components/Header'
import Navbar from './components/Navbar'
import RandomQuotes from './components/RandomQuotes'
import Footer from './components/Footer'

import Accueil from './components/Accueil'
import FullRecipeCard from './components/FullRecipeCard'
import './App.css';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
        <Navbar />
        <RandomQuotes />
      </div>
      <div className="">
        <body>
          <Switch>
            <Route exact path="/" component={Accueil}></Route>
            <Route path="/FullRecipeCard" component={FullRecipeCard} />
          </Switch>
        </body>
        <Footer />
      </div>
    </div>
  );
}

export default App;
