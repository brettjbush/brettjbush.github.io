var shadowBoxes = document.getElementsByClassName("shadow-box");
var depthConstant = 40;
var depthConstant2 = 80;
var currentBeta = 0;
var currentGamma = 0;

var initDiffFromUpBeta = 0;
var initDiffFromUpGamma = 0;

var first = true;
var degtorad = Math.PI / 180; // Degree-to-Radian conversion

function calcOffset(depth, angle) {
  var offsetValue = Math.tan(Math.abs(angle) * degtorad) * depth;
  if(angle < 0)
  {
    offsetValue = offsetValue * -1;
  }
  return offsetValue;
}

window.addEventListener("deviceorientation", function(event) {
  if(first)
  {
    originalBeta = Number(event.beta).toFixed(1);
    originalGamma = Number(event.gamma).toFixed(1);

    initDiffFromUpBeta = event.beta;
    initDiffFromUpGamma = event.gamma;

    first = false;
  }
  if(event.beta != null)
  {
    var deltaBetaValue = event.beta - originalBeta;
    currentBeta = parseInt(Number(calcOffset(depthConstant, deltaBetaValue + initDiffFromUpBeta)).toFixed(0));
  }
  if(event.gamma != null)
  {
    var deltaGammaValue = event.gamma - originalGamma;
    currentGamma = parseInt(Number(calcOffset(depthConstant, deltaGammaValue + initDiffFromUpGamma)).toFixed(0));
  }
    for(i = 0; i < shadowBoxes.length; i++)
    {
      shadowBoxes[i].style.boxShadow = currentGamma.toString() + "px " + currentBeta.toString() + "px 20px #888888";
    }
}, true);
