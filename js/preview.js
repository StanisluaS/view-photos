'use strict';

(function () {

  var similarSliderTemplate = document.querySelector('#slider-template').content;
  var galleryTemplate = document.querySelector('#gallery-template').content;

  window.preview = {
    printFotoInGallery: function (array, index, photo, slides) {
      var src = array[index].url + '/';
      printGallery(array, index, src, photo);
      if (typeof printGallery === 'function') {
        printGallery(array, index, src, slides);
      }
    },

    removeFotoInGallery: function (photo, slides) {
      photo.innerHTML = '';
      slides.innerHTML = '';
      slides.removeAttribute('style');
    }
  };

  function printGallery(array, index, src, element) {
          // debugger;
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= array[index].number; i++) {
      var url = src + i + '.jpg';
      if (element.className === 'slider-slides') {
        var px = 104 * i + 'px';
        element.style.cssText = 'width: ' + px;
        element.appendChild(getFotosSlider(url, i));
      } else {
        element.appendChild(getFotos(url, i));
      }
      element.appendChild(fragment);
    }
  }

  function getFotosSlider(url, index) {
    var sliderElement = similarSliderTemplate.cloneNode(true);
    sliderElement.querySelector('img').setAttribute('src', url);
    sliderElement.querySelector('a').classList.add('elt_' + index);
    if (index === 1) {
      sliderElement.querySelector('img').classList.add('active-img');
      sliderElement.querySelector('a').classList.add('active');
    }
    return sliderElement;

  }

  function getFotos(url, index) {
    var fotoElement = galleryTemplate.cloneNode(true);
    fotoElement.querySelector('img').setAttribute('src', url);
    fotoElement.querySelector('li').style.cssText = 'display: none; opacity: 0; z-index: 1;';
    fotoElement.querySelector('li').classList.add('elt_' + index);
    if (index === 1) {
      fotoElement.querySelector('li').style.cssText = 'display: block; opacity: 1; z-index: 2;';
    }
    return fotoElement;
  }

})();
