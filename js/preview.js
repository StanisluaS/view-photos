'use strict';

(function () {

  var similarSliderTemplate = document.querySelector('#slider-template').content;
  var galleryTemplate = document.querySelector('#gallery-template').content;
  var data = [];

  window.preview = {
    printFotoInGallery: function (nameFolder) {
      window.backend.load(getArrayFotos, window.pictures.errorHandler, nameFolder);
    },

    removeFotoInGallery: function (photo, slides) {
      photo.innerHTML = '';
      slides.innerHTML = '';
      slides.removeAttribute('style');
    }
  };

  function printGallery(picturesData, element) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i <= picturesData.lengh; i++) {
      if (element.className === 'slider-slides') {
        var px = window.util.sliderTotalWidth() * (i + 1) + 'px';
        element.style.cssText = 'width: ' + px;
        element.appendChild(getFotosSlider(picturesData[i], i));
      } else {
        element.appendChild(getFotos(picturesData[i], i));
      }
      element.appendChild(fragment);
    }
  }

  function getFotosSlider(picturesData, index) {
    var sliderElement = similarSliderTemplate.cloneNode(true);
    sliderElement.querySelector('img').setAttribute('src', picturesData.image);
    sliderElement.querySelector('a').classList.add('elt_' + (index + 1));
    if (index === 0) {
      sliderElement.querySelector('img').classList.add('active-img');
      sliderElement.querySelector('a').classList.add('active');
    }
    return sliderElement;

  }

  function getFotos(picturesData, index) {
    var fotoElement = galleryTemplate.cloneNode(true);
    fotoElement.querySelector('img').setAttribute('src', picturesData.image);
    fotoElement.querySelector('li').style.cssText = 'display: none; opacity: 0; z-index: 1;';
    fotoElement.querySelector('li').classList.add('elt_' + (index + 1));
    if (index === 0) {
      fotoElement.querySelector('li').style.cssText = 'display: block; opacity: 1; z-index: 2;';
    }
    return fotoElement;
  }

  function getArrayFotos(loadData) {
    data = loadData;
    printGallery(data, window.galleryOverlayUl);
    printGallery(data, window.sliderSlides);
  }

})();
