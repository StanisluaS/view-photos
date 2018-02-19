'use strict';

(function () {

  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayUl = galleryOverlay.querySelector('ul');
  var children = galleryOverlayUl.children;
  var number = 1;

  window.list = {
    listPages: function (evt) {
      window.debounce.debounce(function () {
        listPages(evt);
      });
    },

    removeNumber: function () {
      number = 1;
    }
  };

  function listPages(evt) {
    // debugger;
    var presentElement;
    var target = evt.target;
    if (target.getAttribute('data-title') === 'prev') {
      presentElement = document.querySelector('.elt_' + number);
      presentElement.style.cssText = 'display: none; opacity: 0; z-index: 1;';
      number--;
      if (number === 0) {
        number = children.length;
      }
      presentElement = document.querySelector('.elt_' + number);
      presentElement.style.cssText = 'display: block; opacity: 1; z-index: 2;';
    }
    if (target.getAttribute('data-title') === 'next') {
      if (number === children.length) {
        presentElement = document.querySelector('.elt_' + number);
        presentElement.style.cssText = 'display: none; opacity: 0; z-index: 1;';
        number = 1;
        presentElement = document.querySelector('.elt_' + number);
        presentElement.style.cssText = 'display: block; opacity: 1; z-index: 2;';
      } else {
        presentElement = document.querySelector('.elt_' + number);
        presentElement.style.cssText = 'display: none; opacity: 0; z-index: 1;';
        number++;
        if (number === children.length) {
          number = 1;
        }
        presentElement = document.querySelector('.elt_' + number);
        presentElement.style.cssText = 'display: block; opacity: 1; z-index: 2;';
      }
    } else {
      return;
    }
  }

})();
