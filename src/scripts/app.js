// TODO: Fix random widths for lines


// Arrays

const lineWidths = [
  376, 291, 366, 184, 260, 188, 377, 242, 399, 194
];

const colors = [
  'lightBlue',
  'purple',
  'lightPurple',
  'orange'
];

const orderedColors = [
  'lightPurple',
  'lightBlue',
  'lightPurple',
  'orange',
  'lightPurple',
  'lightBlue',
  'lightPurple',
  'lightBlue',
  'lightPurple',
  'orange',
  'lightPurple',
  'lightBlue',
  'lightPurple'
];


// Selectors

var image = document.getElementById('image');
var vinjett,
    lines;

// hide vinjett
var v1 = document.querySelectorAll('.vinjett1');
var v2 = document.querySelectorAll('.vinjett2');
var v3 = document.querySelectorAll('.vinjett3');
var v4 = document.querySelectorAll('.vinjett4');
var v5 = document.querySelectorAll('.vinjett5');
var v6 = document.querySelectorAll('.vinjett6');
v1[0].style.display = 'none';
v2[0].style.display = 'none';
v3[0].style.display = 'none';
v4[0].style.display = 'none';
v5[0].style.display = 'none';
v6[0].style.display = 'none';

// navigation
var menu1 = document.querySelectorAll('.menu-item1')[0];

menu1.addEventListener("click", function(){
  if (!this.classList.contains('active')){
    this.classList.add(' active');
  }
});
// grab the menu-item$ of the clicked element [convert to data-id?] for easier grab?
// hide current vinjett
// show vinjett$



// Line Functions

function overwriteColorsWithOrdered(){
  var lines = document.getElementsByClassName("line"),
      len = lines !== null ? lines.length : 0,
      i = 0;
  for(i; i < len; i++) {
      if (
           (lines[i].classList.contains("lightBlue")) ||
           (lines[i].classList.contains("purple")) ||
           (lines[i].classList.contains("lightPurple")) ||
           (lines[i].classList.contains("orange"))
         )
      {
        lines[i].classList.remove("lightBlue");
        lines[i].classList.remove("purple");
        lines[i].classList.remove("lightPurple");
        lines[i].classList.remove("orange");
      }
      lines[i].className += " " + orderedColors[i];
  }
}

function getRandomColor(){
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

function getRandomWidth(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomLine(width, color){
	// create line
  var d = document.createElement('div');
  // create circle
  var c = document.createElement('div');
  // set line width
  d.setAttribute('style','width: ' + width + '%');
  // set line class
  d.className = 'line animated slideInLeft ' + color;
  // set circle class
  c.className = 'circle';
  // append circle to line
  d.appendChild(c);
  // append line to container
  lines.appendChild(d);
}

function createOrderedLine(width, color){
  // create line
  var d = document.createElement('div');
  // create circle
  var c = document.createElement('div');
  // set line width
  d.setAttribute('style','width: ' + width + '%');
  // set line class
  d.className = 'line animated slideInLeft ' + color;
  // set circle class
  c.className = 'circle';
  // append circle to line
  d.appendChild(c);
  // append line to container
  lines.appendChild(d);
}


function displayRandomLines(amount){
  var len = amount,
      i = 0;
  for (i; i < len; i++){
    createRandomLine(getRandomWidth(33, 95), getRandomColor());
  }

  // lineWidths.forEach(function(entry){
  //   createRandomLine(entry, getRandomColor());
  // });
}

function displayOrderedLines(amount){
  var len = amount,
      i = 0;
  for (i; i < len; i++){
    createOrderedLine(getRandomWidth(33, 95), orderedColors[i]);
  }
}

function showVinjett1(){

  vinjett = v1[0];
  v1[0].style.display = 'block';
  lines = v1[0].children[0];
  displayOrderedLines(10);
}


// App Functions



// App
(function() {

  showVinjett1();
  // displayRandomLines();
  // overwriteColorsWithOrdered();
  // displayOrderedLines(10);
  // displayRandomLines(10);

})();


// var lines = document.getElementsByClassName("line"),
//     len = lines !== null ? lines.length : 0,
//     i = 0;
// for(i; i < len; i++) {
//     lines[i].className += " animated slideInLeft";
//     // lines[i].className += " test";
// }
