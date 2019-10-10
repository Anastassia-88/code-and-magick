'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var CLOUD_COLOR = '#fff';
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

  var FONT_COLOR = '#000';
  var FONT = '16px PT Mono';
  var FONT_GAP = 20;
  var NAMES_BOTTOM_OFFSET = 30;
  var TIMES_BOTTOM_OFFSET = 2;
  var INTRO = 'Ура вы победили!\nСписок результатов:';

  var BAR_MAIN_COLOR = 'rgba(255, 0, 0, 1)';
  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;
  var BAR_GAP = 50;
  var BAR_BOTTOM_OFFSET = 40;


  function renderRect(ctx, x, y, color, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function renderText(ctx, color, font, textBaseline, text, x, y) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textBaseline = textBaseline;
    ctx.fillText(text, x, y);
  }

  function renderIntro(ctx, text) {
    var arr = text.split('\n');

    for (var i = 0; i < arr.length; i++) {
      renderText(ctx, FONT_COLOR, FONT, 'top', arr[i], CLOUD_X + FONT_GAP, CLOUD_Y + (i + 1) * FONT_GAP);
    }
  }

  function getMaxElement(times) {
    var maxElement = times[0] ? times[0] : 0;

    for (var i = 1; i < times.length; i++) {
      if (times[i] > maxElement) {
        maxElement = times[i];
      }
    }

    return maxElement;
  }

  function getRandomBlueColor() {
    return 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
  }

  window.renderStatistics = function (ctx, names, times) {
    renderRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW_COLOR, CLOUD_WIDTH, CLOUD_HEIGHT);
    renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR, CLOUD_WIDTH, CLOUD_HEIGHT);
    renderIntro(ctx, INTRO);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var color = (names[i] === 'Вы') ? BAR_MAIN_COLOR : getRandomBlueColor();
      var barHeight = Math.floor(times[i] * BAR_MAX_HEIGHT / maxTime);
      var x = CLOUD_X + 2 * FONT_GAP + i * BAR_WIDTH + i * BAR_GAP;

      renderRect(ctx, x, CLOUD_Y + CLOUD_HEIGHT - BAR_BOTTOM_OFFSET - barHeight, color, BAR_WIDTH, barHeight);
      renderText(ctx, FONT_COLOR, FONT, 'bottom', Math.floor(times[i]), x, CLOUD_Y + CLOUD_HEIGHT - BAR_BOTTOM_OFFSET - barHeight - TIMES_BOTTOM_OFFSET);
      renderText(ctx, FONT_COLOR, FONT, 'top', names[i], x, CLOUD_Y + CLOUD_HEIGHT - NAMES_BOTTOM_OFFSET);
    }
  };

})();

