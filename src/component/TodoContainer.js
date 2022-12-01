/* eslint-disable react/jsx-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  data = {
    todos: [
      {
        id: 1,
        name: 'Cooking',
        completed: true,
      },
      {
        id: 2,
        name: 'Laundry',
        completed: false,
      },
      {
        id: 3,
        name: 'Shopping',
        completed: false,
      },
      {
        id: 4,
        name: 'Reading',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <InputTodo />
        <TodoList todos={this.data.todos} />
      </div>
    );
  }
}
export default TodoContainer;
