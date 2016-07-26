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
  printLines();
})();

function printLines(){
  var lines = 10;
  for (line in lines) {
    image.innerHTML = 'Woo';
  }
  image.innerHTML = '<div class="line"></div>';
}
