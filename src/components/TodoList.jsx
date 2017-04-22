import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {

  toggleSort = () => {
    this.props.dispatchToggleTodoCompleted();
  }

  toggleScoreSort = () => {
    this.props.dispatchToggleScoreCompleted();
  }

  toggleAreaSort = () => {
    this.props.dispatchToggleAreaCompleted();
  }

  searchTitle = (e) => {
    let searchString = e.target.value;
    console.log(searchString);
    this.props.dispatchSearchTitleCompleted(searchString);
  }

  render() {
    return (
      <div id="data-list">
        <div className="ui icon input">
          <input type="text" placeholder="Search..." onChange={this.searchTitle} />
          <i className="search icon"></i>
        </div>
        <table className="ui celled padded table">
          <thead>
            <tr><th className="single line">編號</th>
            <th>標題</th>
            <th>所在區域<i className="sort icon" onClick={this.toggleAreaSort} ></i></th>
            <th>租金<i className="sort icon" onClick={this.toggleSort}></i></th>
            <th>評分<i className="sort icon" onClick={this.toggleScoreSort}></i></th>
            <th>功能</th>
          </tr></thead>
          <tbody>
            {this.props.datas.map((data, index) => (
              <TodoListItem
                data={data}
                dispatchToggleTodoCompleted={this.props.dispatchToggleTodoCompleted}
                dispatchDeleteDataCompleted={this.props.dispatchDeleteDataCompleted}
                dispatchUpdateDataCompleted={this.props.dispatchUpdateDataCompleted}
                index={index}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


const a = () => true;

export default TodoList;
