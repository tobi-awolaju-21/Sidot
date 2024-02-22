

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
  var red = colorValues[0];
  var green = colorValues[1];
  var blue = colorValues[2];
  var backgroundColor = `rgba(${red}, ${green}, ${blue},0.2)`;

  document.body.style.backgroundColor = backgroundColor;


  var colorString = maxColor;
  var colorValues = colorString.match(/\d+/g).map(Number); // Extract numbers using regex and convert to numbers
  var red = colorValues[0]/2;
  var green = colorValues[1]/2;
  var blue = colorValues[2]/2;
  var backgroundColor = `rgba(${red}, ${green}, ${blue})`;  
  document.getElementById('content2').style.backgroundColor = backgroundColor;
  var backgroundColor = `rgba(${red}, ${green}, ${blue},0.50)`;
  document.getElementById('view-works').style.backgroundColor = backgroundColor;


// Set the background color of the body



  // Set the background color of the specified div with 75% alpha
   colorString = maxColor;
   colorValues = colorString.match(/\d+/g).map(Number); // Extract numbers using regex and convert to numbers
   red = colorValues[0]/3;
   green = colorValues[1]/3;
   blue = colorValues[2]/3;
   backgroundColor = `rgba(${red}, ${green}, ${blue})`;
  document.getElementById('content3').style.backgroundColor = backgroundColor;



  // Set the background color of the specified div with 100% alpha
   colorString = maxColor;
   colorValues = colorString.match(/\d+/g).map(Number); // Extract numbers using regex and convert to numbers
   red = colorValues[0]/5;
   green = colorValues[1]/5;
   blue = colorValues[2]/5;
   backgroundColor = `rgba(${red}, ${green}, ${blue})`;
  document.getElementById('content4').style.backgroundColor = backgroundColor;

  scrolldown();

}

// Call handleImage function when the page loads
window.onload = handleImage;





function scrolldown() { 
  var container1 = document.querySelector('.fap1');
  var container2 = document.querySelector('.fap2');
  var container3 = document.querySelector('.fap3');

  container1.scrollTop = container1.scrollHeight;
  container2.scrollTop = container2.scrollHeight;
  container3.scrollTop = container3.scrollHeight;
}

