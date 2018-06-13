function setup() {
	frameRate(5)
	canv = createCanvas(w*columns, w*rows);
	canv.mousePressed(cliqueCase);
	noStroke();
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
		cell = board[i][j].valeur;
		if (cell <= 1) {
			if (cell > 0.50) {
				coul = cell-0.05;
				if (coul > 0.62) coul = 0.62;
				fill(50, (1 - coul) * 255, 10);

			}
			else {
				coul = cell;
				if (coul < 0.40) coul = 0.40;
				fill(0, 80, coul * 255);
			}
		} else if (cell == 3) {
			fill(255,0,0);
		} else if (cell == 2) {
			fill(0,0,255);
		}
		rect(i*w, j*w, w, w);
		}
	}
	generate();
}

function cliqueCase() {
	x = Math.floor(mouseX/w);
	y = Math.floor(mouseY/w);
	cell = board[x][y].valeur;
	console.log(cell);
	if (cell > 0.5 && cell < 2 && nbColons > 0) {
		console.log("Civilisation ajoutée");
		cell = 2;
		nbColons--;
	}
	board[x][y].valeur = cell;
}