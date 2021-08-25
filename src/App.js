import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Library from './components/Library';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Library />
        </Route>
        <Route path='/Categories'>
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;