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
              todo={item}
              key={item.id}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
