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
	background(127);
	noStroke();
	afficher();
	if (document.getElementById("pause").checked == false) {
		updateTab();
	}
}

function afficher() {
	for ( var i = 0; i < columns;i++) {
		for ( var j = 0; j < rows;j++) {
			cell = board[i][j];
			fill(34,139,34);
			if (cell.valeur == 4) {
				fill(0,0,255);
			} else if (cell.valeur == 1) {
				fill(0,100,0);
			} else if (cell.valeur == 3) {
				fill(255,0,0);
			} else if (cell.valeur == 0) {
				fill(139,69,19);
				if (cell.tour < 2) {
					fill(180);
				}
				if (cell.tour < 10) {
					fill(255,69,0);
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