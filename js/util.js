'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var inputName = setup.querySelector('.setup-user-name');

  var getRandomItemFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== inputName) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  // Getting a random integer between two values
  // The maximum is inclusive and the minimum is inclusive
  var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var removeNodeContent = function (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  window.util = {
    getRandomItemFromArray: getRandomItemFromArray,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomIntInclusive: getRandomIntInclusive,
    removeNodeContent: removeNodeContent,
  };
})();
