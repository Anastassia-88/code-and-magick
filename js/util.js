'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var KeyCode = {
    ESC: 27,
    ENTER: 13,
  };

  var inputName = setup.querySelector('.setup-user-name');

  function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function isEscEvent(evt, action) {
    if (evt.keyCode === KeyCode.ESC && document.activeElement !== inputName) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.keyCode === KeyCode.ENTER) {
      action();
    }
  }

  // The maximum is inclusive and the minimum is inclusive
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function removeNodeContent(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  window.util = {
    getRandomItemFromArray: getRandomItemFromArray,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomIntInclusive: getRandomIntInclusive,
    removeNodeContent: removeNodeContent,
  };

})();
