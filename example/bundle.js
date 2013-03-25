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

},{"dom-essentials":3}],3:[function(require,module,exports){
"use strict";

module.exports = {
    iter: require('./iter'),
    manip: require('./manip'),
    by: require('./by')
};

},{"./iter":4,"./manip":5,"./by":6}],4:[function(require,module,exports){
"use strict";

module.exports = require('iter-shims');

},{"iter-shims":7}],5:[function(require,module,exports){
"use strict";

module.exports = require('dom-manipulations');

},{"dom-manipulations":8}],6:[function(require,module,exports){
"use strict";

module.exports = require('by');

},{"by":9}],7:[function(require,module,exports){
"use strict";

module.exports = {
    forEach: require('./forEach'),
    map: require('./map'),
    filter: require('./filter'),
    every: require('./every'),
    some: require('./some'),
    find: require('./find'),
    findIndex: require('./findIndex')
};

},{"./forEach":10,"./map":11,"./filter":12,"./every":13,"./some":14,"./find":15,"./findIndex":16}],8:[function(require,module,exports){
"use strict";

module.exports = {
    create: require('./create'),
    append: require('./append')
};

},{"./create":17,"./append":18}],9:[function(require,module,exports){
module.exports = {
    "class": require("./class")
    , id: require("./id")
    , tag: require("./tag")
    , name: require("./name")
    , query: require("./query")
    , queryAll: require("./queryAll")
}

},{"./class":19,"./id":20,"./tag":21,"./name":22,"./query":23,"./queryAll":24}],10:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.forEach) {
        Array.prototype.forEach.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            callback.call(context, arr[i], i, arr);
        }
    }
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.map) {
        return Array.prototype.map.call(arr, callback, context);
    }
    else {
        var ret = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            ret.push(callback.call(context, arr[i], i, arr));
        }

        return ret;
    }
}

},{}],12:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.filter) {
        return Array.prototype.filter.call(arr, callback, context);
    }
    else {
        var ret = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr)) {
                ret.push(arr[i]);
            }
        }

        return ret;
    }
};

},{}],13:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.every) {
        return Array.prototype.every.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === false) {
                return false;
            }
        }

        return true;
    }
};

},{}],14:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.some) {
        return Array.prototype.some.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return true;
            }
        }

        return false;
    }
};

},{}],15:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.find) {
        return Array.prototype.find.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return arr[i];
            }
        }
    }
};

},{}],16:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.find) {
        return Array.prototype.find.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return i;
            }
        }
    }
};

},{}],17:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
module.exports = byId

