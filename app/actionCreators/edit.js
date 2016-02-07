import {
  EDIT_INPUT, EDIT_CLICK,
  EDIT_RECIEVE,
} from 'app/actionCreators/actionTypes';

export const editClick = (dispatch, input, editableIndex)=> ()=> {
  dispatch({
    type: EDIT_CLICK,
    body: {
      editableIndex,
    },
  });
};

export const editInput = (dispatch)=> (ev)=> {
  dispatch({
    type: EDIT_INPUT,
    body: ev.target.value,
  });
};
