'use strict';

(function () {
  var TIMEOUT = 10000; // 10s
  var RESPONSE_TYPE = 'json';

  var Request = {
    SUCCESS_STATUS: 200,
    DONE_STATE: 4
  };

  var ajax = function (onSuccess, onError, method, url, data) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      if (xhr.status === Request.SUCCESS_STATUS && (!data ? (xhr.readyState === Request.DONE_STATE) : true)) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT;
    xhr.open(method, url);
    xhr.send(data);
  };

  window.backend = {
    ajax: ajax
  };
})();

