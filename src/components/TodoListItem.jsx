import React, { Component } from 'react'
import Rating from './rating';

import HouseDetail from './HouseDetail';

import DeleteModal from './DeleteModal';

import UpdateModal from './UpdateModal';

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
          <HouseDetail data={this.props.data} />
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
        <td>
          <UpdateModal data={this.props.data} onUpdate={this.props.dispatchUpdateDataCompleted} index={index} /><DeleteModal onDelete={this.props.dispatchDeleteDataCompleted} index={index} />
        </td>
      </tr>
    );
  }
}

export default TodoListItem;
