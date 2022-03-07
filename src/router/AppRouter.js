import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Pokedex } from '../components/Pokedex';
import { DisplayingOptions } from '../components/DisplayingOptions';

export const AppRouter = () => {

  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div>
        <Switch>
            <Route exact path='/:pokemonId' component={ DisplayingOptions } />
            <Route path='/' component={ Pokedex }/>
        </Switch>
      </div>            
    </Router>
  )
}
