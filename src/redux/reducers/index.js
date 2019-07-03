import { combineReducers } from 'redux';
import home from './home';
import aws from './aws'

const reduxState = combineReducers({
  home,
  aws
});

export default reduxState;
