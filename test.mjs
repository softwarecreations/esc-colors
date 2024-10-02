'use strict';

import colors from './main.mjs';
// import colors from 'esc-colors';

console.log(colors.green('Hello world'));

Object.entries(colors).forEach( ([ colorName, colorF ]) => console.log(colorF(colorName)) );
