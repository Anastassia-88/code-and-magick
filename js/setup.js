'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var WIZARDS_AMOUNT = 4;
  var userNameInput = setup.querySelector('.setup-user-name');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  // Валидация поля ввода имени персонажа
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });


  // Блок похожих персонажей
  // Функция генерации случайных данных
  var createWizardsArray = function (wizardsAmount) {
    var arr = [];

    for (var i = 0; i < wizardsAmount; i++) {
      arr.push({
        name: window.util.getRandomItemFromArray(window.data.WIZARD_NAMES) + ' ' + window.util.getRandomItemFromArray(window.data.WIZARD_SURNAMES),
        coatColor: window.util.getRandomItemFromArray(window.data.WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomItemFromArray(window.data.WIZARD_EYES_COLORS)
      });
    }
    return arr;
  };

  // Функция создания DOM-элемента на основе JS-объекта
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // Функция заполнения блока DOM-элементами на основе массива JS-объектов
  var insertWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var wizards = createWizardsArray(WIZARDS_AMOUNT);
  insertWizards(wizards);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();

