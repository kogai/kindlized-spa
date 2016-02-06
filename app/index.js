/** @jsx element */

import { dom, element } from 'deku';
import { createStore, combineReducers } from 'redux';

const { createRenderer } = dom;

const EVENT_NAME = 'EVENT_NAME';

function myAction(dispatch) {
  return ()=> {
    dispatch({
      type: EVENT_NAME,
    });
  };
}

const InputBox = {
  propTypes: {
    iconType: String,
    name: String,
  },
  render({ props, dispatch }) {
    return (
      <section>
        <input type="text" />
        <button
          className={ `glyphicon-${props.iconType}` }
          onClick={ myAction(dispatch) }
          type="button"
        >{ props.name }</button>
      </section>
    );
  },
};

function myReducer(state = {}, action) {
  switch (action.type) {
    case EVENT_NAME:
      return {};
    default:
      return state;
  }
}

const rootReducer = combineReducers({ myReducer });

const store = createStore(rootReducer);
const render = createRenderer(document.body, store.dispatch);

render(
  <div>
    <InputBox iconType="search" name="探す" />
    <InputBox iconType="plus" name="追加する" />
  </div>,
  store.getState()
);

/*
// store.subscribe(()=> {
//   render(
//     <MyButton />,
//     store.getState()
//   )
// });
*/
