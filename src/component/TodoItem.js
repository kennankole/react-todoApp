/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        { this.props.todo.name }
        <button type="submit"> Delete</button>
      </li>
    );
  }
}

export default TodoItem;
