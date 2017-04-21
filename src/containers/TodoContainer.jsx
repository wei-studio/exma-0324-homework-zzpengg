import React, {Component} from 'react'
import { connect } from 'react-redux'

import TodoList from './../components/TodoList'

import {
  fetchTodos,
  toggleTodoCompleted,
  toggleScoreCompleted,
  toggleAreaCompleted,
  searchTitleCompleted,
} from './../actions/TodoAction'

class TodoContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  dispatchToggleTodoCompleted = () => {
    this.props.dispatch(toggleTodoCompleted());
  }

  dispatchToggleScoreCompleted = () => {
    this.props.dispatch(toggleScoreCompleted());
  }

  dispatchToggleAreaCompleted = () => {
    this.props.dispatch(toggleAreaCompleted());
  }

  dispatchSearchTitleCompleted = (searchTitle) => {
    this.props.dispatch(searchTitleCompleted(searchTitle));
  }

  render() {
    return (
      <div id="container">
        <h2>Data List</h2>
        {/* 在這裡判斷 fetch 請求的狀態 (todos.status)，並顯示對應的 UI
        request 時，顯示讀取中的字樣
        success 時，顯示 TodoList 並將得到的 todos 資料傳入
        failure 時，顯示錯誤訊息 */}
        {
          this.props.todos.status == 'request' && (
            <div className="ui active inverted dimmer">
              <div className="ui text loader" />
            </div>
          )
        }

        {
          this.props.todos.status == 'success' && (
            <TodoList datas={this.props.todos.renderData}
              dispatchToggleTodoCompleted={this.dispatchToggleTodoCompleted}
              dispatchToggleScoreCompleted={this.dispatchToggleScoreCompleted}
              dispatchToggleAreaCompleted={this.dispatchToggleAreaCompleted}
              dispatchSearchTitleCompleted={this.dispatchSearchTitleCompleted}/>
          )

        }

        {
          this.props.todos.status == 'failure' && (
            <div>{this.props.todos.error}</div>
          )
        }

      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(TodoContainer);
