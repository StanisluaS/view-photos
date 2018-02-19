// файл pictures.js
'use strict';

(function () {

  var MAX_WIDTH = 1000;
  var similarFotoTemplate = document.querySelector('#picture-template').content;
  var preview = document.querySelector('.preview');
  var container = document.querySelector('.container');

  getWidth(printFoto, MAX_WIDTH, window.data.array, similarFotoTemplate);

  function getWidth(callback, width, array, element) {
    container.setAttribute('max-width', width + '');
    if (typeof callback === 'function') {
      callback(array, element);
    }
  }

  function getFotos(picturesData, element) {
    var fotoElement = element.cloneNode(true);
    fotoElement.querySelector('img').setAttribute('src', picturesData.url);
    fotoElement.querySelector('img').setAttribute('data-index-number', picturesData.indexNumber);
    return fotoElement;
  }

  function printFoto(picturesData, element) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < picturesData.length; i++) {
      fragment.appendChild(getFotos(picturesData[i], element));
    }
    preview.appendChild(fragment);
  }

})();
