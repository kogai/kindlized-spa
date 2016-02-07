/** @jsx element */

import { element } from 'deku';

function render({ context }) {
  return (
    <h4>{ `通知先メールアドレス: ${context.account.mailAddress}` }</h4>
  );
}

export default {
  render,
};
