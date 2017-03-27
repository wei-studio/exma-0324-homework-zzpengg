import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {
  render() {
    return (
      <div id="todo-list">
        
        {this.props.todos.map((todo, index) => (
          <TodoListItem 
            title={todo.title} 
            isCompleted={todo.isCompleted} 
            dispatchToggleTodoCompleted={this.props.dispatchToggleTodoCompleted}
            index={index}
            key={index}
          />
        ))}
      </div>
    );
  }
}


const a = () => true;

export default TodoList;