'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var SIMILAR_WIZARDS_AMOUNT = 4;
  var similarWizardsList = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  function insertWizards(wizards) {
    window.util.removeNodeContent(similarWizardsList);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarWizardsList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  window.render = {
    insertWizards: insertWizards,
  };

})();
