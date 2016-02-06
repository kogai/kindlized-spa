import { EDIT_INPUT, EDIT_CLICK } from 'app/constants';

const initialState = {
  body: '',
};

export default function editReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_INPUT:
      return {
        body: action.body,
      };
    case EDIT_CLICK:
      return {
        body: '',
      };
    default:
      return state;
  }
}
