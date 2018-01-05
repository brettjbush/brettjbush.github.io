// Obtain leviosa boxes
var leviosaBoxes = document.getElementsByClassName("leviosa");

// Various depth constants for shadows (distance to background in pixels)
var depthConstant = 40;
var depthConstant2 = 80;

// The current vertical and horizontal tilts
var currentBeta = 0;
var currentGamma = 0;

// Difference from start angle to "up"
var initDiffFromUpBeta = 0;
var initDiffFromUpGamma = 0;

// Marker to check first
var first = true;

// Convert multiply to degrees to get radians
var degtorad = Math.PI / 180;

// Calculate the shadow offset from angle
function calcOffset(depth, angle) {
  
  // Tangent * Adjacent = Opposite
  var offsetValue = Math.tan(Math.abs(angle) * degtorad) * depth;
  
  // Account for correct shadow direction
  if(angle < 0)
  {
    offsetValue = offsetValue * -1;
  }
  return offsetValue;
}

// Triggered on device tilt
window.addEventListener("deviceorientation", function(event) {
  
  // Initialize where "up" is
  if(first)
  {
    originalBeta = Number(event.beta).toFixed(1);
    originalGamma = Number(event.gamma).toFixed(1);

    initDiffFromUpBeta = event.beta;
    initDiffFromUpGamma = event.gamma;

    first = false;
  }
  
  // Vertical tilt
  if(event.beta != null)
  {
    var deltaBetaValue = event.beta - originalBeta;
    currentBeta = parseInt(Number(calcOffset(depthConstant, deltaBetaValue + initDiffFromUpBeta)).toFixed(0));
  }
  
  // Horizontal tilt
  if(event.gamma != null)
  {
    var deltaGammaValue = event.gamma - originalGamma;
    currentGamma = parseInt(Number(calcOffset(depthConstant, deltaGammaValue + initDiffFromUpGamma)).toFixed(0));
  }
  
  // Apply change to all leviosa boxes
  for(i = 0; i < leviosaBoxes.length; i++)
  {
    leviosaBoxes[i].style.boxShadow = currentGamma.toString() + "px " + currentBeta.toString() + "px 20px #888888";
  }
}, true);
