import { SEARCH_INPUT, SEARCH_CLICK } from 'app/constants';

export const searchClick = (dispatch)=> ()=> {
  dispatch({
    type: SEARCH_CLICK,
  });
};

export const searchInput = (dispatch)=> (ev)=> {
  dispatch({
    type: SEARCH_INPUT,
    body: ev.target.value,
  });
};
