'use strict';

(function () {

  var main = document.querySelector('.main');
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var sliderSlides = galleryOverlay.querySelector('.slider-slides');
  var galleryOverlayUl = galleryOverlay.querySelector('ul');
  var galleryPreview = galleryOverlay.querySelector('.gallery-overlay-preview');

  main.addEventListener('click', openGalleryOverlay);

  function openGalleryOverlay(evt) {
    var target = evt.target;
    if (target.tagName === 'IMG') {
      var index = target.getAttribute('data-index-number');
      galleryOverlay.classList.remove('hidden');
      window.preview.printFotoInGallery(window.ARRAY, index, galleryOverlayUl, sliderSlides);
      main.removeEventListener('click', openGalleryOverlay);
      galleryOverlayClose.addEventListener('click', openMain);
      galleryPreview.addEventListener('click', window.list.listPages);
    } else {
      return;
    }

    function openMain() {
      window.list.removeNumber();
      window.preview.removeFotoInGallery(galleryOverlayUl, sliderSlides);
      galleryOverlay.classList.add('hidden');
      main.addEventListener('click', openGalleryOverlay);
      galleryOverlayClose.removeEventListener('click', openMain);
      galleryPreview.removeEventListener('click', window.list.listPages);
    }
  }
})();
