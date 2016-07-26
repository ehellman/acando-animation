var lines = 5;
var amountOfLines = 5;
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

function overwriteColorsWithOrdered(){
  var lines = document.getElementsByClassName("line"),
      len = lines !== null ? lines.length : 0,
      i = 0;
  for(i; i < len; i++) {
      lines[i].className += " " + orderedColors[i];
      // lines[i].className += " test";
  }
}
function getRandomColor(){
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}
var image = document.getElementById('image');

function createRandomLine(width, color){
	// create line
  var d = document.createElement('div');
  // create circle
  var c = document.createElement('div');
  // set line width
  d.setAttribute('style','width: ' + width + 'px');
  // set line class
  d.className = 'line ' + color;
  // set circle class
  c.className = 'circle';
  // append circle to line
  d.appendChild(c);
  // append line to container
  image.appendChild(d);
}

function createOrderedLine(){
  // create line
  var d = document.createElement('div');
  // create circle
  var c = document.createElement('div');
  // set line width
  d.setAttribute('style','width: ' + width + 'px');
  // set line class
  d.className = 'line ' + color;
  // set circle class
  c.className = 'circle';
  // append circle to line
  d.appendChild(c);
  // append line to container
  image.appendChild(d);


}


function displayOrderedLines(){
  lineWidths.forEach(function(entry){
    createRandomLine(entry, getRandomColor());
  });
}

(function() {

  displayOrderedLines();
  var lines = document.getElementsByClassName("line"),
      len = lines !== null ? lines.length : 0,
      i = 0;
  for(i; i < len; i++) {
      lines[i].className += " animated slideInLeft";
      // lines[i].className += " test";
  }

})();
