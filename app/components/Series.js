/** @jsx element */

import { element } from 'deku';

import { editClick, editInput } from 'app/actionCreators/edit';
import { objectToCss } from 'app/utils';

import InputBox from 'app/components/InputBox';

const listStyle = objectToCss({
  display: 'flex',
  alignItems: 'center',
});

const buttonsStyle = objectToCss({
  flex: 2,
  textAlign: 'right',
});

const buttonStyle = objectToCss({
  marginLeft: '6px',
  fontSize: '14px',
});

function render({ props }) {
  return (
    <li class="list-group-item">
      {
        props.isEditing ?
        <InputBox
          placeholder={ props.name }
          name="編集"
          onClick={ editClick } onInput={ editInput }
          type="edit"
          icon="edit"
        /> :
        <div style={ listStyle }>
          { props.name }
          <div style={ buttonsStyle }>
            <button style={ buttonStyle } class="btn btn-default btn-sm">
              <i class="fa fa-edit fa-fw"></i>編集
            </button>
            <button style={ buttonStyle } class="btn btn-default btn-sm">
              <i class="fa fa-minus fa-fw"></i>削除
            </button>
          </div>
        </div>
      }
    </li>
  );
}

export default {
  render,
};
