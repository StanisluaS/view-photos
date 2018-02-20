'use strict';

(function () {

  var galleryOverlayPreview = document.querySelector('.gallery-overlay-preview');
  var galleryOverlayUl = galleryOverlayPreview.querySelector('ul');
  var children = galleryOverlayUl.children;
  var number = 1;
  var LENGTH = 600;
  var SPEED_DISPLACEMENT = 1.5;


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
      removeElement(presentElement, target);
      number--;
      if (number === 0) {
        number = children.length;
      }
      addElement(presentElement, target);
    }
    if (target.getAttribute('data-title') === 'next') {
      if (number === children.length) {
        removeElement(presentElement, target);
        number = 1;
        addElement(presentElement, target);
      } else {
        removeElement(presentElement, target);
        number++;
        if (number === children.length) {
          number = 1;
        }
        addElement(presentElement, target);
      }
    } else {
      return;
    }
  }

  function removeElement(element, target) {
    // debugger;
    element = document.querySelector('.elt_' + number);
    element.style = 'display: block;';
    setHeight(element);
    element.style = 'position:absolute; left: 0;';
    listElement(element, LENGTH, target);
  }

  function addElement(element, target) {
    element = document.querySelector('.elt_' + number);
    element.style = 'display: block;';
    setHeight(element);
    element.style = 'position:absolute; left: -600px';
    listElementXXX(element, target);
  }

  function setHeight(element) {
    var childrenImg;
    var imgHeight;
    childrenImg = element.querySelector('img');
    imgHeight = getComputedStyle(childrenImg).height;
    galleryOverlayPreview.style.height = imgHeight;
  }

  function listElement(element, length, target) {
    var start = Date.now();
    var timer;
    if (target.getAttribute('data-title') === 'next') {
      timer = setInterval(function () {
        var timePassed = Date.now() - start;
        if (draw(timePassed) >= length) {
          clearInterval(timer);
          element.style.cssText = 'display: none; opacity: 0; z-index: 1;';
          return;
        }
        draw(timePassed);
        element.style.left = '-' + draw(timePassed) + 'px';
      }, 20);
    } else {
      // debugger;
      timer = setInterval(function () {
        var timePassed = Date.now() - start;
        if (draw(timePassed) >= length) {
          clearInterval(timer);
          element.style.cssText = 'display: none; opacity: 0; z-index: 1;';
          return;
        }
        draw(timePassed);
        element.style.left = draw(timePassed) + 'px';
      }, 20);
    }
  }

  function listElementXXX(element, target) {
    var start = Date.now();
    var timer;
    if (target.getAttribute('data-title') === 'next') {
      timer = setInterval(function () {
        var timePassed = Date.now() - start;
        if (draw(timePassed) >= 600) {
          clearInterval(timer);
          element.style.cssText = 'display: block; opacity: 1; z-index: 2;';
          return;
        }
        draw(timePassed);
        element.style.left = (600 - draw(timePassed)) + 'px';
      }, 20);
    } else {
            // debugger;
      timer = setInterval(function () {
        var timePassed = Date.now() - start;
        if (draw(timePassed) >= 600) {
          clearInterval(timer);
          element.style.cssText = 'display: block; opacity: 1; z-index: 2;';
          return;
        }
        draw(timePassed);
        element.style.left = (-600 + draw(timePassed)) + 'px';
      }, 20);
    }
  }

  function draw(timePassed) {
    var elementLeft = timePassed / SPEED_DISPLACEMENT;
    return elementLeft;
  }
})();
