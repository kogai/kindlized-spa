/** @jsx element */

import { element } from 'deku';
import { objectToCss } from 'app/utils';

const iconStyle = objectToCss({
  fontSize: '24px',
});

function render() {
  return (<i class="fa fa-spinner fa-pulse" style={ iconStyle }></i>);
}

export default {
  render,
};
