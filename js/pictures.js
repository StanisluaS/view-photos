// файл pictures.js
'use strict';

(function () {

  var similarFotoTemplate = document.querySelector('#picture-template').content;
  var preview = document.querySelector('.preview');
  var errorMessage = document.querySelector('.error-message');

  window.pictures = {
    errorHandler: function (message) {
      errorMessage.textContent = message;
      errorMessage.classList.remove('hidden');
    }
  };

  window.backend.load(printPhoto, window.pictures.errorHandler);

  function getPhotos(picturesData) {
    var fotoElement = similarFotoTemplate.cloneNode(true);
    fotoElement.querySelector('img').setAttribute('src', picturesData.image);
    fotoElement.querySelector('img').setAttribute('data-name-folder', picturesData.nameFolder);
    return fotoElement;
  }

  function printPhoto(picturesData) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < picturesData.length; i++) {
      fragment.appendChild(getPhotos(picturesData[i]));
    }
    preview.appendChild(fragment);
  }

})();