function byId(id) {
    return document.getElementById(id)
}

},{}],19:[function(require,module,exports){
(function(){var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byClass

function byClass(context, selector) {
    if (typeof context === "string") {
        selector = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.getElementsByClassName(selector))
}

})()
},{"global/document":25}],21:[function(require,module,exports){
(function(){var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byTag

function byTag(context, tag) {
    if (typeof context === "string") {
        tag = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.getElementsByTagName(tag))
}

})()
},{"global/document":25}],22:[function(require,module,exports){
(function(){var slice = Array.prototype.slice
var document = require("global/document")

module.exports = byName

function byName(name) {
    return slice.call(document.getElementsByName(name))
}

})()
},{"global/document":25}],23:[function(require,module,exports){
(function(){var document = require("global/document")

module.exports = byQuery

function byQuery(context, query) {
    if (typeof context === "string") {
        query = context
        context = null
    }

    if (!context) {
        context = document
    }

    return context.querySelector(query)
}

})()
},{"global/document":25}],24:[function(require,module,exports){
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
},{"global/document":25}],25:[function(require,module,exports){
(function(){/*global document*/
if (typeof document !== "undefined") {
    module.exports = document
}

})()
},{}],18:[function(require,module,exports){
"use strict";

var forEach = require('iter-shims/forEach');

module.exports = function(parent, child) {
    if (child.length) {
        appendMultiple(parent, child);
    }
    else {
        parent.appendChild(child);
    }
};

function appendMultiple(parent, children) {
    var frag = document.createDocumentFragment();

    forEach(children, function(child) {
        frag.appendChild(child);
    });

    parent.appendChild(frag);
}

},{"iter-shims/forEach":10}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci90ZXN0cy9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL2xpYi9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9pdGVyLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL21hbmlwLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL2J5LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9pdGVyLXNoaW1zL2luZGV4LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9kb20tbWFuaXB1bGF0aW9ucy9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvYnkvaW5kZXguanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2l0ZXItc2hpbXMvZm9yRWFjaC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvaXRlci1zaGltcy9tYXAuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2l0ZXItc2hpbXMvZmlsdGVyLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9pdGVyLXNoaW1zL2V2ZXJ5LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9pdGVyLXNoaW1zL3NvbWUuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2l0ZXItc2hpbXMvZmluZC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvaXRlci1zaGltcy9maW5kSW5kZXguanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2RvbS1tYW5pcHVsYXRpb25zL2NyZWF0ZS5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvYnkvaWQuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2J5L2NsYXNzLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9ieS90YWcuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2J5L25hbWUuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvaW1nLXNsaWRlci9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2J5L3F1ZXJ5LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2ltZy1zbGlkZXIvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9ieS9xdWVyeUFsbC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvYnkvbm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9pbWctc2xpZGVyL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvZG9tLW1hbmlwdWxhdGlvbnMvYXBwZW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHNsaWRlciA9IHJlcXVpcmUoJy4uL2xpYi9pbmRleC5qcycpO1xuXG4vLyBGYWtlIHdheSB0byBnZXQgdGhlIGNzcyBsb2NhdGlvbiBvbiBmaWxlOi8vL1xudmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5sb2NhdGlvbi5wb3AoKTtcbmxvY2F0aW9uLnBvcCgpO1xuXG5zbGlkZXIoJy5zbGlkZXInLCBsb2NhdGlvbi5qb2luKCcvJykpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlc3NlbnRpYWxzID0gcmVxdWlyZSgnZG9tLWVzc2VudGlhbHMnKSxcbiAgICBmb3JFYWNoID0gZXNzZW50aWFscy5pdGVyLmZvckVhY2gsXG4gICAgY3JlYXRlID0gZXNzZW50aWFscy5tYW5pcC5jcmVhdGUsXG4gICAgYXBwZW5kID0gZXNzZW50aWFscy5tYW5pcC5hcHBlbmQsXG4gICAgcXVlcnlBbGwgPSBlc3NlbnRpYWxzLmJ5LnF1ZXJ5QWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlbCwgYmFzZVBhdGgpIHtcbiAgICBhZGRTdHlsZXNoZWV0KGJhc2VQYXRoKTtcblxuICAgIHZhciBlbHMgPSBxdWVyeUFsbChzZWwpO1xuXG4gICAgZm9yRWFjaChlbHMsIGJ1aWxkU2xpZGVyKTtcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU2xpZGVyKGVsKSB7XG4gICAgdmFyIHNsaWRlcyA9IHF1ZXJ5QWxsKGVsLCAnLnNsaWRlJyk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoYmFzZVBhdGgpIHtcbiAgICB2YXIgaHJlZiA9IGJhc2VQYXRoID9cbiAgICAgICAgbG9jYXRpb24ub3JpZ2luICsgYmFzZVBhdGggOiBsb2NhdGlvbi5vcmlnaW47XG4gICAgaHJlZiArPSAnL2Fzc2V0cy9pbWctc2xpZGVyLmNzcyc7XG5cbiAgICB2YXIgbGluayA9IGNyZWF0ZSgnbGluaycsIHtcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVsOiAnc3R5bGVzaGVldCdcbiAgICB9KTtcblxuICAgIGFwcGVuZChkb2N1bWVudC5oZWFkLCBsaW5rKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpdGVyOiByZXF1aXJlKCcuL2l0ZXInKSxcbiAgICBtYW5pcDogcmVxdWlyZSgnLi9tYW5pcCcpLFxuICAgIGJ5OiByZXF1aXJlKCcuL2J5Jylcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpdGVyLXNoaW1zJyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdkb20tbWFuaXB1bGF0aW9ucycpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnknKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JFYWNoOiByZXF1aXJlKCcuL2ZvckVhY2gnKSxcbiAgICBtYXA6IHJlcXVpcmUoJy4vbWFwJyksXG4gICAgZmlsdGVyOiByZXF1aXJlKCcuL2ZpbHRlcicpLFxuICAgIGV2ZXJ5OiByZXF1aXJlKCcuL2V2ZXJ5JyksXG4gICAgc29tZTogcmVxdWlyZSgnLi9zb21lJyksXG4gICAgZmluZDogcmVxdWlyZSgnLi9maW5kJyksXG4gICAgZmluZEluZGV4OiByZXF1aXJlKCcuL2ZpbmRJbmRleCcpXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKSxcbiAgICBhcHBlbmQ6IHJlcXVpcmUoJy4vYXBwZW5kJylcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcImNsYXNzXCI6IHJlcXVpcmUoXCIuL2NsYXNzXCIpXG4gICAgLCBpZDogcmVxdWlyZShcIi4vaWRcIilcbiAgICAsIHRhZzogcmVxdWlyZShcIi4vdGFnXCIpXG4gICAgLCBuYW1lOiByZXF1aXJlKFwiLi9uYW1lXCIpXG4gICAgLCBxdWVyeTogcmVxdWlyZShcIi4vcXVlcnlcIilcbiAgICAsIHF1ZXJ5QWxsOiByZXF1aXJlKFwiLi9xdWVyeUFsbFwiKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhcnIsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGNhbGxiYWNrLmNhbGwoY29udGV4dCwgYXJyW2ldLCBpLCBhcnIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoYXJyLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0LCBhcnJbaV0sIGksIGFycikpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuZXZlcnkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0LCBhcnJbaV0sIGksIGFycikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0LCBhcnJbaV0sIGksIGFycikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoYXJyLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUsIGF0dHIpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBlbFtwcm9wXSA9IGF0dHJbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBieUlkXG5cbmZ1bmN0aW9uIGJ5SWQoaWQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG59XG4iLCIoZnVuY3Rpb24oKXt2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSBieUNsYXNzXG5cbmZ1bmN0aW9uIGJ5Q2xhc3MoY29udGV4dCwgc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBjb250ZXh0XG4gICAgICAgIGNvbnRleHQgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBkb2N1bWVudFxuICAgIH1cblxuICAgIHJldHVybiBzbGljZS5jYWxsKGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3RvcikpXG59XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXt2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSBieVRhZ1xuXG5mdW5jdGlvbiBieVRhZyhjb250ZXh0LCB0YWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGFnID0gY29udGV4dFxuICAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2UuY2FsbChjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZykpXG59XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXt2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoXCJnbG9iYWwvZG9jdW1lbnRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBieU5hbWVcblxuZnVuY3Rpb24gYnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShuYW1lKSlcbn1cblxufSkoKSIsIihmdW5jdGlvbigpe3ZhciBkb2N1bWVudCA9IHJlcXVpcmUoXCJnbG9iYWwvZG9jdW1lbnRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBieVF1ZXJ5XG5cbmZ1bmN0aW9uIGJ5UXVlcnkoY29udGV4dCwgcXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcXVlcnkgPSBjb250ZXh0XG4gICAgICAgIGNvbnRleHQgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBkb2N1bWVudFxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXt2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSBieVF1ZXJ5QWxsXG5cbmZ1bmN0aW9uIGJ5UXVlcnlBbGwoY29udGV4dCwgcXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcXVlcnkgPSBjb250ZXh0XG4gICAgICAgIGNvbnRleHQgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBkb2N1bWVudFxuICAgIH1cblxuICAgIHJldHVybiBzbGljZS5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpXG59XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvKmdsb2JhbCBkb2N1bWVudCovXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudFxufVxuXG59KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnaXRlci1zaGltcy9mb3JFYWNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZCkge1xuICAgIGlmIChjaGlsZC5sZW5ndGgpIHtcbiAgICAgICAgYXBwZW5kTXVsdGlwbGUocGFyZW50LCBjaGlsZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFwcGVuZE11bHRpcGxlKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWcpO1xufVxuIl19
;