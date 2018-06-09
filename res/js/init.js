var w;
var columns;
var rows;
var board;
var next;
var seed;

function setup() {
  frameRate(5)
  createCanvas(720, 400);
  noStroke();
  w = 10;
  // Calculate columns and rows
  columns = 100;
  rows = 50;
  // Wacky way to make a 2D array is JS
  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }

  // Going to use multiple 2D arrays and swap them
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  background(255);
  noStroke();
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((board[i][j] > 0.5)) {
        fill(20, (1 - board[i][j]) * 255, 20);
      }
      else {
        fill(80, 80, (1 - board[i][j]) * 255);
      }
      rect(i*w, j*w, w, w);
    }
  }
  generate();

}

// reset board when mouse is pressed
function mousePressed() {
  init();
}

// Fill board randomly
function init() {
  seed = Math.random(0.2,0.6).toFixed(2);
  for (var y = 0; y < columns; y++) {
      for (var x = 0; x < rows; x++) {
          var height = PerlinNoise.noise(x/10, y/10, seed);
          console.log(seed);
          var r;
          board[y][x] = Math.round(height);
      }
  }
}

// The process of creating the new generation
function generate() {

  // Loop through every spot in our 2D array and check spots neighbors
  for (var x = 0; x < columns ; x++) {
    for (var y = 0; y < rows; y++) {
      if (board[x][y] >= 0.5) {


        next[x][y] = Math.random(0.2,0.8).toFixed(2);


      } else {
        next[x][y] = board[x][y];
      }
    }
  }

  // Swap!
  var temp = board;
  board = next;
  next = temp;
}