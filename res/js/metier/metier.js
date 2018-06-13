function generate() {

	// Loop through every spot in our 2D array and check spots neighbors
	for (var x = 0; x < columns ; x++) {
		for (var y = 0; y < rows; y++) {
			if (board[x][y] > 1) {
				getRandomNeighbour(x,y);
			}
		}
	}
}

function lancer() {
	console.log("bou");
	while (villageBot > 0) {
		x = Math.round(random(1, 50));
		y = Math.round(random(1, 100));
		cell = board[x][y];
		if (cell > 0.5 && cell != 2) {
			console.log("Bot ajouté");
			cell = 3;
			villageBot--;
			board[x][y] = cell;
		} else{
			console.log("bot eau");
		}
	}
	villageBot = 2;
}

function getRandomNeighbour (i, j) {
	nbVoisin = 0;
	neighbors = new Array();
    if(estVoisin(i, j)) {
        if(estVoisin(i + 1, j)) {
			neighbors.push(i+1+","+j);
			nbVoisin++;
		}
        if(estVoisin(i - 1, j)) {
			neighbors.push(i-1+","+j);
			nbVoisin++;
		}
        if(estVoisin(i, j + 1)) {
			neighbors.push(i+","+j+1);
			nbVoisin++;
		}
        if(estVoisin(i, j - 1)) {
			neighbors.push(i+","+j-1);
			nbVoisin++;
		}
        if(estVoisin(i - 1, j + 1)) {
			neighbors.push(i-1+","+j+1);
			nbVoisin++;
		}
        if(estVoisin(i + 1, j - 1)) {
			neighbors.push(i+1+","+j-1);
			nbVoisin++;
		}
        if(estVoisin(i + 1, j + 1)) {
			neighbors.push(i+1+","+j+1);
			nbVoisin++;
		}
        if(estVoisin(i - 1, j - 1)) {
			neighbors.push(i-1+","+j-1);
			nbVoisin++;
		}
	}
	console.log("Nb voisin " + nbVoisin );
	rand = neighbors[Math.round(random(0,nbVoisin))];
	console.log(rand);
	if (!isNaN(rand)) {
		voisin = rand.split(",");
		console.log(voisin[0] +" "+voisin[1])
		board[voisin[0]][voisin[1]] = 2;
	}

}

function estVoisin(i, j) {
	x = 50; y = 100;
	flag = false;
    if (board[i] != null && board[i][j] != null) {
        flag = true;
	}
    return flag;
}