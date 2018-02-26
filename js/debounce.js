'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 750;

  var lastTimeout;
  window.debounce = {
    debounce: function (fun) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(fun, DEBOUNCE_INTERVAL);
    }
  };
})();
