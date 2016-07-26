console.log('Working!');

const colors = [
  'blue',
  'lightBlue',
  'purple',
  'lightPurple',
  'orange',
];

const lineWidths = [
  76, 91, 66, 84, 60, 88, 77, 42, 99, 94
];

(function() {
  var image = document.getElementById('image');
  lineWidths.forEach(function(entry){
    image.appendChild = '<div class="line" style="width: ' + entry + '"></div>';
    console.log(entry);
  });
  // printLines();
})();

function printLines(){
  var lines = 10;
  lineWidths.forEach(function(entry){
    image.innerHTML = '<div class="line" style="width: ' + entry + '"></div>';
    console.log(entry);
  });
  // image.innerHTML = '<div class="line"></div>';
}
