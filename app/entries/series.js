/** @jsx element */

import { element } from 'deku';

import { editClick, editInput } from 'app/actionCreators/edit';
import { objectToCss } from 'app/utils';

import Layout from 'app/components/Layout';
import InputBox from 'app/components/InputBox';
import SeriesList from 'app/components/SeriesList';

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
    <Layout activePath="/series" >
      <div style={ inputBoxStyle }>
        <InputBox
          placeholder="通知を受けたいシリーズを追加する"
          name="追加"
          onClick={ editClick } onInput={ editInput }
          type="edit"
          icon="plus"
        />
      </div>
      <SeriesList />
    </Layout>,
    store.getState()
  );
}

store.subscribe(main);
main();
