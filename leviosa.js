// Obtain leviosa boxes
var leviosaBoxes = document.getElementsByClassName("leviosa");

// Various depth constants for shadows (distance to background in pixels)
var depthConstant = 40;
var depthConstant2 = 80;

// The current vertical and horizontal tilts
var currentBeta = 0;
var currentGamma = 0;

var currentBetaDegrees = 0;

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

function calcOpacity(betaAngle) {
  return 1 - (Math.abs(betaAngle) / 90);
}

// Triggered on device tilt
window.addEventListener("deviceorientation", function(event) {

  // Vertical tilt
  if(event.beta != null)
  {
    var deltaBetaValue = event.beta;
    currentBeta = parseInt(Number(calcOffset(depthConstant, deltaBetaValue)).toFixed(0));
    currentBetaDegrees = deltaBetaValue;
  }
  
  // Horizontal tilt
  if(event.gamma != null)
  {
    var deltaGammaValue = event.gamma;
    currentGamma = parseInt(Number(calcOffset(depthConstant, deltaGammaValue)).toFixed(0));
  }
  
  // Apply change to all leviosa boxes
  for(i = 0; i < leviosaBoxes.length; i++)
  {
    if (Math.abs(window.orientation) === 90) {
      leviosaBoxes[i].style.boxShadow = currentBeta.toString() + "px " + currentGamma.toString() + "px 20px rgba(80, 80, 80, " + Number(calcOpacity(currentBetaDegrees)).toFixed(3) + ")";
    } else {
    	// Portrait
      leviosaBoxes[i].style.boxShadow = currentGamma.toString() + "px " + currentBeta.toString() + "px 20px rgba(80, 80, 80, " + Number(calcOpacity(currentBetaDegrees)).toFixed(3) + ")";
    }
    
  }
}, true);
