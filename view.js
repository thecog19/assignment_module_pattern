var MOLES = MOLES || {};

MOLES.view = function() {
  var exports = {};

  exports.setupBoard = function(moleQuantity, callbacks) {
    for (var i = 0; i < moleQuantity; i++) {
      $('.board').append($('<div class="mole inactive">'));
    }

    $('.board').on("click", ".active", callbacks.clickActive)
    $('.board').on("click", ".inactive", callbacks.clickInactive)

  };
  exports.toggleMole = function(moleIndex) {
    $('.mole:nth-child('+(moleIndex + 1)+')').toggleClass('active inactive');
  };

  exports.updateScore = function(score){
    $('#score').text(score)
  };

  exports.updateMultiplier = function(multiplier){
    $('#multiplier').text(multiplier)
  }

  return exports;

};
