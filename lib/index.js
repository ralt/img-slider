"use strict";

var essentials = require('dom-essentials'),
    forEach = essentials.iter.forEach,
    create = essentials.manip.create,
    append = essentials.manip.append,
    queryAll = essentials.by.queryAll;

module.exports = function(sel, basePath) {
    addStylesheet(basePath);

    var els = queryAll(sel);

    forEach(els, buildSlider);
};

function buildSlider(el) {
    var slides = queryAll(el, '.slide');
}

function addStylesheet(basePath) {
    var href = basePath ?
        location.origin + basePath : location.origin;
    href += '/assets/img-slider.css';

    var link = create('link', {
        href: href,
        rel: 'stylesheet'
    });

    append(document.head, link);
}
