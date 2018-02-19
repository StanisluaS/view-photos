'use strict';

(function () {

//   window.ARRAY = [{url: 'photos1'}, {url: 'photos2'}, {url: 'photos3'}, {url: 'photos4'}, {url: 'photos5'},
// {url: 'photos6'}, {url: 'photos7'}, {url: 'photos8'}, {url: 'photos9'}, {url: 'photos10'}, {url: 'photos11'}];

  window.ARRAY = [{url: 'photos1', number: 10}, {url: 'photos2', number: 16}, {url: 'photos3', number: 6}, {url: 'photos4', number: 7}, {url: 'photos5', number: 15},
{url: 'photos6', number: 10}, {url: 'photos7', number: 10}, {url: 'photos8', number: 10}, {url: 'photos9', number: 10}, {url: 'photos10', number: 10}, {url: 'photos11', number: 10}];

  window.data = {
    array: getListCollaborators(window.ARRAY)
  };

  function getListCollaborators(arrays) {
    var collaborators = [];
    for (var i = (arrays.length - 1); i >= 0; i--) {
      collaborators[i] = {
        url: arrays[i].url + '/' + (i + 1) + '.jpg',
        indexNumber: i
      };
    }
    return collaborators;
  }

})();
