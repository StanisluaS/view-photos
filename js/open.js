'use strict';

(function () {

  var main = document.querySelector('.main');
  var galleryOverlayClose = window.galleryOverlay.querySelector('.gallery-overlay-close');
  window.galleryPreview = window.galleryOverlay.querySelector('.gallery-overlay-preview');
  window.sliderInner = document.querySelector('.slider-inner');

  main.addEventListener('click', openGalleryOverlay);

  function openGalleryOverlay(evt) {
    var target = evt.target;
    if (target.tagName === 'IMG') {
      var index = target.getAttribute('data-index-number');
      window.galleryOverlay.classList.remove('hidden');
      window.preview.printFotoInGallery(window.ARRAY, index, window.galleryOverlayUl, window.sliderSlides);
      main.removeEventListener('click', openGalleryOverlay);
      galleryOverlayClose.addEventListener('click', openMain);
      window.galleryPreview.addEventListener('click', window.list.listPages);
      window.sliderInner.addEventListener('click', window.listSlider.listSlider);
      window.addEventListener('resize', window.listSlider.resize);
      window.sizeWindow.getWindowSize();
    } else {
      return;
    }

    function openMain() {
      window.preview.removeFotoInGallery(window.galleryOverlayUl, window.sliderSlides);
      window.galleryOverlay.classList.add('hidden');
      main.addEventListener('click', openGalleryOverlay);
      galleryOverlayClose.removeEventListener('click', openMain);
      window.galleryPreview.removeEventListener('click', window.list.listPages);
      window.sliderInner.removeEventListener('click', window.listSlider.listSlider);
      window.removeEventListener('resize', window.listSlider.resize);
    }
  }
})();
