// файл pictures.js
'use strict';

(function () {

  var similarFotoTemplate = document.querySelector('#picture-template').content;
  var preview = document.querySelector('.preview');

  printPhoto(window.data.array, similarFotoTemplate);

  function getPhotos(picturesData, element) {
    var fotoElement = element.cloneNode(true);
    fotoElement.querySelector('img').setAttribute('src', picturesData.url);
    fotoElement.querySelector('img').setAttribute('data-index-number', picturesData.indexNumber);
    return fotoElement;
  }

  function printPhoto(picturesData, element) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < picturesData.length; i++) {
      fragment.appendChild(getPhotos(picturesData[i], element));
    }
    preview.appendChild(fragment);
  }

})();
