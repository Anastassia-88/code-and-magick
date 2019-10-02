'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var inputName = setup.querySelector('.setup-user-name');

  window.util = {
    getRandomItemFromArray: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE && document.activeElement !== inputName) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
  };
})();
