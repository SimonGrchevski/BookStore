import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header';
import Library from './components/Library';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Library />
      </Route>
      <Route path="/Categories">
        <Categories />
      </Route>
    </Switch>
  </div>
);

export default App;
