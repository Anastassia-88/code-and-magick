'use strict';

(function () {


  var wizards = [];


  function updateWizards() {
    var coatColor = window.colorize.wizardCoat.style.fill;
    var eyesColor = window.colorize.wizardEyes.style.fill ? window.colorize.wizardEyes.style.fill : 'black';

    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor &&
        it.colorEyes === eyesColor;
    });

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });

    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });

    window.render.insertWizards(uniqueWizards);
  }


  var onSuccess = function (data) {
    wizards = data;
    updateWizards();
  };


  window.similar = {
    onSuccess: onSuccess,
    updateWizards: updateWizards,
  };

})();

