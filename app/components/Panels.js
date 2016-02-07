/** @jsx element */

import { element } from 'deku';

import { objectToCss } from 'app/utils';
import Panel from 'app/components/Panel';

const buttonStyle = objectToCss({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '8px',
  width: '160px',
});

const titleStyle = objectToCss({
  height: '30px',
});

const pannelsStyle = objectToCss({
  boxSizing: 'border-box',
  width: '100%',
});

function render({ context }) {
  return (
    <ul class="row" style={ pannelsStyle }>
      {
        context.panels.map((m)=> <Panel
          isKindlized={ m.isKindlized }
          isRegisterd={ m.isRegisterd }
          url={ m.url }
          title={ m.title }
          imgSrc={ m.imgSrc }
          titleStyle={ titleStyle }
          buttonStyle={ buttonStyle }
        />)
      }
    </ul>
  );
}

export default {
  render,
};
