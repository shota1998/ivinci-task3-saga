import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import classes from './App.module.css';

import Header from './components/Header';
import SelectItem from './components/pages/SelectItem';
import Cart from './components/pages/Cart';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact render={() => <SelectItem />} />
          <Route path='/cart' render={() => <Cart />} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}
