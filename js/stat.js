'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var FONT = '16px PT Mono';
var FONT_GAP = 20;
var TEXT_COLOR = '#000';
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_MAIN_COLOR = 'rgba(255, 0, 0, 1)';

var renderRect = function (ctx, x, y, color, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, color, font, textBaseline, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = textBaseline;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (times) {
  var maxElement = times[0] ? times[0] : 0;

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }

  return maxElement;
};

var getRandomBlueColor = function () {
  return 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW_COLOR, CLOUD_WIDTH, CLOUD_HEIGHT);
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR, CLOUD_WIDTH, CLOUD_HEIGHT);
  renderText(ctx, TEXT_COLOR, FONT, 'top', 'Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  renderText(ctx, TEXT_COLOR, FONT, 'top', 'Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 2 * FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var color = (names[i] === 'Вы') ? BAR_MAIN_COLOR : getRandomBlueColor();
    var barHeight = Math.floor(times[i] * BAR_MAX_HEIGHT / maxTime);
    var x = CLOUD_X + 2 * FONT_GAP + i * BAR_WIDTH + i * BAR_GAP;

    renderRect(ctx, x, CLOUD_Y + CLOUD_HEIGHT - 2 * FONT_GAP - barHeight, color, BAR_WIDTH, barHeight);
    renderText(ctx, TEXT_COLOR, FONT, 'top', Math.floor(times[i]), x, CLOUD_Y + CLOUD_HEIGHT - 3 * FONT_GAP - barHeight);
    renderText(ctx, TEXT_COLOR, FONT, 'bottom', names[i], x, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
  }
};
