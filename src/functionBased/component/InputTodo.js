/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState('');

  const onChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="sumbmit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
