// Initialising the canvas
let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.outerHeight;

// Setting up the letters
var letters = 'アイウエオカガキギクグケゲコゴサザシジスズセゼソゾダチヂツヅテデトドナニヌネノハパヒピフプヘペホポマミムメモヤユョヨラリルレロワヰヱヲンヴ'
letters = letters.split('');

// Setting up the columns
var fontSize = 13,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}


// Setting up the draw function
function draw() {
    
  ctx.fillStyle = 'rgba(0, 14, 90, .03)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#bdbdbd'
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }

}


// Loop the animation

setInterval(draw, 70);