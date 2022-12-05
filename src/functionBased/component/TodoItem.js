/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const { id, title, completed } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div
        onDoubleClick={handleEditing}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={completed}
          className={styles.checkbox}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          type="submit"
          onClick={() => props.deleteTodoProps(id)}
        >
          <FaTrash />
        </button>
        <span
          style={completed ? completedStyle : null}
        >
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(event) => {
          props.setUpdate(event.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
