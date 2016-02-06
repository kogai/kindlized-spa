const EVENT_NAME = 'EVENT_NAME';

export default (dispatch)=> ()=> {
  dispatch({
    type: EVENT_NAME,
  });
};
