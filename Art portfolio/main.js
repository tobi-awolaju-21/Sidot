window.onload = function () {
  var container = document.querySelector('.container');
  var lastItem = container.lastElementChild;
  var fap1 = document.querySelector('.fap1');
  var fap1l = fap1.lastElementChild;
  var fap2 = document.querySelector('.fap2');
  var fap2l = fap2.lastElementChild;
  var fap3 = document.querySelector('.fap3');
  var fap3l = fap3.lastElementChild;


  // Scroll to the last item
  container.scrollTop = lastItem.offsetTop;
  fap1.scrollTop = fap1l.offsetTop;
  fap2.scrollTop = fap2l.offsetTop;
  fap3.scrollTop = fap3l.offsetTop;
};