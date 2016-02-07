/** @jsx element */

import { element } from 'deku';

import { objectToCss } from 'app/utils';
import Panel from 'app/components/Panel';

const pannelStyle = objectToCss({
  textAlign: 'center',
});

const buttonStyle = objectToCss({
  display: 'block',
  margin: '8px auto',
  width: '140px',
});

const titleStyle = objectToCss({
  height: '30px',
});

const pannelsStyle = objectToCss({
  boxSizing: 'border-box',
  width: '100%',
});

const imgStyle = objectToCss({
  display: 'block',
  height: '160px',
});

function render({ context }) {
  return (
    <ul class="row" style={ pannelsStyle }>
      {
        context.panels.map((m)=> <Panel
          isKindlized={ m.isKindlized }
          isRegisterd={ m.isRegisterd }
          isLoading={ m.isLoading }
          url={ m.url }
          title={ m.title }
          imgSrc={ m.imgSrc }
          titleStyle={ titleStyle }
          pannelStyle={ pannelStyle }
          buttonStyle={ buttonStyle }
          imgStyle={ imgStyle }
        />)
      }
    </ul>
  );
}

export default {
  render,
};
