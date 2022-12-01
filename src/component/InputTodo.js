/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class InputTodo extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add Todo.." />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputTodo;
