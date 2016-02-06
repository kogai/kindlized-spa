/** @jsx element */

import assert from 'power-assert';
import sinon from 'sinon';
import { element } from 'deku';

import { renderIntoDocument, createFakeEvent } from 'test/helpers/simulateDOM';
import InputBox, { onInput } from 'app/components/InputBox';
import myAction from 'app/actionCreators/myAction';

describe('Components: InputBox', ()=> {
  const iconTypeMock = 'iconTypeMock';
  const nameMock = 'nameMock';
  let node, button, input, clickSpy, onInputSpy;
  beforeEach(()=> {
    clickSpy = sinon.spy(myAction);
    onInputSpy = sinon.spy(onInput);
    node = renderIntoDocument(
      <InputBox
        iconType={ iconTypeMock } name={ nameMock }
        onClick={ clickSpy } onInput={ onInputSpy }
      />
    );

    input = node.querySelector('input');
    button = node.querySelector('button');
  });

  it('Should render name prop', ()=> {
    assert(button.innerHTML === nameMock);
    assert(button.className === `glyphicon-${iconTypeMock}`);
  });

  it.only('Can fire Action with onClick', ()=> {
    button.click();
    assert(clickSpy.called);
  });

  it('Can Input text', ()=> {
    const text = 'abcdef';
    const inputEvent = createFakeEvent('input', input, text);
    input.dispatchEvent(inputEvent);
    assert(onInputSpy.called);
  });
  /*
  it.only('Should text inputed pass to onClick', ()=> {});
  it.only('Should text inputed is delete when onClick called', ()=> {});
  */
});
