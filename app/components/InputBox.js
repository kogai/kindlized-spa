/** @jsx element */

import { element } from 'deku';

const propTypes = {
  type: String,
  name: String,
  action: Function,
};

const render = ({ props, dispatch, context })=> (
  <section class="input-group">
    <input
      class="form-control"
      onInput={ props.onInput(dispatch) }
      type="text"
      value={ context[props.type].body }
    />
    <div class="input-group-btn">
      <button
        class={ `btn btn-default` }
        onClick={ props.onClick(dispatch) }
        type="button"
      >
        <i class={ `fa fa-${props.type} fa-fw` }></i>
        { props.name }
      </button>
    </div>
  </section>
);

export default {
  propTypes,
  render,
};
