import React from 'react';
import { connect } from 'react-redux';

import { getItemList } from '../../redux/selectors';

import classes from './Cart.module.css';
import CartItem from '../CartItem';

const Cart = ({ items }) => (
  <section className={classes.cart}>
    <h2>Your Shopping Cart</h2>
    <ul>
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </ul>
  </section>
);

export default connect((state) => ({
  items: getItemList(state),
}))(Cart);
