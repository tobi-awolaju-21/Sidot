// Scroll to the last item with animation
window.onload = function () {
  var container = document.querySelector('.container');
  var lastItem = container.lastElementChild;
  var fap1 = document.querySelector('.fap1');
  var fap1l = fap1.lastElementChild;
  var fap2 = document.querySelector('.fap2');
  var fap2l = fap2.lastElementChild;
  var fap3 = document.querySelector('.fap3');
  var fap3l = fap3.lastElementChild;

  // Helper function for smooth scrolling
  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  // Easing function for smooth scrolling
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // Scroll to the last item with animation
  scrollTo(container, lastItem.offsetTop, 1000);
  scrollTo(fap1, fap1l.offsetTop, 1500);
  scrollTo(fap2, fap2l.offsetTop, 2500);
  scrollTo(fap3, fap3l.offsetTop, 4500);





};




  // play a mfing song
 // Create an audio element
 const audio = new Audio('theme.mp3');

 // Set the loop property to true
 audio.loop = true;

  // Play the audio
  audio.play();

  // Gradually decrease the volume over 5 seconds
  const fadeOutDuration = 5000; // in milliseconds
  const fadeOutInterval = 100;   // interval for volume adjustment

  const decreaseVolume = () => {
    const interval = fadeOutDuration / fadeOutInterval;
    const decreaseAmount = audio.volume / interval;

    const fadeOutIntervalId = setInterval(() => {
      audio.volume -= decreaseAmount;

      if (audio.volume <= 0) {
        audio.pause();
        clearInterval(fadeOutIntervalId);
      }
    }, fadeOutInterval);
  };

  // Call the function to start fading out after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    decreaseVolume();
  }, 5000);