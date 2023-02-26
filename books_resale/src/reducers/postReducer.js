// import React from 'react';
import {FETCH_ALL,CREATE} from '../actions/actionConstants'

const postReducer = ( posts = [], action ) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE :
      return [ ...posts,action.payload ];
    default:
      return posts;
  }
}
export default postReducer;