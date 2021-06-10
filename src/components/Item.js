import React from "react";
import { connect } from "react-redux";

import { addItem } from "../redux/actions";

import classes from "./Item.module.css";
import AddCartButton from "./UI/AddCartButton";

const Item = ({ item, addItem }) => (
  <li className={classes.item}>
    <section className={classes.card}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>${item.value}</div>
      </header>
      <p>{item.description}</p>
      <AddCartButton onClick={() => addItem(item.id)}>
        Add to Cart
      </AddCartButton>
    </section>
  </li>
);

export default connect(null, { addItem })(Item);
