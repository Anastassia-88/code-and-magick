'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var SIMILAR_WIZARDS_AMOUNT = 4;
  var similarWizardsList = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var insertWizards = function (wizards) {

    window.util.removeNodeContent(similarWizardsList);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_WIZARDS_AMOUNT; i++) {
      var j = window.util.getRandomIntInclusive(0, wizards.length);
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarWizardsList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.setup = {
    insertWizards: insertWizards,
  };
})();

