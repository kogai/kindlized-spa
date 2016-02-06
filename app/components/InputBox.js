/** @jsx element */

import { element } from 'deku';

const propTypes = {
  iconType: String,
  name: String,
  action: Function,
};

export function onInput(ev) {
  console.log('inpute value:', ev.target.value);
}

const render = ({ props, dispatch })=> (
  <section>
    <input
      onInput={ props.onInput }
      type="text"
    />
    <button
      class={ `glyphicon-${props.iconType}` }
      onClick={ props.onClick(dispatch) }
      type="button"
    >{ props.name }</button>
  </section>
);

export default {
  propTypes,
  render,
};
