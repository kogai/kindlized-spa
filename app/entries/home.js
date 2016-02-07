/** @jsx element */

import { element } from 'deku';

import { searchClick, searchInput } from 'app/actionCreators/search';
import { objectToCss } from 'app/utils';

import Layout from 'app/components/Layout';
import InputBox from 'app/components/InputBox';
import Panels from 'app/components/Panels';
import Pagenation from 'app/components/Pagenation';

import {
  render,
  store,
} from 'app/index';

const inputBoxStyle = objectToCss({
  margin: '20px 40px',
  marginBottom: '30px',
});

function main() {
  render(
    <Layout activePath="/" >
      <div style={ inputBoxStyle }>
        <InputBox
          placeholder="検索したい書籍のタイトルを入力して下さい"
          name="探す"
          onClick={ searchClick } onInput={ searchInput }
          type="search"
          icon="search"
        />
      </div>
      <Panels iterateTo="search" />
      <Pagenation />
      <Panels iterateTo="panels" />
      <Pagenation />
    </Layout>,
    store.getState()
  );
}

main();
store.subscribe(main);
