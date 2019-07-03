import TYPE from '../../types/aws';
import axios from 'axios'


export default function getData() {
    return (dispatch) => {
      dispatch({ type: TYPE.REQ_DATA });
  
      return axios.get('http://localhost:3000/v1.0/amazon').then(res => {
        dispatch({
            type: TYPE.RES_DATA,
            data: res.data
          });
      })
    };
  }