/** @jsx element */

import { dom } from 'deku';
import { createStore } from 'redux';
import uid from 'uid';

import rootReducer from 'app/reducers/rootReducer';

const { createElement } = dom;

export default function renderIntoDocument(instance) {
  const store = createStore(rootReducer);
  const path = uid();
  const dispatch = store.dispatch;
  const context = {};
  return createElement(instance, path, dispatch, context);
}
