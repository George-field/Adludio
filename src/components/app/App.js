/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './App.scss';
import Button from '@material-ui/core/Button';

//default app class where our S3 component will render
export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Button onClick={() => {console.log("Hello")}} variant="contained" color="primary">
          Refresh List
        </Button>
        <h1>File List:</h1>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
