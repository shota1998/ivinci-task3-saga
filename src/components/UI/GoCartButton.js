import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTotalhQuantity } from '../../redux/selectors';

import classes from './GoCartButton.module.css';

const GoCartButton = ({ total }) => (
  <div className={classes.actions}>
    <Link to='/cart'>
      <button className={classes.button}>
        <span>Cart</span>
        <span className={classes.badge}>{total}</span>
      </button>
    </Link>
  </div>
);

export default connect((state) => ({ total: getTotalhQuantity(state) }))(
  GoCartButton
);
