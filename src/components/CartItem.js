import React from 'react';
import { connect } from 'react-redux';

import * as selector from '../redux/selectors';
import { addItem, removeItem } from '../redux/actions';

import classes from './CartItem.module.css';
import ChangeQuantityButton from './UI/ChangeQuantityButton ';

const CartItem = ({ item, quantity, addItem, removeItem }) => (
  <li className={classes.item}>
    <header>
      <h3>{item.title}</h3>
      <div className={classes.price}>
        ${item.value * quantity[item.id]}
        <span className={classes.itemprice}>(${item.value}/item)</span>
      </div>
    </header>

    <div className={classes.details}>
      <div className={classes.quantity}>
        x <span>{quantity[item.id]}</span>
      </div>
      <div className={classes.actions}>
        <ChangeQuantityButton onClick={() => addItem(item.id)}>
          +
        </ChangeQuantityButton>
        <ChangeQuantityButton onClick={() => removeItem(item.id)}>
          -
        </ChangeQuantityButton>
      </div>
    </div>
  </li>
);

export default connect(
  (state) => ({
    total: selector.getTotalhQuantity(state),
    quantity: selector.getCartState(state).quantity,
  }),
  { addItem, removeItem }
)(CartItem);
