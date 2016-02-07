/** @jsx element */

import { element } from 'deku';

import { searchClick, searchInput } from 'app/actionCreators/search';

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
        placeholder="検索したい書籍のタイトルを入力して下さい"
        name="探す"
        onClick={ searchClick } onInput={ searchInput }
        type="search"
      />
      <Panels />
    </Layout>,
    store.getState()
  );
}

store.subscribe(main);
main();
