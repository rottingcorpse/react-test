'use strict';

require('styles/main.css');

import React from 'react';
import { render } from 'react-dom';

import Calculator from 'components/Calculator/Calculator';

render(
    <Calculator />,
    document.getElementById('js-main')
);