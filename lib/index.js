"use strict";

var toArray = Array.prototype.slice.call,
    forEach = require('foreach-shim'),
    queryAll = require('by/queryAll');

module.exports = function(sel) {
    var els = toArray(queryAll(sel));

    forEach(els, buildSlider);
};

function buildSlider(el) {
}
