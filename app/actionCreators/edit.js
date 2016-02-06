import { EDIT_INPUT, EDIT_CLICK } from 'app/constants';

export const editClick = (dispatch)=> ()=> {
  dispatch({
    type: EDIT_CLICK,
  });
};

export const editInput = (dispatch)=> (ev)=> {
  dispatch({
    type: EDIT_INPUT,
    body: ev.target.value,
  });
};
