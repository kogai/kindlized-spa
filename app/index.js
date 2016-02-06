/** @jsx element */

import { dom, element } from 'deku';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from 'app/reducers/rootReducer';
import myAction from 'app/actionCreators/myAction';
import InputBox from 'app/components/InputBox';

const { createRenderer } = dom;

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));
const store = createStore(rootReducer);
const render = createRenderer(document.body, store.dispatch);

render(
  <InputBox action={ myAction } iconType="search" name="探す" />,
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
