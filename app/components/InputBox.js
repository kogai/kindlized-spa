/** @jsx element */

import { element } from 'deku';

const render = ({ props, dispatch, context })=> (
  <section class="input-group">
    <input
      class="form-control"
      onInput={ props.onInput(dispatch) }
      type="text"
      value={ context[props.type].body }
      placeholder={ props.placeholder }
    />
    <div class="input-group-btn">
      <button
        class={ `btn btn-default` }
        onClick={ props.onClick(dispatch, context[props.type].body, props.index) }
        type="button"
      >
        <i class={ `fa fa-${props.icon} fa-fw` }></i>
        { props.name }
      </button>
    </div>
  </section>
);

export default {
  render,
};
