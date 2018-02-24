// файл size.js
'use strict';

(function () {

  window.galleryOverlay = document.querySelector('.gallery-overlay');
  window.galleryOverlayUl = window.galleryOverlay.querySelector('ul');
  window.sliderSlides = window.galleryOverlay.querySelector('.slider-slides');

  window.sizeWindow = {
    getWindowSize: function () {
      getWindowSize();
    }
  };

  function getWindowSize() {
    var naturalWidth;
    var childrenSlides = window.sliderSlides.children;
    var childrenUl = window.galleryOverlayUl.children;
    var widthWindow = +getComputedStyle(window.galleryOverlay).width.replace('px', '');
    var timer = setInterval(function () {
      if (window.sliderSlides.lastElementChild.firstElementChild.naturalWidth) {
        for (var i = 0; i < childrenSlides.length; i++) {
          naturalWidth = childrenSlides[i].firstElementChild.naturalWidth;
          if (widthWindow < naturalWidth) {
            childrenUl[i].firstElementChild.style.width = widthWindow + 'px';
          }
          if (widthWindow >= naturalWidth) {
            childrenUl[i].firstElementChild.style.width = naturalWidth + 'px';
          }
        }
        clearInterval(timer);
      }
    }, 500);
  }

})();
