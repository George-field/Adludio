/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './App.scss';
import Button from '@material-ui/core/Button';

//Make functional component if I have time!!!
export default class App extends Component {
  render() {
    
    let items;
    //Make turniary operator if I get time!
    if(this.props.aws.aws.data != undefined){
      items = this.props.aws.aws.data.Contents.map(item => {
        return <li id={item.Key}>{item.Key}</li>
      })
    }else{
      items = "Please Refresh some items"
    }
  
    return (
      <div className={styles.App}>
        <Button onClick={() => {this.props.getAwsData()}} variant="contained" color="primary">
          Refresh List
        </Button>
       {
         items
       }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
