import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import * as actions from './redux/actions';
import classes from './App.module.css';
import Header from './components/Header';
import SelectItem from './components/pages/SelectItem';
import Cart from './components/pages/Cart';

class App extends React.Component {
  componentDidMount() {
    console.log('--- App.componentDidMount()');
    this.props.fetchItem();
    this.props.fetchCartItem();
  }

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

export default connect(null, {
  fetchItem: () => actions.fetchItemRequest(),
  fetchCartItem: () => actions.fetchCartItemRequest(),
})(App);
