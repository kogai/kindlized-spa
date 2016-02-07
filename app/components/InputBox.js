/** @jsx element */

import { element } from 'deku';
import { objectToCss } from 'app/utils';

const propTypes = {
  type: String,
  name: String,
  action: Function,
};

const inputBoxStyle = objectToCss({
  margin: '20px 40px',
  marginBottom: '30px',
});

const render = ({ props, dispatch, context })=> (
  <section class="input-group" style={ inputBoxStyle }>
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
