/** @jsx element */

import { dom, element } from 'deku';
import {
  createStore,
  // applyMiddleware,
} from 'redux';
// import reduxThunk from 'redux-thunk';

import rootReducer from 'app/reducers/rootReducer';
import { editClick, editInput } from 'app/actionCreators/edit';
import { searchClick, searchInput } from 'app/actionCreators/search';
import InputBox from 'app/components/InputBox';

const { createRenderer } = dom;

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));
const store = createStore(rootReducer);
const render = createRenderer(document.body, store.dispatch);

function main() {
  render(
    <div>
      <InputBox
        name="編集する"
        onClick={ editClick } onInput={ editInput }
        type="edit"
      />
      <InputBox
        name="探す"
        onClick={ searchClick } onInput={ searchInput }
        type="search"
      />
    </div>,
    store.getState()
  );
}

store.subscribe(main);
main();
