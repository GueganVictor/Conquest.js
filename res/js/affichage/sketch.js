function setup() {
	frameRate(tick);
	canv = createCanvas(w*columns, w*rows);
	canv.mousePressed(cliqueCase);
	noStroke();


	board = new Array(columns);
	for (var i = 0; i < columns; i++) {
		board[i] = new Array(rows);
	}

	temp = new Array(columns);
	for (i = 0; i < columns; i++) {
		temp[i] = new Array(rows);
	}


	init();

	slider = createSlider(1, 100, 10);
	console.log("r "+board[25][25].resistance);
	console.log("f "+board[25][25].fertilite);
}

function draw() {
	console.log(board[25][25].tour);
	tick = slider.value();
	frameRate(tick);
	background(255);
	noStroke();
	afficher();
	updateTab();
}

function afficher() {
	for ( var i = 0; i < columns;i++) {
		for ( var j = 0; j < rows;j++) {
			cell = board[i][j];
			fill(34,139,34);
			if (cell.valeur == 1) {
				fill(0,100,0);
			} else if (cell.valeur == 3) {
				fill(190,0,0);
			} else if (cell.valeur == 0) {
				fill(255*cell.tour/10,255*cell.tour/80,255*cell.tour/80);
				if (cell.tour > cell.fertilite/2) {
					fill(255*cell.tour/250,255*cell.tour/45,255*cell.tour/250);
				}
			}
			rect(i*w, j*w, w, w);
		}
	}
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