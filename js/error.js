'use strict';

(function () {

  function showErrorMessage(error) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = error;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.error = {
    showErrorMessage: showErrorMessage,
  };

})();
