/** @jsx element */

import assert from 'power-assert';
import { element } from 'deku';

import renderIntoDocument from 'test/helpers/renderIntoDocument';
import * as InputBox from 'app/components/InputBox';

describe.only('Components: InputBox', ()=> {
  const iconTypeMock = 'iconTypeMock';
  const nameMock = 'nameMock';
  let node, button;
  beforeEach(()=> {
    node = renderIntoDocument(<InputBox iconType={ iconTypeMock } name={ nameMock } />);
    button = node.querySelector('button');
  });

  it('Should render name prop', ()=> {
    assert(button.innerHTML === nameMock);
    assert(button.className === `glyphicon-${iconTypeMock}`);
  });

  it('Should recieve onClick Function', ()=> {});
});
