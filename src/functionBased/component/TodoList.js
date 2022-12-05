/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <div>
    <ul>
      {props.todos.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  </div>
);
export default TodoList;
