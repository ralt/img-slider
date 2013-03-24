;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
"use strict";

var slider = require('../lib/index.js');

// Fake way to get the css location on file:///
var location = window.location.pathname.split('/');
location.pop();
location.pop();

slider('.slider', location.join('/'));

},{"../lib/index.js":2}],3:[function(require,module,exports){
(function(){var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byQueryAll

function byQueryAll(context, query) {
    if (typeof context === "string") {
        query = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.querySelectorAll(query))
}

})()
},{"global/document":4}],2:[function(require,module,exports){
"use strict";

var forEach = require('foreach-shim'),
    create = require('dom-create'),
    append = require('dom-append'),
    queryAll = require('by/queryAll');

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

},{"by/queryAll":3,"foreach-shim":5,"dom-create":6,"dom-append":7}],5:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    for (var i = 0, l = arr.length; i < l; i++) {
        callback.call(context, arr[i], i, arr);
    }
};

},{}],4:[function(require,module,exports){
(function(){/*global document*/
if (typeof document !== "undefined") {
    module.exports = document
}

})()
},{}],6:[function(require,module,exports){
"use strict";

module.exports = function(name, attr) {
    var el = document.createElement(name);

    for (var prop in attr) {
        if (attr.hasOwnProperty(prop)) {
            el[prop] = attr[prop];
        }
    }

    return el;
};

},{}],7:[function(require,module,exports){
"use strict";

var forEach = require('foreach-shim');

module.exports = function(parent, child) {
    if (child.length) {
        forEach(child, function(c) {
            append(parent, c);
        });
    }
    else {
        parent.appendChild(child);
    }
};

function append(parent, child) {
    parent.appendChild(child);
}

},{"foreach-shim":5}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci90ZXN0cy9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9ieS9xdWVyeUFsbC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL2xpYi9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9mb3JlYWNoLXNoaW0vaW5kZXguanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvYnkvbm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tY3JlYXRlL2luZGV4LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1hcHBlbmQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHNsaWRlciA9IHJlcXVpcmUoJy4uL2xpYi9pbmRleC5qcycpO1xuXG4vLyBGYWtlIHdheSB0byBnZXQgdGhlIGNzcyBsb2NhdGlvbiBvbiBmaWxlOi8vL1xudmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5sb2NhdGlvbi5wb3AoKTtcbmxvY2F0aW9uLnBvcCgpO1xuXG5zbGlkZXIoJy5zbGlkZXInLCBsb2NhdGlvbi5qb2luKCcvJykpO1xuIiwiKGZ1bmN0aW9uKCl7dmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gYnlRdWVyeUFsbFxuXG5mdW5jdGlvbiBieVF1ZXJ5QWxsKGNvbnRleHQsIHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHF1ZXJ5ID0gY29udGV4dFxuICAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKVxufVxuXG59KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yZWFjaC1zaGltJyksXG4gICAgY3JlYXRlID0gcmVxdWlyZSgnZG9tLWNyZWF0ZScpLFxuICAgIGFwcGVuZCA9IHJlcXVpcmUoJ2RvbS1hcHBlbmQnKSxcbiAgICBxdWVyeUFsbCA9IHJlcXVpcmUoJ2J5L3F1ZXJ5QWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VsLCBiYXNlUGF0aCkge1xuICAgIGFkZFN0eWxlc2hlZXQoYmFzZVBhdGgpO1xuXG4gICAgdmFyIGVscyA9IHF1ZXJ5QWxsKHNlbCk7XG5cbiAgICBmb3JFYWNoKGVscywgYnVpbGRTbGlkZXIpO1xufTtcblxuZnVuY3Rpb24gYnVpbGRTbGlkZXIoZWwpIHtcbiAgICB2YXIgc2xpZGVzID0gcXVlcnlBbGwoZWwsICcuc2xpZGUnKTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChiYXNlUGF0aCkge1xuICAgIHZhciBocmVmID0gYmFzZVBhdGggP1xuICAgICAgICBsb2NhdGlvbi5vcmlnaW4gKyBiYXNlUGF0aCA6IGxvY2F0aW9uLm9yaWdpbjtcbiAgICBocmVmICs9ICcvYXNzZXRzL2ltZy1zbGlkZXIuY3NzJztcblxuICAgIHZhciBsaW5rID0gY3JlYXRlKCdsaW5rJywge1xuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICByZWw6ICdzdHlsZXNoZWV0J1xuICAgIH0pO1xuXG4gICAgYXBwZW5kKGRvY3VtZW50LmhlYWQsIGxpbmspO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKTtcbiAgICB9XG59O1xuIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgZG9jdW1lbnQqL1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnRcbn1cblxufSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUsIGF0dHIpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBlbFtwcm9wXSA9IGF0dHJbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yZWFjaC1zaGltJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZCkge1xuICAgIGlmIChjaGlsZC5sZW5ndGgpIHtcbiAgICAgICAgZm9yRWFjaChjaGlsZCwgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgYXBwZW5kKHBhcmVudCwgYyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBjaGlsZCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG4iXX0=
;