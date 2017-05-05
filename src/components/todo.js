import React, { Component } from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';
import styles from './todo.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Todo = ({ list, onButtonClicked }) => {
  return (
    <div className={styles.wrapper}>
      <TodoAdd onButtonClicked={onButtonClicked} />
      <TodoList list={list} />
    </div>
  );
};

export default connect(
  state => ({
    list: state
  }),
  dispatch => ({
    onButtonClicked: (value) => {
      dispatch({
        type: 'ADD_TODO',
        text: value
      });
    }
  })
)(Todo);