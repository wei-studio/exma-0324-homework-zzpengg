import React, { Component } from 'react'

class TodoListItem extends Component {
  handleCheckboxChange = () => {
    this.props.dispatchToggleTodoCompleted(this.props.index);
  }

  render() {
    return (
      <div className="todo-item">
        <div className="ui toggle checkbox">
          <input
            type="checkbox"
            checked={this.props.isCompleted}
            onChange={this.handleCheckboxChange}
          />
          <label>{this.props.title}</label>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
