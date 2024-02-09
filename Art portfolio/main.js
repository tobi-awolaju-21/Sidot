
var expectedBodyHeight = 150; // Set the expected height in vh
var bodyHeight = expectedBodyHeight * window.innerHeight / 100;

window.addEventListener('scroll', function() {
  var scrolled = window.scrollY / (bodyHeight - window.innerHeight);
  var scaleValue = 1 - (0.5 * scrolled);
  
  // Ensure that scaleValue stays between 0.5 and 1
  scaleValue = Math.max(0.5, Math.min(1, scaleValue));

//  var translateY = scrolled * document.getElementById('scalingImage').offsetHeight;

  document.getElementById('scalingImage').style.transform = 'scale(' + scaleValue + ') translateY(' + 0 + 'px)';
});