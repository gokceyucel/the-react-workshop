import React, { Component } from 'react';
import styles from './todoList.css';

const TodoList = (props) => {
  const listItems = props.list.map(item => <li key={item}>{item}</li>);

  return (
    <ul className={styles.list}>
      {listItems}
    </ul>
  );
};

export default TodoList;
