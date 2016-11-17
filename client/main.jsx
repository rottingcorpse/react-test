'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import reactComponentEvent from 'react-component-event';

import Calculator from 'components/Calculator/Calculator';




render(
    <Calculator />,
    document.getElementById('js-main')
);