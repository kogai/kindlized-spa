/** @jsx element */

import { element } from 'deku';

function render({ props }) {
  return (
    <li style={ props.style }>
      <a href={ props.link } class={ `btn btn-${props.class}` }>
        { props.name }
      </a>
    </li>
  );
}

export default {
  render,
};
