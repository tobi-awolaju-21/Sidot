
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


// get most used color.
function handleImage() {
  var img = document.getElementById('inputImage');
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0, img.width, img.height);

  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var pixelData = imageData.data;

  var colorCount = {};
  for (var i = 0; i < pixelData.length; i += 4) {
      var color = `rgb(${pixelData[i]}, ${pixelData[i + 1]}, ${pixelData[i + 2]})`;
      colorCount[color] = (colorCount[color] || 0) + 1;
  }

  var maxColor = Object.keys(colorCount).reduce(function(a, b) {
      return colorCount[a] > colorCount[b] ? a : b;
  });

  // Set the background color of the specified div with 50% alpha
  var colorString = maxColor;
  var colorValues = colorString.match(/\d+/g).map(Number); // Extract numbers using regex and convert to numbers
  var red = colorValues[0]/2;
  var green = colorValues[1]/2;
  var blue = colorValues[2]/2;
  var backgroundColor = `rgba(${red}, ${green}, ${blue})`;
  document.getElementById('content2').style.backgroundColor = backgroundColor;
  var backgroundColor = `rgba(${red}, ${green}, ${blue},0.50)`;
  document.getElementById('view-works').style.backgroundColor = backgroundColor;



  // Set the background color of the specified div with 75% alpha
  var colorString = maxColor;
  var colorValues = colorString.match(/\d+/g).map(Number); // Extract numbers using regex and convert to numbers
  var red = colorValues[0]/3;
  var green = colorValues[1]/3;
  var blue = colorValues[2]/3;
  var backgroundColor = `rgba(${red}, ${green}, ${blue})`;
  document.getElementById('content3').style.backgroundColor = backgroundColor;



  // Set the background color of the specified div with 100% alpha
  var colorString = maxColor;
  var colorValues = colorString.match(/\d+/g).map(Number); // Extract numbers using regex and convert to numbers
  var red = colorValues[0]/5;
  var green = colorValues[1]/5;
  var blue = colorValues[2]/5;
  var backgroundColor = `rgba(${red}, ${green}, ${blue})`;
  document.getElementById('content4').style.backgroundColor = backgroundColor;

}

// Call handleImage function when the page loads
window.onload = handleImage;
