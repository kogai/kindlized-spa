/** @jsx element */

import { element } from 'deku';

import Series from 'app/components/Series';

function render({ context }) {
  return (
    <div>
      <h3>通知登録済のシリーズ一覧</h3>
      <ul class="list-group">
        { context.series
          .map((s)=> <Series
            name={ s.name }
            isEditing={ s.isEditing }
          />)}
      </ul>
    </div>
  );
}

export default {
  render,
};
