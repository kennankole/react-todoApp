/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
