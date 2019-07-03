import TYPE from '../types/aws';

export default (state = { aws: [] }, action) => {
    switch (action.type) {
     case TYPE.RES_DATA:
      return {
       ...state,
       aws: action.data
      };
     default:
      return state;
    }
   };
