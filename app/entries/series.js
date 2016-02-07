/** @jsx element */

import { element } from 'deku';

import { editClick, editInput } from 'app/actionCreators/search';

import Layout from 'app/components/Layout';
import InputBox from 'app/components/InputBox';
import Panels from 'app/components/Panels';

import {
  render,
  store,
} from 'app/index';

function main() {
  render(
    <Layout>
      <InputBox
        placeholder="編集"
        name="編集"
        onClick={ editClick } onInput={ editInput }
        type="edit"
      />
      <Panels />
    </Layout>,
    store.getState()
  );
}

store.subscribe(main);
main();
