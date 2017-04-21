import React, { Component } from 'react'
import Rating from './rating';

class TodoListItem extends Component {

  rate(point){
    // point param will be passed from Rating module
    // Do something. ex: Actions.rateProduct(productId, point)
  }

  render() {
    const { index } = this.props;
    const { title, area, rent, score } = this.props.data;
    return (
      <tr>
        <td>
          <h2 className="ui center aligned header">{index + 1}</h2>
        </td>
        <td className="single line">
          {title}
        </td>
        <td className="single line">
          {area}
        </td>
        <td>
          {rent} / 月
        </td>
        <td>
          <Rating rating={score} onRate={this.rate.bind(this)} />
        </td>
      </tr>
    );
  }
}

export default TodoListItem;
