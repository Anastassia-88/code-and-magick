'use strict';

(function () {

  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
    'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onCoatChange: function (color) {},
    onEyesChange: function (color) {},
  };

  var SIMILAR_WIZARDS_AMOUNT = 4;

  var setup = document.querySelector('.setup');
  var similarWizardsList = setup.querySelector('.setup-similar-list');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');


  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomItemFromArray(WIZARD_COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomItemFromArray(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = window.util.getRandomItemFromArray(WIZARD_FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = newColor;
    wizardFireballInput.value = newColor;
  });


  function createWizard(newWizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = newWizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = newWizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = newWizard.colorEyes;
    return wizardElement;
  }

  function renderWizards(wizards) {
    window.util.removeNodeContent(similarWizardsList);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_WIZARDS_AMOUNT; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarWizardsList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  window.wizard = {
    renderWizards: renderWizards,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    wizard: wizard,
  };

})();
