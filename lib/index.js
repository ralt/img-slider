"use strict";

var forEach = require('foreach-shim'),
    queryAll = require('by/queryAll');

module.exports = function(sel) {
    var els = queryAll(sel);

    forEach(els, buildSlider);
};

function buildSlider(el) {
}
