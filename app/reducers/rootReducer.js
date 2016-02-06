import { combineReducers } from 'redux';

const EVENT_NAME = 'EVENT_NAME';

function myReducer(state = {}, action) {
  switch (action.type) {
    case EVENT_NAME:
      return {};
    default:
      return state;
  }
}

export default combineReducers({ myReducer });
