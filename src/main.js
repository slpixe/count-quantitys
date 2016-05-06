import Point from './Point.js';
//import _ from 'lodash';
var math = require('lodash/math');

var body = document.querySelector('body');
//body.textContent = 'Good point: ' + new Point(1, 23);
// body.textContent = 'Good point: ' + _.add(1, 23);
body.textContent = 'Good point: ' + math.add(1, 23);