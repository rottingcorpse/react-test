jest.dontMock('./Calculator.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Calculator = require('./Calculator.jsx').default;
var History = require('../History/History.jsx').default;

describe('CalculatorComponent', () => {

    it('should have properly set default values', () => {
        var instance = new Calculator;
        expect(instance.state.operand1).toEqual(1);
        expect(instance.state.operand2).toEqual(2);
        expect(instance.state.operator).toEqual('prime');
        expect(instance.state.result).toEqual(null);
    });

});