const INITIAL_STATE = {all : [], post: null };
import {FETCH_POSTS} from '../actions/index';

export default function(state = INITIAL_STATE, action ){
  switch (action.type) {
    case FETCH_POSTS:
        console.log({...state, all : action.payload.data});
        return {...state, all : action.payload.data};
      break;
    default:
      return state;
  }
}
