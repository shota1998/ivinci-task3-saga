import React from 'react';
import { connect } from 'react-redux';

import { getItemList } from '../../redux/selectors';

import classes from './SelectItem.module.css';
import Item from '../Item';

class SelectItem extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
          {items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </ul>
      </section>
    );
  }
}

export default connect((state) => ({
  items: getItemList(state),
}))(SelectItem);
