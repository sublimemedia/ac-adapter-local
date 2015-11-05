(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'bluebird'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('bluebird'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.Promise);
    global.acAdapterLocal = mod.exports;
  }
})(this, function (exports, module, _bluebird) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Promise = _interopRequireDefault(_bluebird);

  module.exports = function (settings, debug) {
    'use strict';

    var store = {};

    function find() {
      return true;
    }

    function initialize() {
      return _Promise['default'].resolve();
    }

    function get(elem) {
      return _Promise['default'].resolve(store[elem]);
    }

    function set(elem, val) {
      store[elem] = val;
      return _Promise['default'].resolve();
    }

    var exit = initialize,
        sync = initialize;

    return {
      find: find,
      initialize: initialize,
      get: get,
      set: set,
      exit: exit,
      sync: sync
    };
  };

  ;
});