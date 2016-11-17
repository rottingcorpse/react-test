jest.dontMock('./Calculator.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Calculator = require('./Calculator.jsx').default;




describe('CalculatorComponent', () => {

  

  it('should have properly set default values', () => {
    var instance = new Calculator;     
    expect(instance.state.operand1).toEqual(1);
    expect(instance.state.operand2).toEqual(2);
    expect(instance.state.operator).toEqual('prime');
    expect(instance.state.result).toEqual(null);
  });

  it('should correctly sum operands', () => {
      var component = TestUtils.renderIntoDocument( <Calculator /> );
      var DomElement = ReactDOM.findDOMNode(component);

      var operand1 = DomElement.getElementsByTagName('input')[0];
      var operand2 = DomElement.getElementsByTagName('input')[1];
      var operator = DomElement.getElementsByTagName('select')[0];
      var submit = DomElement.getElementsByTagName('input')[2];
      var result = DomElement.getElementsByTagName('input')[3];

      TestUtils.Simulate.change(operand1, { target: { value: 333 }});
      TestUtils.Simulate.change(operand2, { target: { value: 222 }});
      TestUtils.Simulate.change(operator, { target: { value: '+' }});
      submit.dispatchEvent(new Event('click'));

      expect(operand1.value).toEqual(555);
      expect(result.value).toEqual(555);

  });

});