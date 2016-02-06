/** @jsx element */

import { element } from 'deku';

const propTypes = {
  iconType: String,
  name: String,
};

const render = ({ props })=> (
  <section>
    <input type="text" />
    <button
      class={ `glyphicon-${props.iconType}` }
      // onClick={ myAction(dispatch) }
      type="button"
    >{ props.name }</button>
  </section>
);

export {
  propTypes,
  render,
};
