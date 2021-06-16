import React from 'react';
import { getItems } from '../../redux/api/items';
import classes from './SelectItem.module.css';
import Item from '../Item';

class SelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  async componentDidMount() {
    const { data, error } = await getItems();
    if (error) {
      console.log(error);
    } else {
      this.setState((prev) => {
        prev.items = data;
        return prev;
      });
    }
  }

  render() {
    const items = this.state.items;
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

export default SelectItem;
