import Promise from 'bluebird';

export default function(settings, debug) {
  'use strict';

  let store = {};

  function find(){
    return true;
  }

  function initialize() {
    return Promise.resolve();
  }

  function get(elem) {
    return Promise.resolve(store[elem]);
  }

  function set(elem, val) {
    store[elem] = val;
    return Promise.resolve();
  }

  const
    exit = initialize,
    sync = initialize;

  return {
    find: find,
    initialize: initialize,
    get: get,
    set: set,
    exit: exit,
    sync: sync
  }
};