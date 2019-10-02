'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

  var colorize = function (element, colors, input) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomItemFromArray(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      input.value = color;
    });
  };

  colorize(wizardCoat, window.data.WIZARD_COAT_COLORS, wizardCoatInput);
  colorize(wizardEyes, window.data.WIZARD_EYES_COLORS, wizardEyesInput);
  colorize(wizardFireball, window.data.WIZARD_FIREBALL_COLORS, wizardFireballInput);
})();
