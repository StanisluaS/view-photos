'use strict';

(function () {

  var SERVER_URL = 'url с данными первой картинки каждой папки и названием папки';
  // базовый url для папок с картинками
  var SERVER_URL_FOLDER = '(базовый урл)?folder=';

  function setup(onLoad, onError, timeout) {
      debugger;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = timeout || 10000;

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Произошла ошибка, код: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  }

  window.backend = {
    load: function (onLoad, onError, nameFolder) {
      var url;
      if (nameFolder) {
        url = SERVER_URL_FOLDER + nameFolder;
      } else {
        url = SERVER_URL;
      }
      var xhr = setup(onLoad, onError);

      xhr.open('GET', url);
      xhr.send();
    }
  };

})();
