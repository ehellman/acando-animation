var $ = function (selector) {
  return document.querySelectorAll(selector);
}

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
    lines,
    tab,
    element,
    amount;

// hide vinjett
var v1 = document.querySelectorAll('#vinjett1')[0];
var v2 = document.querySelectorAll('#vinjett2')[0];
var v3 = document.querySelectorAll('#vinjett3')[0];
var v4 = document.querySelectorAll('#vinjett4')[0];
var v5 = document.querySelectorAll('#vinjett5')[0];
var v6 = document.querySelectorAll('#vinjett6')[0];
// v1.style.display = 'none';
// v2.style.display = 'none';
// v3.style.display = 'none';
// v4.style.display = 'none';
// v5.style.display = 'none';
// v6.style.display = 'none';

// navigation
//

var tabs = {
  nav1: document.getElementById('menu-item-1'),
  nav2: document.getElementById('menu-item-2'),
  nav3: document.getElementById('menu-item-3'),
  nav4: document.getElementById('menu-item-4'),
  nav5: document.getElementById('menu-item-5'),
  nav6: document.getElementById('menu-item-6')
}

var vinjetter = {
  vinjett1: document.getElementById("vinjett1"),
  vinjett2: document.getElementById("vinjett2"),
  vinjett3: document.getElementById("vinjett3"),
  vinjett4: document.getElementById("vinjett4"),
  vinjett5: document.getElementById("vinjett5"),
  vinjett6: document.getElementById("vinjett6")
}



function clearSelected() {
  for (tab in tabs) {
    tabs[tab].classList.remove("selected");
  }
}
function clearActive() {
  for (element in vinjetter) {
    vinjetter[element].classList.remove("active");
  }
}


/* * * * * * * * * * * * *
     COLOR FUNCTIONS
 * * * * * * * * * * * * */
function getRandomColor(){
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

function getRandomWidth(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*******************
     line.CREATE
 *******************/
/**********/
/* line.1 */
/**********/
function createRandomVinjett1Line(width, color){
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
function createOrderedVinjett1Line(width, color){
  // create line
  var d = document.createElement('div');
  // create circle
  var c = document.createElement('div');
  // set line width
  d.setAttribute('style','width: ' + width + '%');
  // set line class
  d.className = 'line animated ' + color;
  // set circle class
  c.className = 'circle';
  // append circle to line
  d.appendChild(c);
  // append line to container
  lines.appendChild(d);
}
/**********/
/* line.2 */
/**********/
// function createVerticalVinjett2Line(height){
//   // create vertical line div
//   var d = document.createElement('div');
//   // create horizontal line div
//   var d2 = document.createElement('div');
//   // create circle
//   var c = document.createElement('div');
//   // set line height
//   // d.setAttribute('style','height: ' + height + 'px');
//   d2.setAttribute('style','width: ' + getRandomWidth(220, 580) + 'px;');
//   // set line classes
//   d.className = 'line animated slideInDown grayscale1 ';
//   d2.className = 'horizontal-line animated slideInRightVinjett2 orange ';
//   // set circle class
//   c.className = 'circle';
//   // append circle to line
//   d.appendChild(d2);
//   d2.appendChild(c);
//   // append line to container
//   lines.appendChild(d);
// }
// function createHorizontalVinjett2Line(width){
//   var d = document.createElement('div');
//   // create circle
//   var c = document.createElement('div');
//   // set line width
//   d.setAttribute('style','width: ' + width + 'px');
//   // set line class
//   d.className = 'horizontal-line animated orange ';
//   // set circle class
//   c.className = 'circle';
//   // append circle to line
//   d.appendChild(c);
//   // append line to container
//   lines.appendChild(d);
// }

/*******************
     line.BUILD
 *******************/
/**********/
/* line.1 */
/**********/
function buildRandomVinjett1Lines(amount){
  var len = amount,
      i = 0;
  for (i; i < len; i++){
    createRandomVinjett1Line(getRandomWidth(33, 95), getRandomColor());
  }
}

function buildOrderedVinjett1Lines(amount){
  var len = amount,
      i = 0;
  for (i; i < len; i++){
    createOrderedVinjett1Line(getRandomWidth(33, 95), orderedColors[i]);
  }
}

/**********/
/* line.2 */
/**********/
// function buildVerticalVinjett2Lines(length, increment){
//   var lineIncrement = increment;
//   var lineLength = length;
//   var len = 7,
//       i = 0;
//   for (i; i < len; i++){
//     createVerticalVinjett2Line(lineLength);
//     lineLength = lineLength + lineIncrement;
//   }
// }
// // todo
// function buildHorizontalVinjett2Lines(){
//   var len = 7,
//       i = 0;
//   for (i; i < len; i++){
//     createHorizontalVinjett2Line(getRandomWidth(33, 95));
//     // createHorizontalVinjett2Line(getRandomWidth(33, 95), orderedColors[i]);
//   }
// }

/**********************
     line.DISPLAY
 **********************/
/**********/
/* line.1 */
/**********/
function displayVinjett1(amount){

  vinjett = v1;
  v1.style.display = 'block';
  lines = v1.children[0];
  buildOrderedVinjett1Lines(amount);
}

/**********/
/* line.2 */
/**********/
// function displayVinjett2(){
//   var lineIncrement = 40;
//   var lineLength = 185;
//
//   vinjett = v2;
//   v2.style.display = 'block';
//   lines = v2.children[0];
//   buildVerticalVinjett2Lines(lineLength, lineIncrement);
//   // displayHorizontalVinjett2Lines();
// }


// App Functions



// App
(function() {

  // displayVinjett1(10);
  v4.style.display = 'block';
  // v2.style.display = 'block';
  // displayVinjett2();

  //nav
  for (tab in tabs) {
    // console.log(tabs[tab]);

    if (tabs[tab]){
      tabs[tab].addEventListener('click', function(event) {
        event.preventDefault();
        var $this = this;
        clearSelected();
        $this.classList.add("selected");
        // console.log(this.id);

        clearActive();
        console.log($this);
        if ($this.id === "menu-item-1") {
          vinjetter.one.classList.add("active");
        } else if ($this.id === "menu-item-2") {
          vinjetter.two.classList.add("active");
        } else if ($this.id === "menu-item-3") {
          vinjetter.two.classList.add("active");
        } else if ($this.id === "menu-item-4") {
          vinjetter.two.classList.add("active");
        } else if ($this.id === "menu-item-5") {
          vinjetter.two.classList.add("active");
        } else {
          vinjetter.three.classList.add("active");
        }
      });
    }
  }
  // displayRandomVinjett1Lines();
  // overwriteColorsWithOrdered();
  // displayOrderedVinjett1Lines(10);
  // displayRandomVinjett1Lines(10);

})();


// var lines = document.getElementsByClassName("line"),
//     len = lines !== null ? lines.length : 0,
//     i = 0;
// for(i; i < len; i++) {
//     lines[i].className += " animated slideInLeft";
//     // lines[i].className += " test";
// }
