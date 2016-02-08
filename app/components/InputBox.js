/** @jsx element */

import { element } from 'deku';

function render({ props, dispatch }) {
  return (
    <section class="input-group">
      <input
        class="form-control"
        onInput={ props.onInput(dispatch, props.editable, props.index) }
        type="text"
        value={ props.editable.textContainer }
        placeholder={ props.placeholder }
      />
      <div class="input-group-btn">
        <button
          class={ `btn btn-default` }
          onClick={ props.onClick(dispatch, props.editable, props.index) }
          type="button"
        >
          <i class={ `fa fa-${props.icon} fa-fw` }></i>
          { props.name }
        </button>
      </div>
    </section>
  );
}

export default {
  render,
};
