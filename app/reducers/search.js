import { SEARCH_INPUT, SEARCH_CLICK, SEARCH_RECIEVE } from 'app/actionCreators/actionTypes';

const initialState = {
  body: '',
  books: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return {
        body: action.body,
        books: state.books,
      };
    case SEARCH_CLICK:
      return {
        body: initialState.body,
        books: initialState.books,
      };
    case SEARCH_RECIEVE:
      return {
        body: state.body,
        books: state.books.concat(action.books)
          .map((b)=> (Object.assign({}, b, {
            isRegisterd: true,
          }))),
      };
    default:
      return state;
  }
}
