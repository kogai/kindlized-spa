import { SEARCH_INPUT, SEARCH_CLICK } from 'app/constants';

const initialState = {
  body: '',
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return {
        body: action.body,
      };
    case SEARCH_CLICK:
      return {
        body: '',
      };
    default:
      return state;
  }
}
