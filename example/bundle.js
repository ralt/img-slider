;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
"use strict";

var slider = require('../lib/index.js');

// Fake way to get the css location on file:///
var location = window.location.pathname.split('/');
location.pop();
location.pop();

slider('.slider', location.join('/'));

},{"../lib/index.js":2}],2:[function(require,module,exports){
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

},{"by/queryAll":3,"foreach-shim":4,"dom-create":5,"dom-append":6}],3:[function(require,module,exports){
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
},{"global/document":7}],5:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    for (var i = 0, l = arr.length; i < l; i++) {
        callback.call(context, arr[i], i, arr);
    }
};

},{}],7:[function(require,module,exports){
(function(){/*global document*/
if (typeof document !== "undefined") {
    module.exports = document
}

})()
},{}],6:[function(require,module,exports){
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

},{"foreach-shim":4}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci90ZXN0cy9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL2xpYi9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9ieS9xdWVyeUFsbC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tY3JlYXRlL2luZGV4LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2ZvcmVhY2gtc2hpbS9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9ieS9ub2RlX21vZHVsZXMvZ2xvYmFsL2RvY3VtZW50LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1hcHBlbmQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHNsaWRlciA9IHJlcXVpcmUoJy4uL2xpYi9pbmRleC5qcycpO1xuXG4vLyBGYWtlIHdheSB0byBnZXQgdGhlIGNzcyBsb2NhdGlvbiBvbiBmaWxlOi8vL1xudmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5sb2NhdGlvbi5wb3AoKTtcbmxvY2F0aW9uLnBvcCgpO1xuXG5zbGlkZXIoJy5zbGlkZXInLCBsb2NhdGlvbi5qb2luKCcvJykpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yZWFjaC1zaGltJyksXG4gICAgY3JlYXRlID0gcmVxdWlyZSgnZG9tLWNyZWF0ZScpLFxuICAgIGFwcGVuZCA9IHJlcXVpcmUoJ2RvbS1hcHBlbmQnKSxcbiAgICBxdWVyeUFsbCA9IHJlcXVpcmUoJ2J5L3F1ZXJ5QWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VsLCBiYXNlUGF0aCkge1xuICAgIGFkZFN0eWxlc2hlZXQoYmFzZVBhdGgpO1xuXG4gICAgdmFyIGVscyA9IHF1ZXJ5QWxsKHNlbCk7XG5cbiAgICBmb3JFYWNoKGVscywgYnVpbGRTbGlkZXIpO1xufTtcblxuZnVuY3Rpb24gYnVpbGRTbGlkZXIoZWwpIHtcbiAgICB2YXIgc2xpZGVzID0gcXVlcnlBbGwoZWwsICcuc2xpZGUnKTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChiYXNlUGF0aCkge1xuICAgIHZhciBocmVmID0gYmFzZVBhdGggP1xuICAgICAgICBsb2NhdGlvbi5vcmlnaW4gKyBiYXNlUGF0aCA6IGxvY2F0aW9uLm9yaWdpbjtcbiAgICBocmVmICs9ICcvYXNzZXRzL2ltZy1zbGlkZXIuY3NzJztcblxuICAgIHZhciBsaW5rID0gY3JlYXRlKCdsaW5rJywge1xuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICByZWw6ICdzdHlsZXNoZWV0J1xuICAgIH0pO1xuXG4gICAgYXBwZW5kKGRvY3VtZW50LmhlYWQsIGxpbmspO1xufVxuIiwiKGZ1bmN0aW9uKCl7dmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gYnlRdWVyeUFsbFxuXG5mdW5jdGlvbiBieVF1ZXJ5QWxsKGNvbnRleHQsIHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHF1ZXJ5ID0gY29udGV4dFxuICAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKVxufVxuXG59KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSwgYXR0cikge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIGVsW3Byb3BdID0gYXR0cltwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgYXJyW2ldLCBpLCBhcnIpO1xuICAgIH1cbn07XG4iLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCBkb2N1bWVudCovXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudFxufVxuXG59KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yZWFjaC1zaGltJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZCkge1xuICAgIGlmIChjaGlsZC5sZW5ndGgpIHtcbiAgICAgICAgZm9yRWFjaChjaGlsZCwgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgYXBwZW5kKHBhcmVudCwgYyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBjaGlsZCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG4iXX0=
;