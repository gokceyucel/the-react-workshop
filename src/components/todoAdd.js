import React, { Component } from 'react';
import styles from './todoAdd.css';

export default class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    if (!this.input.value) {
      return;
    }
    this.props.onButtonClicked(this.input.value);
    this.input.value = '';
  }

  render() {

    return (
      <div className={styles.header}>
        <input
          type="text"
          className={styles.input}
          ref={node => this.input = node} />
        <button
          className={styles.button}
          onClick={this.buttonClicked}
        >Add</button>
      </div>
    );
  }
};
