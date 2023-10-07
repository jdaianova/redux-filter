import {
    CHANGE_SEARCH_FIELD,
  } from '../actions/actionsTypes';
  
  const initialState = {
    query: '',
  };
  
  export default function listReducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_SEARCH_FIELD:
        const { name, value } = action.payload;
        return { ...state, [name]: value };
      default:
        return state;
    }
  }