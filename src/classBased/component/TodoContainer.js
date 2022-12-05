/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Navbar />
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
