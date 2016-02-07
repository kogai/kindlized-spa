/** @jsx element */

import { element } from 'deku';

import { editClick, editInput } from 'app/actionCreators/edit';
import { searchClick, searchInput } from 'app/actionCreators/search';
import { objectToCss } from 'app/utils';

import Header from 'app/components/Header';
import InputBox from 'app/components/InputBox';
import Menus from 'app/components/Menus';
import Panels from 'app/components/Panels';

import {
  render,
  store,
} from 'app/index';

const containerStyle = objectToCss({
  display: 'flex',
});

const navStyle = objectToCss({
  width: '15%',
});

const articleStyle = objectToCss({
  width: '85%',
});

function main() {
  render(
    <div>
      <Header />
      <section style={ containerStyle }>
        <nav style={ navStyle }>
          <Menus activePath="/" />
        </nav>
        <article style={ articleStyle }>
          <InputBox
            placeholder="検索したい書籍のタイトルを入力して下さい"
            name="探す"
            onClick={ searchClick } onInput={ searchInput }
            type="search"
          />
          <Panels />
        </article>
      </section>
    </div>,
    store.getState()
  );
}

store.subscribe(main);
main();

      // <InputBox
        // placeholder="検索したい書籍のタイトルを入力して下さい"
      //   name="編集"
      //   onClick={ editClick } onInput={ editInput }
      //   type="edit"
      // />
