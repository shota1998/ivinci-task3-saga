import React from "react";
import { connect } from "react-redux";

import { getTotalPurchace } from "../redux/selectors";
import { addItem, removeItem } from "../redux/actions";

import classes from "./CartItem.module.css";
import ChangeQuantityButton from "./UI/ChangeQuantityButton ";

const CartItem = ({ item, addItem, removeItem }) => (
  <li className={classes.item}>
    <header>
      <h3>{item.title}</h3>
      <div className={classes.price}>
        ${item.value * item.quantity}
        <span className={classes.itemprice}>(${item.value}/item)</span>
      </div>
    </header>

    <div className={classes.details}>
      <div className={classes.quantity}>
        x <span>{item.quantity}</span>
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
    total: getTotalPurchace(state),
  }),
  { addItem, removeItem }
)(CartItem);
