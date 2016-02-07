/** @jsx element */

import { element } from 'deku';

import { editClick, editInput } from 'app/actionCreators/edit';
import { objectToCss } from 'app/utils';

import Layout from 'app/components/Layout';
import InputBox from 'app/components/InputBox';
import Account from 'app/components/Account';

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
    <Layout activePath="/account" >
      <div style={ inputBoxStyle }>
        <Account />
        <InputBox
          placeholder="通知用のメールアドレスを変更する"
          name="変更"
          onClick={ editClick } onInput={ editInput }
          type="edit"
          icon="edit"
        />
      </div>
    </Layout>,
    store.getState()
  );
}

store.subscribe(main);
main();
