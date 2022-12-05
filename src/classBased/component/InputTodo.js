/* eslint-disable react/state-in-constructor */
/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: '',
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Field cannot be empty');
    }
  }

  onChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add to item..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">Add</button>
      </form>
    );
  }
}

export default InputTodo;
