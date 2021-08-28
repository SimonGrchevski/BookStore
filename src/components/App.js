import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Categories from './Categories';
import Header from './Header';
import Library from './Library';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Library />
      </Route>
      <Route exact path="/Categories">
        <Categories />
      </Route>
    </Switch>
  </div>
);

export default App;
