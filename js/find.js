'use strict';

(function () {

  window.find = {
    findCollaborators: function (arrays, letter) {
      var newArrays = [];
      for (var i = 0; i < arrays.length; i++) {
        if (arrays[i].name.substring(0, 1) === letter) {
          newArrays.push(arrays[i]);
        }
      }
      return newArrays;
    },

    sortsCollaborators: function () {
      sortsCollaborators(window.searchboxText, window.similarListElement);
    }
  };

  function sortsCollaborators(element, collaborators) {
    var searchLine;
    var textContent = [];
    var text = element.value.trim();
    var regex = new RegExp(text, 'i');
    if (collaborators.children[0].tagName === 'DIV') {
      for (var i = 0; i < collaborators.children.length; i++) {
        searchLine = collaborators.children[i].textContent.split(' ')[0];
        if (searchLine.search(regex) + 1) {
          textContent.push(collaborators.children[i].textContent);
        }
      }
      window.similarListElement.innerHTML = '';
      window.list.printList(textContent);
    }
  }

})();
