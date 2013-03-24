"use strict";

var slider = require('../lib/index.js');

// Fake way to get the css location on file:///
var location = window.location.pathname.split('/');
location.pop();
location.pop();

slider('.slider', location.join('/'));
