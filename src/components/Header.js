import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import GoCartButton from "./UI/GoCartButton";

const Header = ({ totalQuantity }) => (
  <header className={classes.header}>
    <Link to="/" style={{ textDecoration: "none" }}>
      <h1>ReduxCart</h1>
    </Link>
    <nav>
      <ul>
        <li>
          <GoCartButton purchase={totalQuantity}>My Cart</GoCartButton>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
