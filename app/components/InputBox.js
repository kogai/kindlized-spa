/** @jsx element */

import { element } from 'deku';

const propTypes = {
  type: String,
  name: String,
  action: Function,
};

const render = ({ props, dispatch, context })=> (
  <section>
    <input
      onInput={ props.onInput(dispatch) }
      type="text"
      value={ context[props.type].body }
    />
    <button
      class={ `glyphicon-${props.type}` }
      onClick={ props.onClick(dispatch) }
      type="button"
    >{ props.name }</button>
  </section>
);

export default {
  propTypes,
  render,
};
