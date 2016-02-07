import { BOOK_FETCH, BOOK_RECIEVE } from 'app/actionCreators/actionTypes';

const initialState = [];

export default function panelReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_FETCH:
      return state;

    case BOOK_RECIEVE:
      return action.body.books;

    default:
      return state;
  }
}
