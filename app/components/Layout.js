/** @jsx element */

import { element } from 'deku';

import { objectToCss } from 'app/utils';
import Header from 'app/components/Header';
import Menus from 'app/components/Menus';

const containerStyle = objectToCss({
  display: 'flex',
});

const navStyle = objectToCss({
  width: '15%',
});

const articleStyle = objectToCss({
  width: '85%',
});

function render({ children }) {
  return (
    <div>
      <Header />
      <section style={ containerStyle }>
        <nav style={ navStyle }>
          <Menus activePath="/" />
        </nav>
        <article style={ articleStyle }>
          { children }
        </article>
      </section>
    </div>
  );
}

export default {
  render,
};
