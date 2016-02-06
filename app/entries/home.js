/** @jsx element */

import { element } from 'deku';

import { editClick, editInput } from 'app/actionCreators/edit';
import { searchClick, searchInput } from 'app/actionCreators/search';
import InputBox from 'app/components/InputBox';
import {
  render,
  store,
} from 'app/index';

function main() {
  render(
    <div>
      <InputBox
        name="編集"
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
