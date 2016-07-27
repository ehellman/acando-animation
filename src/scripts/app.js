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
  'purple',
  'lightBlue',
  'purple',
  'orange',
  'purple',
  'lightBlue',
  'purple',
  'lightBlue',
  'purple',
  'orange',
  'purple',
  'lightBlue',
  'purple'
];


// Selectors

var image = document.getElementById('image');


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
  image.appendChild(d);
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
  image.appendChild(d);
}


function displayRandomLines(amount){
  var len = amount,
      i = 0;
  for (i; i < len; i++){
    createRandomLine(getRandomWidth(15, 70), getRandomColor());
  }

  // lineWidths.forEach(function(entry){
  //   createRandomLine(entry, getRandomColor());
  // });
}

function displayOrderedLines(amount){
  var len = amount,
      i = 0;
  for (i; i < len; i++){
    createOrderedLine(getRandomWidth(15, 70), orderedColors[i]);
  }

  // for(i; i < len; i++) {
  //     lines[i].className += " " + orderedColors[i];
  // }
}

// App
(function() {

  // displayRandomLines();
  // overwriteColorsWithOrdered();
  displayOrderedLines(10);
  // displayRandomLines(10);

})();


// var lines = document.getElementsByClassName("line"),
//     len = lines !== null ? lines.length : 0,
//     i = 0;
// for(i; i < len; i++) {
//     lines[i].className += " animated slideInLeft";
//     // lines[i].className += " test";
// }
