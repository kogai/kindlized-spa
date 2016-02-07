/** @jsx element */

import { element } from 'deku';

const render = ({ props })=> (
  <li class={ props.isActive ? 'active' : null }>
    <a href={ props.link }>{ props.name }</a>
  </li>
);

export default {
  render,
};
